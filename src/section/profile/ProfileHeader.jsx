import { User, MessageCircle, AlertCircle } from "lucide-react";

export default function ProfileHeader({ user }) {
  const isPending = user.role === "pending";
  const displayRole = isPending
    ? "Customer"
    : user.role.charAt(0).toUpperCase() + user.role.slice(1);

  return (
    <div className="flex mt-20 md:mt-10 flex-col md:flex-row justify-between items-start md:items-center bg-background p-6  border border-shad gap-6">
      {/* Left side: User info */}
      <div className="flex items-center gap-6 w-full md:w-auto">
        <img
          src={user.photoUrl || "/default-avatar.png"}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h1 className="text-2xl font-bold text-primary">{user.name}</h1>
          <p className="text-secondary">{user.email}</p>
          <span className="mt-1 inline-block px-3 py-1 text-sm bg-primary/10 text-primary font-medium">
            {displayRole}
          </span>
        </div>
      </div>

      {/* Right side: Zentro message */}
      <div className="flex items-start md:items-center gap-2 bg-secondary/10 p-4 border border-shad max-w-full md:max-w-xs">
        <MessageCircle size={20} className="text-primary mt-1 md:mt-0" />
        <p className="text-sm text-secondary">
          Welcome to <strong>Zentro</strong>! Manage properties, connect with
          verified agents, and explore the best real estate opportunities
          efficiently from your dashboard.
        </p>
      </div>
    </div>
  );
}
