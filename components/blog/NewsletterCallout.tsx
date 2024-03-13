"use client";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsletter } from "@/lib/requests";
import { toast } from "sonner";
import { ClientError } from "graphql-request";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const NewsletterCallout = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: subscribeToNewsletter,
    onError: onError,
    onSuccess: onSuccess,
  });

  function onSuccess() {
    localStorage.setItem("newsletter", email);
    toast.success(
      "Subscribed to newsletter! Check your email to confirm your subscription."
    );
    setOpen(false);
  }

  function onError(err: ClientError) {
    if (!err.response.errors) return toast.error("Something went wrong!");
    toast.error(err.response.errors[0]!.message);
  }

  function handleOpen() {
    // Find localStorage key to see if already registered
    if (localStorage.getItem("newsletter")) return;

    setOpen(true);
  }

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 1000);
  }, []);
  return (
    <div className="px-5 md:px-0  md:max-w-7xl mx-auto gap-10 mt-12 grid">
      <div className="rounded-xl flex flex-col md:flex-row gap-5 items-center  justify-around border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
        <div className="flex flex-col gap-4 px-5">
          <h2 className="text-xl font-syne font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-md font-mono text-white ">
            Stay up to date with new article on full-stack development topics on
            every wednesday!
          </p>
          <div className="flex flex-col content-center gap-5 mt-3">
            <Input
              className="grid-cols-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              onClick={() => mutateAsync(email)}
              disabled={isPending}
              className=" rounded-xl flex h-12 bg-white w-28  hover:bg-white/90 hover:scale-105 items-center justify-center px-6 font-mediumtransition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              {isPending ? "Loading..." : "Subscribe"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
