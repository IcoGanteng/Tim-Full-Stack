"use client";

import Link from "next/link";
import { LayoutDashboard, Home, Github, Twitter, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

const socialLinks = [
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] dark:bg-[#2C2420] border-t border-[#E8D5C4] dark:border-[#5A4A40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 cursor-pointer mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8B7355] to-[#6B5344] flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#3D2E24] dark:text-[#FAF7F2]">
                HealthTracker
              </span>
            </Link>
            <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A]">
              Track your health metrics, achieve your goals, and live a healthier life.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#3D2E24] dark:text-[#FAF7F2] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[#7A6B5E] dark:text-[#B8A99A] hover:text-[#8B7355] dark:hover:text-[#C4A77D] transition-colors duration-150 cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#3D2E24] dark:text-[#FAF7F2] mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-xl bg-[#E8D5C4] dark:bg-[#5A4A40] text-[#7A6B5E] dark:text-[#B8A99A] hover:bg-[#8B7355] hover:text-white transition-all duration-150 cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E8D5C4] dark:border-[#5A4A40] text-center">
          <p className="text-xs text-[#7A6B5E] dark:text-[#B8A99A]">
            &copy; {new Date().getFullYear()} HealthTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}