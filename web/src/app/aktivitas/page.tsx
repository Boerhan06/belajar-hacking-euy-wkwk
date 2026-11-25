'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Plus,
  Clock,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  NotebookPen,
  Trash2,
  Flame,
} from 'lucide-react';
import { useCourse, type ActivityLog } from '@/context/CourseContext';

const TYPE_META: Record<
  ActivityLog['type'],
  { label: string; bg: string; text: string; icon: React.ComponentType<{ className?: string }> }
> = {
  modul: { label: 'Modul', bg: 'bg-[#FFB067]', text: 'text-[#1E1B18]', icon: BookOpen },
  kuis: { label: 'Kuis', bg: 'bg-[#FFD479]', text: 'text-[#1E1B18]', icon: HelpCircle },
  checkin: { label: 'Check-in', bg: 'bg-[#FF9472]', text: 'text-[#1E1B18]', icon: CheckCircle2 },
  catatan: { label: 'Catatan', bg: 'bg-[#1E1B18]', text: 'text-[#FFB067]', icon: NotebookPen },
};

const QUICK_PRESETS = [
  { title: 'Setup & Snapshot Lab VM', detail: 'Menyiapkan mesin virtual terisolasi (30 mnt)' },
  { title: 'Latihan CTF / Wargames', detail: 'Menyelesaikan tantangan lab legal (45 mnt)' },
  { title: 'Review Catatan & Contekan', detail: 'Mengulang perintah Nmap & enumerasi (20 mnt)' },
];

