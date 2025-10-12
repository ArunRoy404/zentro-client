import { Phone, MapPin, User } from "lucide-react";

export default function UserInfoCard({ user }) {
  const isPending = user.role === "pending";
  const displayRole = isPending
    ? "Customer"
    : user.role.charAt(0).toUpperCase() + user.role.slice(1);

  return (
    <div className="bg-background p-6 border border-shad">
      <h2 className="text-lg font-semibold text-primary mb-4">User Info</h2>
      <ul className="space-y-3 text-secondary">
        {user.phone && (
          <li className="flex items-center gap-2">
            <Phone size={18} className="text-primary" /> {user.phone}
          </li>
        )}
        {user.address && (
          <li className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" /> {user.address}
          </li>
        )}
        <li className="flex items-center gap-2">
          <User size={18} className="text-primary" /> Role: {displayRole}
        </li>
      </ul>
    </div>
  );
}
