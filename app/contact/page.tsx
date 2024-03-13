import ContactForm from "@/components/Forms/ContactForm";

export default function Contact() {
  return (
    <section className="px-4 container max-w-[1024px]">
      <div className="w-full mb-16 mt-44">
        <h1 className="break-words text-5xl font-bold leading-none text-white md:text-[80px]">
          Get in touch
        </h1>
        <p className="mb-16 mt-4 text-base text-[#A1A1AA]  md:text-2xl">
          Let's get connected and build something awesome.
        </p>
        <div className="h-[1px] w-full bg-white/40"></div>
      </div>
      <ContactForm />
    </section>
  );
}
