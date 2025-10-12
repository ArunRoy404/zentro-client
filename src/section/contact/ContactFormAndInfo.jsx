import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import React from "react";

const ContactFormAndInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <ContactForm></ContactForm>

        {/* Contact Info */}
        <ContactInfo></ContactInfo>
      </div>
    </section>
  );
};

export default ContactFormAndInfo;