export default function AktivitasPage() {
  const { activityLogs, addActivityLog, deleteActivityLog, streakDays } = useCourse();
  const [filter, setFilter] = useState<'semua' | ActivityLog['type']>('semua');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const filteredLogs = useMemo(() => {
    if (filter === 'semua') return activityLogs;
    return activityLogs.filter((l) => l.type === filter);
  }, [activityLogs, filter]);

  const groupedByDate = useMemo(() => {
    const groups: Record<string, ActivityLog[]> = {};
    for (const log of filteredLogs) {
      if (!groups[log.date]) groups[log.date] = [];
      groups[log.date].push(log);
    }
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [filteredLogs]);

  const formatDateLabel = (isoDate: string) => {
    const today = new Date().toISOString().slice(0, 10);
    if (isoDate === today) return `Hari Ini (${isoDate})`;
    try {
      return new Date(isoDate + 'T00:00:00').toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return isoDate;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addActivityLog(title.trim(), detail.trim() || 'Sesi belajar mandiri dicatat', 'catatan');
    setTitle('');
    setDetail('');
  };

  return (
    <div className="space-y-6">
      {/* Header Bento */}
      <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-8 text-[#FAF3E8]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFB067] px-3 py-1 text-xs font-extrabold text-[#1E1B18]">
              <CalendarDays className="h-3.5 w-3.5" /> Runtunan Aktivitas Harian
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Log & Jurnal Belajar Harian
            </h1>
            <p className="mt-1 text-sm text-[#FAF3E8]/70">
              Catatan otomatis dari modul, kuis, check-in harian, serta aktivitas praktik lab pribadimu.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-center">
              <p className="text-[11px] font-bold uppercase text-[#FFB067]">Total Log</p>
              <p className="text-2xl font-black">{activityLogs.length}</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-center">
              <p className="text-[11px] font-bold uppercase text-[#FF9472]">Streak</p>
              <p className="inline-flex items-center gap-1 text-2xl font-black">
                <Flame className="h-5 w-5 fill-[#FF9472] text-[#FF9472]" /> {streakDays}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(
            [
              { id: 'semua', label: 'Semua Aktivitas' },
              { id: 'modul', label: 'Modul Selesai' },
              { id: 'kuis', label: 'Kuis' },
              { id: 'checkin', label: 'Check-in' },
              { id: 'catatan', label: 'Catatan Manual' },
            ] as const
          ).map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                filter === f.id
                  ? 'bg-[#FFB067] text-[#1E1B18]'
                  : 'bg-white/10 text-[#FAF3E8]/80 hover:bg-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Timeline + Add Form */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Timeline */}
        <div className="lg:col-span-7 space-y-5">
          {groupedByDate.length === 0 ? (
            <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-8 text-center">
              <p className="text-sm font-bold text-[#1E1B18]">Belum ada catatan aktivitas.</p>
              <p className="mt-1 text-xs text-[#6E6259]">
                Mulai selesaikan modul, kerjakan kuis, atau tambah catatan aktivitas di sebelah kanan.
              </p>
            </div>
          ) : (
            groupedByDate.map(([date, items]) => (
              <div
                key={date}
                className="rounded-3xl border border-[#1E1B18]/10 bg-white p-5 sm:p-6"
              >
                <div className="flex items-center justify-between border-b border-[#1E1B18]/10 pb-3">
                  <h2 className="text-sm font-extrabold text-[#1E1B18]">
                    {formatDateLabel(date)}
                  </h2>
                  <span className="rounded-full bg-[#FFEAD2] px-2.5 py-0.5 text-[11px] font-bold text-[#C85A3D]">
                    {items.length} aktivitas
                  </span>
                </div>

                <div className="mt-4 space-y-3 border-l-2 border-[#FFEAD2] pl-4">
                  {items.map((log) => {
                    const meta = TYPE_META[log.type];
                    const Icon = meta.icon;
                    return (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="relative rounded-2xl bg-[#FAF3E8]/70 p-3.5 border border-[#1E1B18]/5"
                      >
                        <span className="absolute -left-[23px] top-4 h-3 w-3 rounded-full border-2 border-white bg-[#FFB067]" />

                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${meta.bg} ${meta.text}`}
                            >
                              <Icon className="h-3 w-3" /> {meta.label}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6E6259]">
                              <Clock className="h-3 w-3" /> {log.time}
                            </span>
                          </div>

                          <button
                            onClick={() => deleteActivityLog(log.id)}
                            className="text-[#6E6259] hover:text-[#C85A3D] transition-colors"
                            title="Hapus log"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="mt-2 text-sm font-extrabold text-[#1E1B18]">{log.title}</p>
                        {log.detail && (
                          <p className="mt-0.5 text-xs text-[#52463C]">{log.detail}</p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right: Quick Add Daily Activity */}
        <div className="lg:col-span-5 space-y-5">
          <div className="sticky top-28 lg:top-6 space-y-5">
            <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-[#C85A3D]" />
                <h2 className="text-base font-extrabold text-[#1E1B18]">
                  Catat Aktivitas Belajar
                </h2>
              </div>
              <p className="mt-1 text-xs text-[#6E6259]">
                Catat latihan lab, eksperimen CTF, atau target belajar harianmu.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label className="text-xs font-bold text-[#52463C]">Judul Aktivitas</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Mis. Latihan scan port Nmap di VM"
                    className="mt-1 w-full rounded-2xl border border-[#1E1B18]/15 bg-[#FAF3E8]/50 px-3.5 py-2.5 text-sm focus:border-[#FFB067] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#52463C]">
                    Detail / Durasi / Hasil
                  </label>
                  <textarea
                    rows={3}
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder="Mis. Belajar 40 menit, berhasil menemukan port 22 dan 80 terbuka."
                    className="mt-1 w-full rounded-2xl border border-[#1E1B18]/15 bg-[#FAF3E8]/50 px-3.5 py-2.5 text-sm focus:border-[#FFB067] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1E1B18] py-2.5 text-xs font-extrabold text-[#FAF3E8] hover:bg-[#C85A3D] transition-colors"
                >
                  Simpan ke Runtunan Hari Ini
                </button>
              </form>
            </div>

            {/* Quick Presets */}
            <div className="rounded-3xl bg-[#FFEAD2] p-5 border border-[#FFB067]/50">
              <p className="text-xs font-extrabold text-[#1E1B18]">
                ⚡ Catat Cepat (Sekali Klik):
              </p>
              <div className="mt-3 space-y-2">
                {QUICK_PRESETS.map((preset) => (
                  <button
                    key={preset.title}
                    onClick={() => addActivityLog(preset.title, preset.detail, 'catatan')}
                    className="flex w-full items-center justify-between rounded-2xl bg-white/85 px-3.5 py-2.5 text-left text-xs font-bold text-[#1E1B18] hover:bg-white transition-colors"
                  >
                    <span>{preset.title}</span>
                    <Plus className="h-3.5 w-3.5 text-[#C85A3D]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
