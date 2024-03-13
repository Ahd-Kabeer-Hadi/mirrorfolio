"use client";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsletter } from "@/lib/requests";
import { toast } from "sonner";
import { ClientError } from "graphql-request";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function NewsLetterCard() {
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
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className=" rounded-xl  border-[1px] border-card-border/20 bg-[#18181D]/60  bg-opacity-60 backdrop-filter backdrop-blur-md">
        <DialogHeader>
          <h1 className="text-2xl font-bold">Join the newsletter!</h1>
        </DialogHeader>
        <p>
          Enter your email to join the newsletter and stay up to date with the
          latest posts published in this blog!
        </p>
        <div className="flex flex-col gap-5 mt-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={() => mutateAsync(email)}
            disabled={isPending}
            className="w-full rounded-xl inline-flexflex h-12 bg-white  hover:bg-white/90 hover:scale-105 items-center justify-center px-6 font-mediumtransition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            {isPending ? "Loading..." : "Subscribe"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
