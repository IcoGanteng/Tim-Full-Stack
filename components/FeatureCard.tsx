"use client";

import { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title = "Feature Title",
  description = "Feature description goes here",
  gradientFrom = "#8B7355",
  gradientTo = "#6B5344",
}) {
  return (
    <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150 cursor-pointer group">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-150 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-[#3D2E24] dark:text-[#FAF7F2] mb-2">
        {title}
      </h3>

      <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A] leading-relaxed">
        {description}
      </p>
    </div>
  );
}