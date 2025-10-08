"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Section from "@/components/Section/Section";
import Spinner from "@/components/ui/Spinner";
import ProfileHeader from "@/section/profile/ProfileHeader";
import UserInfoCard from "@/section/profile/UserInfoCard";
import AgentInfoCard from "@/section/profile/AgentInfoCard";
import AlertCustom from "@/components/Alert/AlertCustom";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?._id) {
      fetch(`https://zentro-server.vercel.app/api/v1/users/${session.user._id}`)
        .then((res) => res.json())
        .then((resData) => {
          setData(resData.data);
        })
        .finally(() => setLoading(false));
    }
  }, [session]);

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <Spinner size={12} />
      </div>
    );

  if (!data?.user)
    return (
      <div className="w-full flex justify-center">
        <div className="py-20 w-50">
          <AlertCustom status={{ type: 'error', message: "User Not Found" }} />
        </div>;
      </div>
    )

  const { user, agent } = data;

  return (
    <Section>
      <ProfileHeader user={user} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <UserInfoCard user={user} />
        {agent && <AgentInfoCard agent={agent} />}
      </div>
    </Section>
  );
}
