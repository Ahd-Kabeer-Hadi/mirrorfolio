"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import sendMail from "@/app/api/mail/route";

export const EmailInputs = z.object({
  customerName: z.string(),
  email: z.string(),
  customerPhone: z.string().optional(),
  customerMessage: z.string(),
  submittedOn: z.string(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof EmailInputs>>({
    resolver: zodResolver(EmailInputs),
    defaultValues: {
      customerName: "",
      email: "",
      customerPhone: "",
      customerMessage: "",
      submittedOn: Date.now().toString(),
    },
  });
  const onSubmit = async (data: z.infer<typeof EmailInputs>) => {
    try {
      const { success } = EmailInputs.safeParse(data);
      if (!success) return console.error("Invalid data");
      const today = new Date();
      ("use server");
      const sendResult = await sendMail({
        customerMessage: data.customerMessage,
        customerName: data.customerName,
        email: data.email,
        customerPhone: data.customerPhone ? data.customerPhone?.toString() : "",
        submittedOn: today.toString(),
      });
      if (sendResult) {
        toast("Thank you for reaching out!", {
          description: "I&apos;ll get back to you shortly.",
        });
      } else {
        toast("OOOPS! Something went wrong", {
          description: " Please try again .",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mb-10"
        >
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-mono">Your Name?</FormLabel>
                <FormControl>
                  <Input placeholder="ex: John Doe" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-mono">
                  Email address?
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus-within:bg-transparent focus-visible:bg-transparent"
                    type="email"
                    placeholder="ex: johndoe@example.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-mono">
                  Phone number?
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="ex: (123) 456-7890"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerMessage"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormLabel className="text-xl font-mono">
                  Tell me about it
                </FormLabel>
                <FormControl>
                  <Textarea
                    lang="en"
                    rows={8}
                    placeholder="Just let it out, we can figure it out together."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-36 md:w-40 rounded-xl inline-flex font-semibold font-syne h-12 md:text-xl"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
