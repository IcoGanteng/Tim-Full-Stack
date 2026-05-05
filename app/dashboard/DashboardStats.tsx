"use client";

import { useState, useEffect, useRef } from "react";
import { Activity, Flame, Moon, Droplets } from "lucide-react";

const todayStats = {
  steps: { current: 8432, goal: 10000, unit: 'steps' },
  calories: { current: 1650, goal: 2000, unit: 'kcal' },
  sleep: { current: 7.5, goal: 8, unit: 'hours' },
  water: { current: 6, goal: 8, unit: 'glasses' },
};

function AnimatedStatCard({ title, current, goal, unit, icon: Icon, color, progress }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = 60;
    const increment = current / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= current) {
        setDisplayValue(current);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, current]);

  return (
    <div ref={ref} className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-0.5 transition-transform">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-xl ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs text-[#7A6B5E] dark:text-[#B8A99A] font-mono">{Math.round(progress)}%</span>
      </div>
      <h3 className="text-sm text-[#7A6B5E] dark:text-[#B8A99A] mb-1">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold font-mono text-[#3D2E24] dark:text-[#FAF7F2]">{displayValue}</span>
        <span className="text-sm text-[#7A6B5E] dark:text-[#B8A99A]">/ {goal} {unit}</span>
      </div>
      <div className="mt-3 h-2 bg-[#E8D5C4] dark:bg-[#5A4A40] rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${color.split(' ')[0].replace('text-', 'bg-')}`} style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
    </div>
  );
}

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      <AnimatedStatCard title="Steps" current={todayStats.steps.current} goal={todayStats.steps.goal} unit="steps" icon={Activity} color="bg-[#C4A77D]/20 text-[#8B7355]" progress={(todayStats.steps.current / todayStats.steps.goal) * 100} />
      <AnimatedStatCard title="Calories" current={todayStats.calories.current} goal={todayStats.calories.goal} unit="kcal" icon={Flame} color="bg-[#D4A574]/20 text-[#D4A574]" progress={(todayStats.calories.current / todayStats.calories.goal) * 100} />
      <AnimatedStatCard title="Sleep" current={todayStats.sleep.current} goal={todayStats.sleep.goal} unit="hours" icon={Moon} color="bg-[#6B5344]/20 text-[#6B5344]" progress={(todayStats.sleep.current / todayStats.sleep.goal) * 100} />
      <AnimatedStatCard title="Water" current={todayStats.water.current} goal={todayStats.water.goal} unit="glasses" icon={Droplets} color="bg-[#C4A77D]/20 text-[#8B7355]" progress={(todayStats.water.current / todayStats.water.goal) * 100} />
    </div>
  );
}