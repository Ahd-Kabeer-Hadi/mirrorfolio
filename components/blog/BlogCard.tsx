import { PostMetadata } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { BookOpen } from "lucide-react";

type Props = {
  post: PostMetadata;
};

export default function BlogCard({ post }: Props) {
  return (
    <Card className="flex flex-col  rounded-xl  gap-5 items-center justify-between border-[1px] border-card-border/20 bg-[#18181D]/60  bg-opacity-60 backdrop-filter backdrop-blur-md ">
      <CardHeader>
        <img
          className=" rounded-xl h-full backdrop-filter backdrop-blur-md border-[1px] border-card-border/20"
          src={post.coverImage.url}
          alt={post.title}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold line-clamp-2">
          <Link href={`blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="mt-3 flex gap-3 items-center">
          {post?.author.profilePicture && (
            <img
              src={post.author.profilePicture}
              className="h-10 w-10 rounded-full"
            />
          )}{" "}
          <div>
            <p className="text-lg font-semibold font-syne">
              {post.author.name}
            </p>
            <p className="text-sm text-[#A1A1AA] font-thin flex font-inter items-center ">
              <BookOpen size={18} className="mr-3" />
              {post.readTimeInMinutes} min read
            </p>{" "}
          </div>
        </div>
        <div> </div>
        <p className="text-[#A1A1AA] line-clamp-3 mt-3">
          {post.subtitle || post.content.text}
        </p>
      </CardContent>
    </Card>
  );
}
