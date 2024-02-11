import InquiryForm from "@/components/Inquiry";
import { ServicesDisplay } from "./ServicesDisplay";

export function Contact() {
  return (
    <section className="flex flex-col gap-16 lg:grid lg:grid-cols-2 justify-center items-center px-8 lg:px-32 m-auto">
      <ServicesDisplay />

      <InquiryForm />
    </section>
  );
}
