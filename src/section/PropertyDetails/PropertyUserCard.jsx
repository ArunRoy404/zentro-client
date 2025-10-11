import React from "react";
import Image from "next/image";
import { Mail, Phone, Home, User } from "lucide-react";

export default function PropertyUserCard({ user }) {
  return (
    <div className="border border-[var(--shad)] p-10 shadow">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
        <User className="text-[var(--primary)]" /> User Info
      </h2>

      <div className="flex items-center gap-4">
        <Image
          src={user.photoUrl}
          alt={user.name}
          width={70}
          height={70}
          className="object-cover border border-[var(--shad)]"
        />
        <div>
          <p className="font-semibold text-[var(--primary)]">{user.name}</p>
          <p className="flex items-center gap-2 text-[var(--secondary)]">
            <Mail size={16} /> {user.email}
          </p>
          <p className="flex items-center gap-2 text-[var(--secondary)]">
            <Phone size={16} /> {user.phone}
          </p>
          <p className="flex items-center gap-2 text-[var(--secondary)]">
            <Home size={16} /> {user.address}
          </p>
        </div>
      </div>
    </div>
  );
}
