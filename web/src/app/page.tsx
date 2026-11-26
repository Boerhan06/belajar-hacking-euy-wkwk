'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Flame,
  Trophy,
  ArrowUpRight,
  Check,
  Clock,
  BookOpen,
  HelpCircle,
  MessagesSquare,
  Terminal,
  ShieldCheck,
  Sparkles,
  Play,
} from 'lucide-react';
import { useCourse } from '@/context/CourseContext';
import {
  COURSE_TRACKS,
  COURSE_MODULES,
  COURSE_PHASES,
  IOT_MODULES,
  IOT_PHASES,
  getModulesByTrack,
  getPhasesByTrack,
  getTrackById,
  TrackId,
} from '@/lib/courseData';
import { Cpu } from 'lucide-react';

const DAYS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.16, ease: 'easeOut' as const } },
};

export default function DashboardPage() {
  const {
    user,
    activeTrack,
    setActiveTrack,
    completedModules,
    dailyCheckins,
    toggleDayCheckin,
    quizScores,
    xp,
    streakDays,
  } = useCourse();

  const currentTrack = getTrackById(activeTrack);
  const currentModules = getModulesByTrack(activeTrack);
  const currentPhases = getPhasesByTrack(activeTrack);

  const totalModules = currentModules.length;
  const completedCount = completedModules.filter((slug) =>
    currentModules.some((m) => m.slug === slug)
  ).length;
  const remainingCount = totalModules - completedCount;
  const overallProgress = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  const nextModules = currentModules.filter((m) => !completedModules.includes(m.slug)).slice(0, 4);
  const firstNext = nextModules[0] ?? currentModules[0];

  const quizValues = Object.values(quizScores);
  const avgQuiz =
    quizValues.length > 0
      ? Math.round(quizValues.reduce((a, b) => a + b, 0) / quizValues.length)
      : 0;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {/* Track Selector Bar (Pilihan Materi / Jalur Belajar) */}
      <motion.div
        variants={cardVariants}
        className="rounded-3xl border border-[#1E1B18]/10 bg-white p-3.5 sm:p-4 shadow-sm"
      >
        <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[#1E1B18]"
              style={{ backgroundColor: currentTrack.color }}
            >
              {currentTrack.id === 'iot' ? (
                <Cpu className="h-6 w-6 text-[#1E1B18]" />
              ) : (
                <ShieldCheck className="h-6 w-6 text-[#1E1B18]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6E6259]">
                  Pilih Materi Latihan:
                </span>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-black"
                  style={{
                    backgroundColor: `${currentTrack.color}30`,
                    color: '#1E1B18',
                  }}
                >
                  {currentTrack.badge}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-[#1E1B18]">
                {currentTrack.name}
              </h2>
            </div>
          </div>

          {/* Track Switcher Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {COURSE_TRACKS.map((t) => {
              const active = t.id === activeTrack;
              const Icon = t.id === 'iot' ? Cpu : ShieldCheck;
              const trackDone = completedModules.filter((slug) =>
                getModulesByTrack(t.id).some((m) => m.slug === slug)
              ).length;
              const trackTotal = getModulesByTrack(t.id).length;

              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTrack(t.id)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 text-left transition-all ${
                    active
                      ? 'bg-[#1E1B18] text-[#FAF3E8] shadow-md ring-2 ring-[#1E1B18]/20'
                      : 'border border-[#1E1B18]/10 bg-[#FAF3E8]/70 text-[#52463C] hover:bg-[#FFEAD2]/70 hover:border-[#1E1B18]/20'
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      active ? 'bg-white/10' : 'bg-[#1E1B18]/5'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        active
                          ? t.id === 'iot'
                            ? 'text-[#2DD4BF]'
                            : 'text-[#FFB067]'
                          : 'text-[#6E6259]'
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-black">{t.shortName}</p>
                    <p className="text-[10px] opacity-75">
                      {trackDone}/{trackTotal} Modul Tuntas
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Top Bento Row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Welcome / Hero Card */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-5 flex flex-col justify-between rounded-3xl border border-[#1E1B18]/10 bg-white p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="h-13 w-13 shrink-0 overflow-hidden rounded-2xl border-2 border-[#C85A3D] bg-[#FFF8EE]">
                <img src="/logo.jpg" alt="StarSec Logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFEAD2] px-2.5 py-0.5 text-[11px] font-bold text-[#C85A3D]">
                  <Sparkles className="h-3 w-3" /> {currentTrack.badge}
                </span>
                <h1 className="mt-1 text-lg sm:text-xl font-extrabold tracking-tight text-[#1E1B18]">
                  {user ? `Halo, ${user.name}!` : 'Halo, Pembelajar!'}
                </h1>
                <p className="text-xs text-[#6E6259] line-clamp-1">
                  {currentTrack.tagline}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8EE] p-3.5 border border-[#FFB067]/40">
            <div className="flex items-center justify-between text-xs font-semibold text-[#6E6259]">
              <span>Progres Jalur ({currentTrack.shortName})</span>
              <span className="font-bold text-[#1E1B18]">{overallProgress}%</span>
            </div>
            <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-[#FFEAD2]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(overallProgress, 3)}%` }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: currentTrack.color }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-semibold text-[#6E6259]">
              <span>{completedCount} dari {totalModules} modul selesai</span>
              <span className="text-[#C85A3D] font-bold">{remainingCount} tersisa</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <Link
              href={`/materi/${firstNext.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#1E1B18] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#FAF3E8] transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Play className="h-4 w-4 fill-[#FFB067] text-[#FFB067]" />
              Lanjut: {firstNext.title.split(' ').slice(0, 3).join(' ')}
            </Link>
            <Link
              href="/materi"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1B18]/15 bg-[#FFF8EE] text-[#1E1B18] transition-colors hover:bg-[#FFEAD2]"
              title="Lihat Semua Materi"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Daily Goal + Streak Bento Column (Image 2 Inspired) */}
        <div className="md:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Dark Charcoal Daily Goal Card */}
          <motion.div
            variants={cardVariants}
            className="sm:col-span-2 rounded-3xl bg-[#1E1B18] p-5 text-[#FAF3E8]"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm sm:text-base font-bold">Target Harian (Daily Goal)</h2>
                <p className="text-xs text-[#FAF3E8]/60">
                  Klik hari untuk mencatat sesi belajarmu hari ini
                </p>
              </div>
              <span className="rounded-full bg-[#FFB067] px-3 py-1 text-xs font-extrabold text-[#1E1B18]">
                {streakDays}/7 Hari
              </span>
            </div>

            <div className="mt-3.5 grid grid-cols-7 gap-2">
              {DAYS.map((day, idx) => {
                const checked = dailyCheckins[idx];
                return (
                  <button
                    key={day}
                    onClick={() => toggleDayCheckin(idx)}
                    className={`group flex flex-col items-center justify-center gap-1.5 rounded-2xl py-2.5 transition-all ${
                      checked
                        ? 'bg-[#FFB067] text-[#1E1B18]'
                        : 'bg-white/10 text-[#FAF3E8]/70 hover:bg-white/15'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
                        checked ? 'bg-[#1E1B18] text-[#FFB067]' : 'border border-white/30'
                      }`}
                    >
                      {checked ? <Check className="h-3 w-3 stroke-[3]" /> : ''}
                    </span>
                    <span className="text-[11px] font-bold">{day}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Keep It Up / XP Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-between rounded-3xl border border-[#1E1B18]/10 bg-[#FFEAD2] p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded-full bg-[#1E1B18] px-2.5 py-0.5 text-[10px] font-bold text-[#FFD479]">
                  Keep It Up!
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-[#1E1B18]">{xp} XP</h3>
                <p className="text-[11px] font-medium text-[#6E6259]">Total poin pembelajaran</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFB067] text-[#1E1B18]">
                <Trophy className="h-5 w-5" />
              </div>
            </div>
            <Link
              href="/kuis"
              className="mt-3 inline-flex items-center justify-between rounded-2xl bg-white/85 px-3 py-2 text-xs font-bold text-[#1E1B18] transition-colors hover:bg-white"
            >
              <span>Kerjakan Kuis (+XP)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Streak Dark Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-between rounded-3xl bg-[#1E1B18] p-4 text-[#FAF3E8]"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-3xl font-black text-[#FFB067]">{streakDays}</span>
                <p className="mt-0.5 text-xs font-semibold text-[#FAF3E8]/70">
                  Hari Belajar Aktif
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FF9472]/20">
                <Flame className="h-6 w-6 fill-[#FF9472] text-[#FF9472]" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[#FAF3E8]/70 border-t border-white/10 pt-2.5">
              <span>Rata-rata Kuis</span>
              <span className="font-bold text-[#FFD479]">
                {avgQuiz > 0 ? `${avgQuiz}%` : 'Belum ada'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Middle Bento Row: Task Board Progress + Today's Timeline */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Task Board / Fast-Track Roadmap Progress */}
        <motion.div
          variants={cardVariants}
          className="lg:col-span-7 rounded-3xl border border-[#1E1B18]/10 bg-white p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-[#1E1B18]">Peta Belajar Cepat</h2>
              <p className="text-xs text-[#6E6259]">
                Progres belajar {currentTrack.shortName} ({currentPhases.length} fase)
              </p>
            </div>
            <Link
              href="/materi"
              className="rounded-full bg-[#FAF3E8] px-3.5 py-1.5 text-xs font-bold text-[#1E1B18] border border-[#1E1B18]/10 hover:bg-[#FFEAD2]"
            >
              Semua Modul
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {currentPhases.map((phase) => {
              const phaseMods = currentModules.filter((m) => m.phaseId === phase.id);
              const doneInPhase = phaseMods.filter((m) =>
                completedModules.includes(m.slug)
              ).length;
              const pct =
                phaseMods.length > 0 ? Math.round((doneInPhase / phaseMods.length) * 100) : 0;

              return (
                <Link
                  key={phase.id}
                  href={`/materi?fase=${phase.id}`}
                  className="block group rounded-2xl p-2.5 -mx-2.5 transition-colors hover:bg-[#FFF8EE]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-3 w-3 rounded-full shrink-0"
                        style={{ backgroundColor: phase.color }}
                      />
                      <span className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#C85A3D] transition-colors">
                        {phase.title}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#6E6259]">
                      {doneInPhase}/{phaseMods.length} ({pct}%)
                    </span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#FAF3E8] border border-[#1E1B18]/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(pct, 4)}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: phase.color }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Recommended Next Modules Timeline (Image 2 Timeline Card) */}
        <motion.div
          variants={cardVariants}
          className="lg:col-span-5 rounded-3xl bg-[#1E1B18] p-5 text-[#FAF3E8]"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">Antrean Belajar Berikutnya</h2>
              <p className="text-xs text-[#FAF3E8]/60">Rekomendasi modul untuk diselesaikan</p>
            </div>
            <Sparkles className="h-5 w-5 text-[#FFD479]" />
          </div>

          <div className="mt-4 space-y-2.5">
            {nextModules.length > 0 ? (
              nextModules.map((mod, i) => (
                <Link
                  key={mod.slug}
                  href={`/materi/${mod.slug}`}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white/8 p-3 border border-white/10 transition-all hover:bg-[#FFB067] hover:text-[#1E1B18] group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FFB067]/20 text-xs font-extrabold text-[#FFB067] group-hover:bg-[#1E1B18] group-hover:text-[#FFB067]">
                      0{i + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs sm:text-sm font-bold">{mod.title}</p>
                      <div className="mt-0.5 flex items-center gap-2 text-[11px] opacity-70">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {mod.duration}
                        </span>
                        <span>·</span>
                        <span>{mod.level}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100" />
                </Link>
              ))
            ) : (
              <div
                className="rounded-2xl p-5 text-[#1E1B18]"
                style={{ backgroundColor: currentTrack.color }}
              >
                <p className="font-extrabold">Luar Biasa!</p>
                <p className="mt-1 text-xs">
                  Semua modul {currentTrack.shortName} sudah selesai kamu pelajari.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Stats & Quick Tools (Image 2 Goal Screen Style) */}
      <motion.div
        variants={cardVariants}
        className="rounded-3xl bg-[#1E1B18] p-6 text-[#FAF3E8]"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {/* Stat 1: Modul Selesai */}
          <div className="flex flex-col justify-between rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all hover:bg-white/[0.09] hover:border-[#FFB067]/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black tracking-tight text-[#FFB067]">{completedCount}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFB067]/15">
                <Check className="h-4 w-4 text-[#FFB067]" />
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold text-[#FAF3E8]/80">Modul Selesai</p>
          </div>

          {/* Stat 2: Belum Selesai */}
          <div className="flex flex-col justify-between rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all hover:bg-white/[0.09] hover:border-[#FFD479]/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black tracking-tight text-[#FFD479]">{remainingCount}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFD479]/15">
                <Clock className="h-4 w-4 text-[#FFD479]" />
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold text-[#FAF3E8]/80">Belum Selesai</p>
          </div>

          {/* Stat 3: Kuis Dikerjakan */}
          <div className="flex flex-col justify-between rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all hover:bg-white/[0.09] hover:border-[#FF9472]/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black tracking-tight text-[#FF9472]">{Object.keys(quizScores).length}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF9472]/15">
                <Trophy className="h-4 w-4 text-[#FF9472]" />
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold text-[#FAF3E8]/80">Kuis Dikerjakan</p>
          </div>

          {/* Quick Link 1: Materi */}
          <Link
            href="/materi"
            className="group flex flex-col justify-between rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all hover:bg-white/[0.09] hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <BookOpen className="h-5 w-5 text-[#FFB067]" />
              <ArrowUpRight className="h-4 w-4 text-[#FAF3E8]/40 transition-transform group-hover:text-[#FAF3E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-3">
              <p className="text-sm font-bold text-[#FAF3E8]">Materi Bacaan</p>
              <p className="text-[11px] text-[#FAF3E8]/60">50+ Topik Markdown</p>
            </div>
          </Link>

          {/* Quick Link 2: Kuis */}
          <Link
            href="/kuis"
            className="group flex flex-col justify-between rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all hover:bg-white/[0.09] hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <HelpCircle className="h-5 w-5 text-[#FFD479]" />
              <ArrowUpRight className="h-4 w-4 text-[#FAF3E8]/40 transition-transform group-hover:text-[#FAF3E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-3">
              <p className="text-sm font-bold text-[#FAF3E8]">Uji Pemahaman</p>
              <p className="text-[11px] text-[#FAF3E8]/60">Kuis & Pembahasan</p>
            </div>
          </Link>

          {/* Quick Link 3: Tanya Jawab */}
          <Link
            href="/tanya-jawab"
            className="group flex flex-col justify-between rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all hover:bg-white/[0.09] hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <MessagesSquare className="h-5 w-5 text-[#FF9472]" />
              <ArrowUpRight className="h-4 w-4 text-[#FAF3E8]/40 transition-transform group-hover:text-[#FAF3E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-3">
              <p className="text-sm font-bold text-[#FAF3E8]">Tanya Jawab</p>
              <p className="text-[11px] text-[#FAF3E8]/60">FAQ & Catatan Pribadi</p>
            </div>
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2 text-xs text-[#FAF3E8]/70">
            <Terminal className="h-4 w-4 text-[#FFB067]" />
            <span>Butuh perintah cepat Nmap, ffuf, atau Linux Privesc?</span>
          </div>
          <Link
            href="/contekan"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEAD2] px-4 py-1.5 text-xs font-bold text-[#1E1B18] hover:bg-[#FFB067] transition-colors"
          >
            Buka Halaman Contekan <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
