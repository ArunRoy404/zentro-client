import { FileText, Hash, Briefcase, Home, AlertCircle } from "lucide-react";

export default function AgentInfoCard({ agent }) {
  return (
    <div className="bg-background p-6 border border-shad">
      <h2 className="text-lg font-semibold text-primary mb-4">Agent Info</h2>
      <ul className="space-y-3 text-secondary">
        <li className="flex items-center gap-2">
          <Hash size={18} className="text-primary" /> License No:{" "}
          {agent.licenseNo}
        </li>
        <li className="flex items-center gap-2">
          <Briefcase size={18} className="text-primary" /> Bio: {agent.bio}
        </li>
        <li className="flex items-center gap-2">
          <Home size={18} className="text-primary" /> Office:{" "}
          {agent.officeAddress}
        </li>
        <li className="flex items-center gap-2">
          <FileText size={18} className="text-primary" /> Status: {agent.status}
        </li>
      </ul>
      {agent.status === "pending" && (
        <div className="mt-2 flex items-center gap-2 text-sm text-yellow-600 bg-yellow-100 px-3 py-2 rounded-md border border-yellow-300">
          <AlertCircle size={16} />
          <span>
            You’ve applied to become an agent. Your request is under review and
            not approved yet.
          </span>
        </div>
      )}
      {agent?.status === "rejected" && (
        <div className="mt-2 flex items-center gap-2 text-sm text-red-600 bg-red-100 px-3 py-2 rounded-md border border-red-300">
          <AlertCircle size={16} />
          <span>
            Your application to become an agent was{" "}
            <strong>not approved</strong>. Please review the requirements and
            consider reapplying with updated information.
          </span>
        </div>
      )}
    </div>
  );
}
