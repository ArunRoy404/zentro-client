"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputCustom from "@/components/Input/InputCustom";
import Spinner from "@/components/ui/Spinner";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Message from "@/components/ui/Message";
import { useRouter } from "next/navigation";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  bio: z.string().min(20, "Bio must be at least 20 characters"),
  licenseNo: z.string().min(5, "License number is required"),
  officeAddress: z.string().min(5, "Office address is required"),
  email: z.string(),
  name: z.string(),
});

export default function AgentApplyForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      licenseNo: "",
      officeAddress: "",
      email: "",
      name: "",
    },
  });

  useEffect(() => {
    if (session) {
      form.reset({
        email: session?.user?.email,
        name: session?.user?.name,
      });
    }
  }, [session]);

  const onSubmit = async (values) => {
    if (!session?.user?.email) {
      toast.error("Please log in first.");
      return;
    }

    setIsLoading(true);

    try {
      values.userId = session?.user?._id;

      const response = await fetch("http://localhost:5000/api/v1/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Your agent application has been submitted!");
        router.push("/dashboard");
      } else {
        toast.error(data.message || "Failed to submit application");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Apply Now" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-left"
          >
            <InputCustom
              label="Contact Name"
              id="name"
              readOnly={true}
              form={form}
            />
            <InputCustom
              label="Contact Email"
              id="email"
              readOnly={true}
              form={form}
            />
            <InputCustom
              form={form}
              label="Office Address"
              id="officeAddress"
            />
            <InputCustom form={form} label="License Number" id="licenseNo" />
            <InputCustom
              form={form}
              label="Professional Bio"
              id="bio"
              textarea
            />

            <Message status={status} />

            <Button
              disabled={isLoading}
              type="submit"
              className="w-full text-sm md:text-base font-bold py-6"
            >
              {isLoading ? (
                <Spinner stroke="10" color="white" size="10" />
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </Section>
  );
}
