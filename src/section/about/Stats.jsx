"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, end: 500, label: "Properties Sold", bg: "bg-primary-foreground/5" },
  { id: 2, end: 15, label: "Years Experience", bg: "bg-primary-foreground/10" },
  { id: 3, end: 1000, label: "Happy Clients", bg: "bg-primary-foreground/5" },
  { id: 4, end: 50, label: "Expert Agents", bg: "bg-primary-foreground/10" },
];

export const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`${stat.bg} p-10 rounded-2xl shadow hover:shadow-lg transition`}
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
          <div className="text-lg font-medium opacity-90">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
