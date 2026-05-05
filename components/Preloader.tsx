"use client";

import { useState, useEffect } from "react";
import { Coffee } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#8B7355] to-[#6B5344] transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-pulse">
          <Coffee className="w-16 h-16 text-white" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          HealthTracker
        </h1>
        <div className="h-1 bg-white/30 rounded-full animate-pulse" style={{ width: 120 }} />
      </div>
    </div>
  );
}