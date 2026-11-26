'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import {
  COURSE_TRACKS,
  getModulesByTrack,
  getPhasesByTrack,
  getTrackById,
  TrackId,
} from '@/lib/courseData';
import { useCourse } from '@/context/CourseContext';

interface DraftFileItem {
  slug: string;
  title: string;
  fileName: string;
}

export function MateriListClient({
  allFiles,
}: {
  allFiles: DraftFileItem[];
}) {
  const searchParams = useSearchParams();
  const initialPhase = searchParams.get('fase') || 'semua';
  const { completedModules, activeTrack, setActiveTrack } = useCourse();
  const [selectedPhase, setSelectedPhase] = useState<string>(initialPhase);
  const [query, setQuery] = useState('');

  const currentTrack = getTrackById(activeTrack);
  const currentModules = getModulesByTrack(activeTrack);
  const currentPhases = getPhasesByTrack(activeTrack);

  const filteredModules = useMemo(() => {
    return currentModules.filter((mod) => {
      const matchesPhase = selectedPhase === 'semua' || mod.phaseId === selectedPhase;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        mod.title.toLowerCase().includes(q) ||
        mod.subtitle.toLowerCase().includes(q) ||
        mod.slug.toLowerCase().includes(q);
      return matchesPhase && matchesQuery;
    });
  }, [currentModules, selectedPhase, query]);

  const extraTopics = useMemo(() => {
    const coreSlugs = new Set(currentModules.map((m) => m.slug));
    const q = query.trim().toLowerCase();
    return allFiles.filter(
      (f) =>
        !coreSlugs.has(f.slug) &&
        (activeTrack === 'iot'
          ? f.slug.startsWith('iot-')
          : !f.slug.startsWith('iot-')) &&
        (!q || f.title.toLowerCase().includes(q) || f.slug.toLowerCase().includes(q))
    );
  }, [allFiles, currentModules, activeTrack, query]);

  return (
    <div className="space-y-6">
      {/* Top Track Switcher Bar */}
      <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-3.5 sm:p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#6E6259]">
              Jalur Pembelajaran
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#1E1B18]">
              {currentTrack.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {COURSE_TRACKS.map((t) => {
              const active = t.id === activeTrack;
              const Icon = t.id === 'iot' ? Cpu : ShieldCheck;
              const total = getModulesByTrack(t.id).length;
              const done = completedModules.filter((slug) =>
                getModulesByTrack(t.id).some((m) => m.slug === slug)
              ).length;

              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTrack(t.id);
                    setSelectedPhase('semua');
                  }}
                  className={`flex items-center gap-2.5 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
                    active
                      ? 'bg-[#1E1B18] text-[#FAF3E8] shadow-sm ring-2 ring-[#1E1B18]/20'
                      : 'border border-[#1E1B18]/10 bg-[#FAF3E8]/60 text-[#52463C] hover:bg-[#FFEAD2]/60'
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
                  <div className="text-left">
                    <p className="font-extrabold">{t.shortName}</p>
                    <p className="text-[10px] opacity-70">
                      {done}/{total} Selesai
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Header Bento */}
      <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-8 text-[#FAF3E8]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold text-[#1E1B18]"
              style={{ backgroundColor: currentTrack.color }}
            >
              {currentTrack.id === 'iot' ? (
                <Cpu className="h-3.5 w-3.5" />
              ) : (
                <BookOpen className="h-3.5 w-3.5" />
              )}
              {currentTrack.badge}
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Materi {currentTrack.name}
            </h1>
            <p className="mt-1 text-sm text-[#FAF3E8]/70">
              {currentTrack.description}
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FAF3E8]/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari topik atau materi..."
              className="w-full rounded-full border border-white/15 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-[#FAF3E8] placeholder:text-[#FAF3E8]/40 focus:border-[#FFB067] focus:outline-none"
            />
          </div>
        </div>

        {/* Phase Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedPhase('semua')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              selectedPhase === 'semua'
                ? 'bg-[#FFB067] text-[#1E1B18]'
                : 'bg-white/10 text-[#FAF3E8]/80 hover:bg-white/20'
            }`}
          >
            Semua Fase ({currentModules.length})
          </button>
          {currentPhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                selectedPhase === phase.id
                  ? 'bg-[#FFB067] text-[#1E1B18]'
                  : 'bg-white/10 text-[#FAF3E8]/80 hover:bg-white/20'
              }`}
            >
              {phase.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Main Curriculum Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredModules.map((mod) => {
          const isDone = completedModules.includes(mod.slug);
          const phase = currentPhases.find((p) => p.id === mod.phaseId);
          return (
            <motion.div
              key={mod.slug}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href={`/materi/${mod.slug}`}
                className={`group flex h-full flex-col justify-between rounded-3xl border p-5 transition-all hover:-translate-y-0.5 ${
                  isDone
                    ? 'border-[#FFB067] bg-[#FFF8EE]'
                    : 'border-[#1E1B18]/10 bg-white hover:border-[#FFB067]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-bold text-[#1E1B18]"
                      style={{ backgroundColor: phase?.color ?? '#FFEAD2' }}
                    >
                      {phase?.badge}
                    </span>
                    {isDone ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#1E1B18] px-2.5 py-0.5 text-[11px] font-bold text-[#FFB067]">
                        <CheckCircle2 className="h-3 w-3" /> Selesai
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C85A3D]">
                        <Sparkles className="h-3 w-3" /> +{mod.xp} XP
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 text-base font-extrabold text-[#1E1B18] group-hover:text-[#C85A3D] transition-colors">
                    {mod.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#6E6259]">
                    {mod.subtitle}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#1E1B18]/10 pt-3 text-xs font-semibold text-[#6E6259]">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {mod.duration}
                    </span>
                    <span>·</span>
                    <span>{mod.level}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-bold text-[#1E1B18] group-hover:translate-x-0.5 transition-transform">
                    Baca Tuntunan <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Reference Files */}
      {selectedPhase === 'semua' && extraTopics.length > 0 && (
        <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-[#C85A3D]" />
            <h2 className="text-lg font-extrabold text-[#1E1B18]">
              {activeTrack === 'iot'
                ? `Literatur & Referensi Paper IoT (${extraTopics.length})`
                : `Topik Referensi Tambahan (${extraTopics.length})`}
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#6E6259]">
            {activeTrack === 'iot'
              ? 'Arsip dokumen dan literatur riset yang dapat Anda telaah sebagai bahan bab skripsi.'
              : 'Semua topik lain dari koleksi Infosec_Reference juga dapat dibaca langsung di sini.'}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {extraTopics.map((file) => (
              <Link
                key={file.slug}
                href={`/materi/${encodeURIComponent(file.slug)}`}
                className="flex items-center justify-between rounded-2xl border border-[#1E1B18]/10 bg-[#FAF3E8]/60 px-4 py-3 text-sm font-semibold text-[#1E1B18] transition-colors hover:bg-[#FFEAD2]"
              >
                <span className="truncate">{file.title}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#C85A3D]" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
