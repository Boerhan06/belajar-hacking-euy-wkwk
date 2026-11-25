'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  HelpCircle,
  MessagesSquare,
  Terminal,
  CalendarDays,
  Flame,
  Sparkles,
  LogIn,
  LogOut,
} from 'lucide-react';
import { useCourse } from '@/context/CourseContext';
import { COURSE_MODULES } from '@/lib/courseData';
import { LoginModal } from '@/components/LoginModal';

const NAV_ITEMS = [
  { href: '/', label: 'Beranda', icon: LayoutDashboard },
  { href: '/materi', label: 'Materi', icon: BookOpen },
  { href: '/kuis', label: 'Kuis', icon: HelpCircle },
  { href: '/tanya-jawab', label: 'Tanya Jawab', icon: MessagesSquare },
  { href: '/contekan', label: 'Contekan', icon: Terminal },
  { href: '/aktivitas', label: 'Aktivitas', icon: CalendarDays },
];

export function Navbar() {
  const pathname = usePathname();
  const { streakDays, xp, completedModules, user, logout } = useCourse();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const completedCount = completedModules.filter((slug) =>
    COURSE_MODULES.some((m) => m.slug === slug)
  ).length;
  const pct = Math.round((completedCount / COURSE_MODULES.length) * 100);

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen border-r border-[#1E1B18]/10 bg-[#FFF9F0] p-5">
        <div className="space-y-6">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group px-1">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border-2 border-[#C85A3D] bg-[#FAF3E8] transition-transform duration-200 group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt="NikoCode Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-[#1E1B18]">
                  NikoCode
                </span>
                <span className="rounded-full bg-[#FFEAD2] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C85A3D]">
                  Fast
                </span>
              </div>
              <p className="text-xs font-medium text-[#6E6259]">Kursus InfoSec</p>
            </div>
          </Link>

          {/* Vertical Nav Links */}
          <nav className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-colors ${
                    active ? 'text-[#FAF3E8]' : 'text-[#52463C] hover:bg-[#FFEAD2]/60 hover:text-[#1E1B18]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="sidebar-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-2xl bg-[#1E1B18]"
                    />
                  )}
                  <Icon
                    className={`relative z-10 h-4 w-4 ${
                      active ? 'text-[#FFB067]' : 'text-[#6E6259]'
                    }`}
                  />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar Stats Bento Card */}
        <div className="space-y-3">
          <div className="rounded-3xl bg-[#1E1B18] p-4 text-[#FAF3E8]">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB067]">
                <Flame className="h-4 w-4 fill-[#FF9472] text-[#FF9472]" />
                {streakDays} Hari
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FFB067] px-2.5 py-0.5 text-[11px] font-extrabold text-[#1E1B18]">
                <Sparkles className="h-3 w-3" /> {xp} XP
              </span>
            </div>

            <div className="mt-3.5">
              <div className="flex items-center justify-between text-[11px] text-[#FAF3E8]/70">
                <span>Progres Kurikulum</span>
                <span className="font-bold text-[#FAF3E8]">{pct}%</span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#FFB067] transition-all duration-300"
                  style={{ width: `${Math.max(pct, 4)}%` }}
                />
              </div>
            </div>
          </div>

          {user ? (
            <div className="flex items-center justify-between gap-2.5 rounded-2xl border border-[#1E1B18]/10 bg-white p-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-[#FFB067] bg-[#FAF3E8]">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-extrabold text-[#1E1B18]">{user.name}</p>
                  <p className="truncate text-[10px] font-medium text-[#6E6259]">{user.role}</p>
                </div>
              </div>
              <button
                onClick={logout}
                title="Keluar"
                className="shrink-0 rounded-xl p-1.5 text-[#6E6259] hover:bg-[#FFEAD2] hover:text-[#C85A3D] transition-colors"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFB067] px-4 py-3 text-xs font-extrabold text-[#1E1B18] transition-colors hover:bg-[#FF9472]"
            >
              <LogIn className="h-4 w-4" />
              <span>Masuk / Login</span>
            </button>
          )}
        </div>
      </aside>

      {/* Mobile & Tablet Top Bar */}
      <header className="sticky top-0 z-50 border-b border-[#1E1B18]/10 bg-[#FAF3E8]/95 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 overflow-hidden rounded-xl border-2 border-[#C85A3D] bg-[#FFF8EE]">
              <img src="/logo.jpg" alt="NikoCode Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-extrabold text-[#1E1B18]">NikoCode</span>
          </Link>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#1E1B18] px-2.5 py-1 text-[11px] font-bold text-[#FAF3E8]">
              <Flame className="h-3 w-3 fill-[#FF9472] text-[#FF9472]" /> {streakDays}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFB067] px-2.5 py-1 text-[11px] font-bold text-[#1E1B18]">
              <Sparkles className="h-3 w-3" /> {xp} XP
            </span>
            {user ? (
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1E1B18]/10 bg-white py-0.5 pl-0.5 pr-2.5 text-[11px] font-bold text-[#1E1B18]"
                title="Klik untuk keluar"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="max-w-[72px] truncate">{user.name}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="inline-flex items-center gap-1 rounded-full bg-[#1E1B18] px-2.5 py-1 text-[11px] font-bold text-[#FFB067]"
              >
                <LogIn className="h-3 w-3" /> Login
              </button>
            )}
          </div>
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto px-4 pb-2.5">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-[#1E1B18] text-[#FAF3E8]'
                    : 'bg-white text-[#52463C] border border-[#1E1B18]/10'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
