"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputCustom from "../Input/InputCustom";
import Spinner from "../ui/Spinner";
import Message from "../ui/Message";
import { toast } from "sonner";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        toast.success("Your message successfully submitted");
        form.reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        toast.error("Something went wrong. Try again later.");
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 bg-background p-6 rounded-lg border border-shad"
        >
          {/* Input Fields */}
          <InputCustom form={form} label="Name" id="name" />
          <InputCustom form={form} label="Subject" id="subject" />
          <InputCustom form={form} label="Email" id="email" />
          <InputCustom
            form={form}
            label="Message"
            id="message"
            textArea={true}
          />

          {/* Submit Button */}
          <Button
            disabled={isLoading}
            type="submit"
            className="mt-2 cursor-pointer w-full text-xs md:text-base font-bold leading-6 md:py-6"
          >
            {isLoading ? (
              <Spinner stroke="10" color="white" size="10" />
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
