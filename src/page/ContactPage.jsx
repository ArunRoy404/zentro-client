import PageHeading from "@/components/shared/PageHeading";
import ContactFormAndInfo from "@/section/contact/ContactFormAndInfo";
import CTA from "@/section/contact/CTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHeading
        title="Get in Touch With Us"
        subtitle="Have questions about buying, selling, or renting a property? We’re
            here to help every step of the way."
      ></PageHeading>

      {/* Contact Form + Info */}
      <ContactFormAndInfo />

      {/* Map Section */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Find Us on the Map
        </h2>
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full rounded shadow-[0_4px_10px_var(--shad)]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903279013007!2d90.3912!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b3c66f8f3f%3A0x4b1d5a7b51d52b8!2sDhaka!"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <CTA></CTA>
    </main>
  );
}
