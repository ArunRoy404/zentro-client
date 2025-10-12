import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
      <p className="mb-4 text-secondary">
        Feel free to reach out to us directly or visit our office during
        business hours.
      </p>

      <ul className="space-y-4 text-lg">
        <li className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-secondary mt-1" />
          <span>
            <strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh
          </span>
        </li>

        <li className="flex items-start gap-3">
          <Phone className="w-6 h-6 text-secondary mt-1" />
          <span>
            <strong>Phone:</strong> +880 1234 567 890
          </span>
        </li>

        <li className="flex items-start gap-3">
          <Mail className="w-6 h-6 text-secondary mt-1" />
          <span>
            <strong>Email:</strong> info@zentrorealty.com
          </span>
        </li>
      </ul>

      <div className="mt-6 flex space-x-6">
        <Link href="#" className="hover:underline">
          Facebook
        </Link>
        <Link href="#" className="hover:underline">
          Instagram
        </Link>
        <Link href="#" className="hover:underline">
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
