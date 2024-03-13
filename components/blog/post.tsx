"use client";

import { getPostBySlug } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "../ui/button";
import { NewsletterCallout } from "./NewsletterCallout";

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  if (!data) return notFound();
  const date = new Date(data?.publishedAt);
  const publishedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <section className="w-full mb-16 mt-28">
      <img
        src={data?.coverImage.url}
        alt= {`Cover image for ${data?.title}`}
        className="w-full rounded-xl object-cover"
      />
      <h1 className="text-4xl lg:text-6xl text-center w-full leading-relaxed font-bold mt-20 ">
        {data?.title}
      </h1>
      <p className="my-10 text-center text-xl text-gray-400">
        {data?.subtitle}
      </p>

      <div className="flex  items-center justify-center my-8 px-5">
        <div className=" flex items-center justify-evenly flex-col gap-5 md:flex-row">
          <div className="flex items-center">
            {data?.author.profilePicture && (
              <img
                src={data?.author.profilePicture}
                alt={data?.author.name}
                className="rounded-full h-10 w-10 mr-5 border-[1px] border-card-border/20"
              />
            )}
            <p className="ml-2 font-semibold text-lg text-white md:ml-0">
              {data?.author.name}
            </p>
            <span className="mx-3 hidden font-bold text-3xl text-slate-500 md:block">
              ·
            </span>
          </div>
          <div className="flex items-center">
            <p className="ml-2 font-semibold text-lg text-white/65 md:ml-0">
              {publishedDate}
            </p>
            <span className="mx-3 font-bold text-3xl text-slate-500 md:block">
              ·
            </span>
            <p className="ml-2 font-semibold text-lg text-white/65 md:ml-0 flex items-center">
              <BookOpen size={18} className="mr-3" /> {data?.readTimeInMinutes}{" "}
              min read
            </p>
          </div>
        </div>
      </div>

      <div
        className="blog-content text-xl leading-loose flex flex-col gap-5 mt-8"
        dangerouslySetInnerHTML={{ __html: data!.content.html }}
      ></div>
      <NewsletterCallout />
    </section>
  );
}
