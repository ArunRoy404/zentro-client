"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputCustom from "@/components/Input/InputCustom";
import Link from "next/link";

// Validation schema
const searchSchema = z.object({
  search: z.string().min(1, "Please enter a search term"),
});

export default function NotFound() {
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: { search: "" },
  });

  const onSubmit = (values) => {
    window.location.href = `/search?q=${encodeURIComponent(values.search)}`;
  };

  return (
    <main className="min-h-screen pt-24 pb-4 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background px-6">
      <section className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left: Animated 404 Graphic */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto"
          >
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden ring-1 ring-border/30 bg-muted/5 backdrop-blur-sm flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                  rx="20"
                  fill="url(#g1)"
                  fillOpacity="0.08"
                />

                <g
                  transform="translate(100,100)"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                >
                  <circle r="48" strokeOpacity="0.12" />
                  <circle r="34" strokeOpacity="0.08" />
                </g>

                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  fontSize="64"
                  fontWeight="700"
                  fontFamily="Inter, system-ui"
                  fill="hsl(var(--primary))"
                >
                  404
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Right: Text + Actions + Search */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Lost in Space
            </h1>
            <p className="text-lg text-foreground/70 max-w-md mb-8 leading-relaxed mx-auto lg:mx-0">
              The page you’re looking for doesn’t exist or may have been moved.
              Don’t worry — let’s help you find your way back.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/50 text-foreground/90"
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>

            {/* Search Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <InputCustom form={form} label="Search" id="search" />
                <Button type="submit" size="lg">
                  Search
                </Button>
              </form>
            </Form>

            <p className="mt-5 text-sm text-foreground/50">
              Try searching or return to the homepage. If this seems like a
              mistake, please get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
