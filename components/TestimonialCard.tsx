"use client";

import { Star } from "lucide-react";

export default function TestimonialCard({
  name = "John Doe",
  role = "Software Engineer",
  content = "This is an amazing product!",
  rating = 5,
  avatarColor = "#8B7355",
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150 cursor-pointer">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#3D2E24] dark:text-[#FAF7F2]">
            {name}
          </h4>
          <p className="text-xs text-[#7A6B5E] dark:text-[#B8A99A]">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-[#D4A574] text-[#D4A574]" : "text-[#E8D5C4] dark:text-[#5A4A40]"
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A] leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>
    </div>
  );
}