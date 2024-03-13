import NewsLetterCard from "@/components/blog/NewsLetterCard";
import Posts from "@/components/blog/posts";
import { getPosts } from "@/lib/requests";
import { PostMetadata } from "@/lib/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Library() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (
      lastPage: {
        node: PostMetadata;
        cursor: string;
      }[]
    ) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });
  return (
    <>
      <section className="w-full mb-16 mt-44">
        <div>
          <h1 className="break-words text-5xl font-bold leading-none text-white md:text-[80px]">
            Scribbles
          </h1>
          <p className="mb-16 mt-4 text-base text-[#A1A1AA]  md:text-2xl">
            where I share my thoughts and learnings on software development, and
            my journey.
          </p>
          <div className="h-[1px] w-full bg-white/40"></div>
        </div>
        <div className="w-full grid grid-cols-1  md:grid-cols-3 gap-4 mt-10">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Posts />
          </HydrationBoundary>
        </div>
      </section>
      <NewsLetterCard />
    </>
  );
}
