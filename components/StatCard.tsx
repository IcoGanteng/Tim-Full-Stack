"use client";

import { useState, useEffect, useRef } from "react";
import { Footprints, Flame, Moon, Droplets, Heart } from "lucide-react";

const iconMap = {
  footsteps: Footprints,
  flame: Flame,
  moon: Moon,
  droplets: Droplets,
  heart: Heart,
};

export default function StatCard({
  type = "footsteps",
  value = 0,
  goal = 10000,
  label = "Steps",
  unit = "",
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const progress = Math.min((value / goal) * 100, 100);
  const Icon = iconMap[type] || Footprints;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const iconColors = {
    footsteps: { bg: "bg-[#C4A77D]/10", text: "text-[#8B7355]" },
    flame: { bg: "bg-[#D4A574]/10", text: "text-[#D4A574]" },
    moon: { bg: "bg-[#6B5344]/10", text: "text-[#6B5344]" },
    droplets: { bg: "bg-[#C4A77D]/10", text: "text-[#8B7355]" },
    heart: { bg: "bg-red-100", text: "text-red-500" },
  };

  const progressColors = {
    footsteps: "bg-gradient-to-r from-[#8B7355] to-[#C4A77D]",
    flame: "bg-gradient-to-r from-[#D4A574] to-[#E8C5A5]",
    moon: "bg-gradient-to-r from-[#6B5344] to-[#8B7355]",
    droplets: "bg-gradient-to-r from-[#8B7355] to-[#D4A574]",
    heart: "bg-gradient-to-r from-red-400 to-red-500",
  };

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-0.5 transition-transform duration-150"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconColors[type]?.bg || iconColors.footsteps.bg}`}>
          <Icon className={`w-6 h-6 ${iconColors[type]?.text || iconColors.footsteps.text}`} />
        </div>
        <span className="text-xs font-medium text-[#7A6B5E] dark:text-[#B8A99A] bg-[#FAF7F2] dark:bg-[#2C2420] px-2 py-1 rounded-lg">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold font-mono text-[#3D2E24] dark:text-[#FAF7F2]">
          {displayValue.toLocaleString()}
        </span>
        {unit && (
          <span className="ml-1 text-lg text-[#7A6B5E] dark:text-[#B8A99A]">
            {unit}
          </span>
        )}
      </div>

      <p className="text-sm font-medium text-[#7A6B5E] dark:text-[#B8A99A] mb-3">
        {label}
      </p>

      <div className="w-full h-2 bg-[#E8D5C4] dark:bg-[#5A4A40] rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className={`h-full rounded-full ${progressColors[type] || progressColors.footsteps}`}
        />
      </div>

      <p className="text-xs text-[#7A6B5E] dark:text-[#B8A99A] mt-2">
        Goal: {goal.toLocaleString()}
      </p>
    </div>
  );
}
