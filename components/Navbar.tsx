"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Target,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/80 dark:bg-[#2C2420]/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8B7355] to-[#6B5344] dark:from-[#C4A77D] dark:to-[#8B7355] flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-[#3D2E24] dark:text-[#FAF7F2] group-hover:text-[#8B7355] dark:group-hover:text-[#C4A77D] transition-colors duration-150">
              HealthTracker
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#8B7355] dark:bg-[#C4A77D] text-white shadow-md"
                      : "text-[#7A6B5E] dark:text-[#B8A99A] hover:bg-[#E8D5C4] dark:hover:bg-[#5A4A40] hover:text-[#3D2E24] dark:hover:text-[#FAF7F2]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-[#7A6B5E] dark:text-[#B8A99A] hover:bg-[#E8D5C4] dark:hover:bg-[#5A4A40] transition-all duration-150 cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-xl text-[#7A6B5E] dark:text-[#B8A99A] hover:bg-[#E8D5C4] dark:hover:bg-[#5A4A40] transition-all duration-150 cursor-pointer"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-[#FAF7F2] dark:bg-[#2C2420] border-t border-[#E8D5C4] dark:border-[#5A4A40]">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#8B7355] dark:bg-[#C4A77D] text-white"
                      : "text-[#7A6B5E] dark:text-[#B8A99A] hover:bg-[#E8D5C4] dark:hover:bg-[#5A4A40]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}