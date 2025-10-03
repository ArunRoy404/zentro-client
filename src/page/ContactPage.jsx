"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔥 এখানে তোমার backend API কল করতে পারো
    console.log("Form Submitted:", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-[var(--primary)] text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[var(--secondary)]">
            Have questions about buying, selling, or renting a property? We’re
            here to help every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              ></textarea>

              <button
                type="submit"
                className="bg-[var(--primary)] text-white px-6 py-3 rounded hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <p className="mb-4 text-[var(--secondary)]">
              Feel free to reach out to us directly or visit our office during
              business hours.
            </p>

            <ul className="space-y-4 text-lg">
              <li>
                <strong>📍 Address:</strong> 123 Main Street, Dhaka, Bangladesh
              </li>
              <li>
                <strong>📞 Phone:</strong> +880 1234 567 890
              </li>
              <li>
                <strong>📧 Email:</strong> info@zentrorealty.com
              </li>
            </ul>

            <div className="mt-6 flex space-x-6">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-16 bg-[var(--primary)] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Looking for Your Dream Home?
        </h2>
        <p className="mb-6 text-lg">
          Contact us today and let our experts help you find the perfect
          property.
        </p>
        <a
          href="/properties"
          className="bg-white text-[var(--primary)] px-6 py-3 rounded font-semibold hover:opacity-90 transition"
        >
          Browse Properties
        </a>
      </section>
    </main>
  );
}
