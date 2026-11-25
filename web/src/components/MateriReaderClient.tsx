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
import { COURSE_MODULES, COURSE_PHASES } from '@/lib/courseData';
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

  const currentIdx = COURSE_MODULES.findIndex((m) => m.slug === topic.slug);
  const meta = currentIdx >= 0 ? COURSE_MODULES[currentIdx] : null;
  const phase = meta ? COURSE_PHASES.find((p) => p.id === meta.phaseId) : null;
  const prevMod = currentIdx > 0 ? COURSE_MODULES[currentIdx - 1] : null;
  const nextMod =
    currentIdx >= 0 && currentIdx < COURSE_MODULES.length - 1
      ? COURSE_MODULES[currentIdx + 1]
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

            {/* Lab Practice Card */}
            <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-7 text-[#FAF3E8]">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FFB067]">
                <Terminal className="h-4 w-4" />
                <span>Latihan Praktik Aman (Mini Lab)</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#FAF3E8]/90">
                {lesson.labPractice}
              </p>
            </div>
          </div>

          {/* Right Sidebar: Interactive Checklist & Next Step */}
          <aside className="lg:col-span-4 space-y-5">
            <div className="sticky top-24 space-y-5">
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
          <article className="lg:col-span-8 rounded-3xl border border-[#1E1B18]/10 bg-white p-6 sm:p-8 course-prose overflow-hidden">
            <MarkdownBody content={topic.content} />
          </article>

          <aside className="lg:col-span-4 space-y-5">
            <div className="sticky top-24 space-y-5">
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

      {/* Prev / Next Navigation */}
      {(prevMod || nextMod) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {prevMod ? (
            <Link
              href={`/materi/${prevMod.slug}`}
              className="flex items-center gap-3 rounded-3xl border border-[#1E1B18]/10 bg-white p-5 transition-colors hover:bg-[#FFF8EE]"
            >
              <ArrowLeft className="h-5 w-5 text-[#C85A3D]" />
              <div>
                <p className="text-[11px] font-bold uppercase text-[#6E6259]">Sebelumnya</p>
                <p className="text-sm font-extrabold text-[#1E1B18]">{prevMod.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextMod && (
            <Link
              href={`/materi/${nextMod.slug}`}
              className="flex items-center justify-between gap-3 rounded-3xl bg-[#1E1B18] p-5 text-[#FAF3E8] transition-colors hover:bg-[#2C2723]"
            >
              <div>
                <p className="text-[11px] font-bold uppercase text-[#FFB067]">Modul Berikutnya</p>
                <p className="text-sm font-extrabold">{nextMod.title}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#FFB067]" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
