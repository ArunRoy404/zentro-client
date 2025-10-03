import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Looking for Your Dream Home?</h2>
      <p className="mb-6 text-lg">
        Contact us today and let our experts help you find the perfect property.
      </p>
      <a
        href="/properties"
        className="bg-white text-[var(--primary)] px-6 py-3 rounded font-semibold hover:opacity-90 transition"
      >
        Browse Properties
      </a>
    </section>
  );
};

export default CTA;
