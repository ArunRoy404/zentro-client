'use client'

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Footer() {
  const pathname = usePathname();

  if (
    pathname.includes("/dashboard") ||
    pathname.includes("/signin") ||
    pathname.includes("/registration")
  ) {
    return <></>;
  }



  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-shad bg-background text-primary">
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">Zentro</h2>
          <p className="mt-3 text-secondary text-sm leading-relaxed">
            Discover your dream home with Zentro — where modern design meets
            comfort and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">
            Quick Links
          </h3>
          <ul className="space-y-2 text-secondary">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="hover:text-primary transition"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">
            Properties
          </h3>
          <ul className="space-y-2 text-secondary">
            <li>
              <Link href="#" className="hover:text-primary transition">
                Featured Homes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Luxury Villas
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Apartments
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Commercial Spaces
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Follow Us</h3>
          <div className="flex gap-4 text-secondary">
            <Link href="#" className="hover:text-primary transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-primary transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-primary transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-primary transition">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-shad text-center py-6 text-sm text-secondary">
        © {year} Zentro. All rights reserved.
      </div>
    </footer>
  );
}
