import { Shield, Briefcase, Search } from "lucide-react";

const roles = [
  {
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Admin",
    desc: "Admins oversee platform operations, manage users, monitor activity, and ensure a secure, seamless experience for everyone.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-secondary" />,
    title: "Agent",
    desc: "Agents bring listings to life, connect buyers and sellers, and provide professional guidance through every transaction.",
  },
  {
    icon: <Search className="w-6 h-6 text-secondary" />,
    title: "Customer",
    desc: "Customers enjoy an easy, powerful property search experience — browse, filter, and connect with agents effortlessly.",
  },
];

export default function Roles() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {roles.map((role, i) => (
        <div key={i} className="p-8 bg-background">
          <div className="flex items-center gap-2 mb-3">
            {role.icon}
            <h3 className="text-xl font-semibold">{role.title}</h3>
          </div>
          <p className="text-secondary leading-relaxed">{role.desc}</p>
        </div>
      ))}
    </div>
  );
}
