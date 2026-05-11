import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
    args: {
        orgId: v.string(),
        search: v.optional(v.string()),
        favorites: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }
        const isFavorites = args.favorites === "true";
        if (isFavorites) {
            const favoritedBoards = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_org", (q) => q.eq("userId", identity.subject).eq("orgId", args.orgId))
            .collect();
            const boards = await Promise.all(
                favoritedBoards.map((fav) => ctx.db.get(fav.boardId))
            );
            return boards
            .filter((board): board is NonNullable<typeof board> => board !== null)
            .map((board) => ({
                ...board,
                isFavorite: true,
            }));
        }
        const title = args.search?.trim();
        let boards = [];
        if (title) {
            boards = await ctx.db
            .query("boards")
            .withSearchIndex("search_title", (q) =>
                q.search("title", title).eq("orgId", args.orgId)
            )
            .collect();
        } else {
            boards = await ctx.db
            .query("boards")
            .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
            .order("desc")
            .collect();
        }
        return Promise.all(
            boards.map(async (board) => {
                const favorite = await ctx.db
                .query("userFavorites")
                .withIndex("by_user_board", (q) =>
                    q.eq("userId", identity.subject).eq("boardId", board._id)
                )
                .unique();
                return {
                    ...board,
                    isFavorite: !!favorite,
                };
            })
        );
    },
});