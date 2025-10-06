"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { id: 1, end: 500, label: "Properties Sold", bg: "bg-muted" },
  { id: 2, end: 15, label: "Years Experience", bg: "bg-primary/5" },
  { id: 3, end: 1000, label: "Happy Clients", bg: "bg-secondary/5" },
  { id: 4, end: 50, label: "Expert Agents", bg: "bg-accent/5" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={`${stat.bg} p-20 rounded-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <CountUp
                  end={stat.end}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
