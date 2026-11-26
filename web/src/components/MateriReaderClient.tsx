'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const MarkdownBody = dynamic(() => import('@/components/MarkdownBody'), {
  loading: () => (
    <div className="py-8 text-sm font-semibold text-[#6E6259]">
      Memuat daftar referensi...
    </div>
  ),
});
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  List,
  Sparkles,
  Clock,
  ArrowRight,
  Link2,
  BookOpen,
  Terminal,
  CheckSquare,
  Square,
  Target,
} from 'lucide-react';
import { useCourse } from '@/context/CourseContext';
import { COURSE_MODULES, COURSE_PHASES, IOT_MODULES, IOT_PHASES } from '@/lib/courseData';
import { MODULE_LESSONS } from '@/lib/lessonContent';
import type { MarkdownTopic } from '@/lib/markdown';

export function MateriReaderClient({ topic }: { topic: MarkdownTopic }) {
  const { completedModules, toggleModuleComplete } = useCourse();
  const isDone = completedModules.includes(topic.slug);

  const lesson = MODULE_LESSONS[topic.slug];
  const [activeTab, setActiveTab] = useState<'pelajaran' | 'referensi'>(
    lesson ? 'pelajaran' : 'referensi'
  );
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const isIot = topic.slug.startsWith('iot-') || IOT_MODULES.some((m) => m.slug === topic.slug);
  const trackModules = isIot ? IOT_MODULES : COURSE_MODULES;
  const trackPhases = isIot ? IOT_PHASES : COURSE_PHASES;

  const currentIdx = trackModules.findIndex((m) => m.slug === topic.slug);
  const meta = currentIdx >= 0 ? trackModules[currentIdx] : null;
  const phase = meta ? trackPhases.find((p) => p.id === meta.phaseId) : null;
  const prevMod = currentIdx > 0 ? trackModules[currentIdx - 1] : null;
  const nextMod =
    currentIdx >= 0 && currentIdx < trackModules.length - 1
      ? trackModules[currentIdx + 1]
      : null;

  const toggleCheckItem = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Top Reader Header Card */}
      <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-8 text-[#FAF3E8]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/materi"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-[#FAF3E8] hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Kembali ke Kurikulum
          </Link>

          <button
            onClick={() => toggleModuleComplete(topic.slug)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-extrabold transition-all ${
              isDone
                ? 'bg-[#FFB067] text-[#1E1B18]'
                : 'bg-white text-[#1E1B18] hover:bg-[#FFEAD2]'
            }`}
          >
            {isDone ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Sudah Selesai
              </>
            ) : (
              <>
                <Circle className="h-4 w-4" /> Tandai Selesai (+{meta?.xp ?? 40} XP)
              </>
            )}
          </button>
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-2">
            {phase && (
              <span
                className="rounded-full px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B18]"
                style={{ backgroundColor: phase.color }}
              >
                {phase.title}
              </span>
            )}
            {meta && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-semibold">
                <Clock className="h-3 w-3 text-[#FFB067]" /> {meta.duration}
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-semibold">
              <Link2 className="h-3 w-3 text-[#FFD479]" /> {topic.linkCount} Tautan Referensi
            </span>
          </div>

          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
            {meta ? meta.title : topic.title}
          </h1>
          {meta && <p className="mt-1.5 text-sm text-[#FAF3E8]/70">{meta.subtitle}</p>}
        </div>

        {/* Clean Mode Switcher Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {lesson && (
            <button
              onClick={() => setActiveTab('pelajaran')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold transition-colors ${
                activeTab === 'pelajaran'
                  ? 'bg-[#FFB067] text-[#1E1B18]'
                  : 'bg-white/10 text-[#FAF3E8]/80 hover:bg-white/20'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" /> Ringkasan & Pelajaran Inti
            </button>
          )}
          <button
            onClick={() => setActiveTab('referensi')}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold transition-colors ${
              activeTab === 'referensi'
                ? 'bg-[#FFB067] text-[#1E1B18]'
                : 'bg-white/10 text-[#FAF3E8]/80 hover:bg-white/20'
            }`}
          >
            <Link2 className="h-3.5 w-3.5" /> Daftar Referensi Lengkap ({topic.linkCount})
          </button>
        </div>
      </div>

      {/* Tab 1: Structured Indonesian Course Lesson */}
      {activeTab === 'pelajaran' && lesson ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-5">
            {/* Summary & Learning Objectives */}
            <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6 sm:p-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEAD2] px-3 py-1 text-[11px] font-bold text-[#C85A3D]">
                <Target className="h-3.5 w-3.5" /> Tujuan Pembelajaran
              </span>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#3D352E] font-medium">
                {lesson.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {lesson.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1E1B18]">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFB067] text-[11px] font-extrabold">
                      {idx + 1}
                    </span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured Lesson Sections */}
            {lesson.sections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6 sm:p-7"
              >
                <h2 className="text-lg font-extrabold text-[#1E1B18]">{sec.heading}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3D352E]">{sec.body}</p>
                {sec.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {sec.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="rounded-2xl bg-[#FAF3E8] px-4 py-3 text-sm leading-relaxed text-[#1E1B18] border border-[#1E1B18]/5"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Lab Practice Card + Module Navigation Side-by-Side */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              {/* Latihan Praktik */}
              <div className="flex flex-col justify-between rounded-3xl bg-[#1E1B18] p-5 sm:p-6 text-[#FAF3E8] md:col-span-7">
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FFB067]">
                    <Terminal className="h-4 w-4" />
                    <span>Latihan Praktik Aman (Mini Lab)</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#FAF3E8]/90">
                    {lesson.labPractice}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#FAF3E8]/50">
                  <Sparkles className="h-3 w-3 text-[#FFD479]" />
                  <span>Eksperimen aman di terminal / VM lokal</span>
                </div>
              </div>

              {/* Prev & Next Module Navigation */}
              <div className="flex flex-col justify-between gap-3 md:col-span-5">
                {/* Modul Sebelumnya */}
                {prevMod ? (
                  <Link
                    href={`/materi/${prevMod.slug}`}
                    className="group flex flex-1 items-center justify-between gap-2.5 rounded-2xl border border-[#1E1B18]/10 bg-white p-4 transition-all hover:bg-[#FFF8EE] hover:border-[#FFB067]/50 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FFB067]/15 text-[#C85A3D] group-hover:bg-[#FFB067] group-hover:text-[#1E1B18] transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#6E6259]">
                          Sebelumnya
                        </p>
                        <p className="truncate text-xs font-extrabold text-[#1E1B18]">
                          {prevMod.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="flex flex-1 items-center gap-2.5 rounded-2xl border border-[#1E1B18]/10 bg-[#FAF3E8]/80 p-4 opacity-40 cursor-not-allowed select-none pointer-events-none"
                    title="Sudah berada di modul pertama"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#1E1B18]/5 text-[#1E1B18]/30">
                      <ArrowLeft className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#1E1B18]/40">
                        Sebelumnya
                      </p>
                      <p className="truncate text-xs font-semibold text-[#1E1B18]/40">
                        Modul Pertama
                      </p>
                    </div>
                  </div>
                )}

                {/* Modul Sesudahnya */}
                {nextMod ? (
                  <Link
                    href={`/materi/${nextMod.slug}`}
                    className="group flex flex-1 items-center justify-between gap-2.5 rounded-2xl bg-[#1E1B18] p-4 text-[#FAF3E8] border border-white/10 transition-all hover:bg-[#2C2723] hover:border-[#FFB067]/50 hover:shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#FFB067]">
                        Modul Berikutnya
                      </p>
                      <p className="truncate text-xs font-extrabold text-[#FAF3E8]">
                        {nextMod.title}
                      </p>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FFB067] text-[#1E1B18] group-hover:scale-105 transition-transform">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ) : (
                  <div
                    className="flex flex-1 items-center justify-between gap-2.5 rounded-2xl border border-white/10 bg-[#1E1B18]/40 p-4 text-[#FAF3E8]/40 opacity-40 cursor-not-allowed select-none pointer-events-none"
                    title="Sudah berada di modul terakhir"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#FAF3E8]/40">
                        Modul Berikutnya
                      </p>
                      <p className="truncate text-xs font-semibold text-[#FAF3E8]/40">
                        Modul Terakhir
                      </p>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#FAF3E8]/30">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Interactive Checklist & Next Step */}
          <aside className="lg:col-span-4 space-y-5">
            <div className="sticky top-28 lg:top-6 space-y-5">
              <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-5">
                <h3 className="text-sm font-extrabold text-[#1E1B18]">
                  Checklist Pemahaman
                </h3>
                <p className="mt-1 text-xs text-[#6E6259]">
                  Centang poin yang sudah kamu kuasai:
                </p>
                <div className="mt-4 space-y-2.5">
                  {lesson.checklist.map((item, idx) => {
                    const checked = !!checkedItems[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleCheckItem(idx)}
                        className={`flex w-full items-start gap-2.5 rounded-2xl border p-3 text-left text-xs font-semibold transition-colors ${
                          checked
                            ? 'border-[#FFB067] bg-[#FFF8EE] text-[#1E1B18]'
                            : 'border-[#1E1B18]/10 bg-[#FAF3E8]/50 text-[#52463C] hover:bg-[#FFEAD2]/40'
                        }`}
                      >
                        {checked ? (
                          <CheckSquare className="h-4 w-4 shrink-0 text-[#C85A3D]" />
                        ) : (
                          <Square className="h-4 w-4 shrink-0 text-[#6E6259]" />
                        )}
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl bg-[#FFEAD2] p-5 border border-[#FFB067]/50">
                <div className="flex items-center gap-2 font-extrabold text-sm text-[#1E1B18]">
                  <Sparkles className="h-4 w-4 text-[#C85A3D]" />
                  <span>Butuh Referensi Mendalam?</span>
                </div>
                <p className="mt-1.5 text-xs text-[#52463C]">
                  Buka tab Daftar Referensi Lengkap untuk menjelajahi {topic.linkCount} tautan
                  artikel, video, dan tools eksternal.
                </p>
                <button
                  onClick={() => setActiveTab('referensi')}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E1B18] px-4 py-2.5 text-xs font-bold text-[#FAF3E8] hover:bg-[#C85A3D] transition-colors"
                >
                  Lihat {topic.linkCount} Referensi <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      ) : (
        /* Tab 2: Clean Markdown Reference Reader */
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            <article className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6 sm:p-8 course-prose overflow-hidden">
              <MarkdownBody content={topic.content} />
            </article>

            {/* Prev / Next Navigation for Tab 2 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {prevMod ? (
                <Link
                  href={`/materi/${prevMod.slug}`}
                  className="group flex items-center gap-3 rounded-3xl border border-[#1E1B18]/10 bg-white p-5 transition-all hover:bg-[#FFF8EE] hover:border-[#FFB067]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFB067]/15 text-[#C85A3D] group-hover:bg-[#FFB067] group-hover:text-[#1E1B18] transition-colors">
                    <ArrowLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#6E6259]">Sebelumnya</p>
                    <p className="text-sm font-extrabold text-[#1E1B18]">{prevMod.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-3 rounded-3xl border border-[#1E1B18]/10 bg-[#FAF3E8]/80 p-5 opacity-40 cursor-not-allowed select-none pointer-events-none">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1E1B18]/5 text-[#1E1B18]/30">
                    <ArrowLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#1E1B18]/40">Sebelumnya</p>
                    <p className="text-sm font-semibold text-[#1E1B18]/40">Modul Pertama</p>
                  </div>
                </div>
              )}

              {nextMod ? (
                <Link
                  href={`/materi/${nextMod.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-3xl bg-[#1E1B18] p-5 text-[#FAF3E8] border border-white/10 transition-all hover:bg-[#2C2723] hover:border-[#FFB067]/50"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#FFB067]">Modul Berikutnya</p>
                    <p className="text-sm font-extrabold">{nextMod.title}</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFB067] text-[#1E1B18] group-hover:scale-105 transition-transform">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
              ) : (
                <div className="flex items-center justify-between gap-3 rounded-3xl border border-white/10 bg-[#1E1B18]/40 p-5 text-[#FAF3E8]/40 opacity-40 cursor-not-allowed select-none pointer-events-none">
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#FAF3E8]/40">Modul Berikutnya</p>
                    <p className="text-sm font-semibold text-[#FAF3E8]/40">Modul Terakhir</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[#FAF3E8]/30">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-5">
            <div className="sticky top-28 lg:top-6 space-y-5">
              {topic.headings.length > 0 && (
                <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-5">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1B18]">
                    <List className="h-4 w-4 text-[#C85A3D]" />
                    <span>Daftar Isi Referensi</span>
                  </div>
                  <nav className="mt-3 max-h-80 overflow-y-auto space-y-1.5 pr-1">
                    {topic.headings.map((h, i) => (
                      <a
                        key={`${h.id}-${i}`}
                        href={`#${h.id}`}
                        className={`block rounded-xl px-2.5 py-1.5 text-xs font-medium text-[#52463C] transition-colors hover:bg-[#FFEAD2] hover:text-[#1E1B18] ${
                          h.level === 3 ? 'pl-5 text-[11px]' : 'font-semibold'
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="rounded-3xl bg-[#FFEAD2] p-5 border border-[#FFB067]/50">
                <div className="flex items-center gap-2 font-extrabold text-sm text-[#1E1B18]">
                  <Sparkles className="h-4 w-4 text-[#C85A3D]" />
                  <span>Uji Pemahamanmu</span>
                </div>
                <p className="mt-1.5 text-xs text-[#52463C]">
                  Setelah selesai membaca, uji pengetahuanmu di halaman Kuis untuk menambah XP.
                </p>
                <Link
                  href="/kuis"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E1B18] px-4 py-2.5 text-xs font-bold text-[#FAF3E8] hover:bg-[#C85A3D] transition-colors"
                >
                  Mulai Kuis Sekarang <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </motion.div>
  );
}
