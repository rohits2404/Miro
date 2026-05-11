import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/images/empty-search.svg"
            height={140}
            width={140}
            alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No Results Found!
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Try Searching For Something Else
            </p>
        </div>
    );
};