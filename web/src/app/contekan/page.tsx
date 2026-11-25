'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Search } from 'lucide-react';
import { CHEAT_ITEMS } from '@/lib/courseData';

export default function ContekanPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const filtered = CHEAT_ITEMS.filter(
    (item) =>
      !query.trim() ||
      item.tool.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleCopy = async (id: string, cmd: string) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-8 text-[#FAF3E8]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFB067] px-3 py-1 text-xs font-extrabold text-[#1E1B18]">
              <Terminal className="h-3.5 w-3.5" /> Contekan Cepat
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Perintah Terminal & Cheat Sheet
            </h1>
            <p className="mt-1 text-sm text-[#FAF3E8]/70">
              Salin perintah penting untuk latihan di lab virtual pribadimu dengan sekali klik.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FAF3E8]/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari tool (Nmap, ffuf, Linux)..."
              className="w-full rounded-full border border-white/15 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-[#FAF3E8] placeholder:text-[#FAF3E8]/40 focus:border-[#FFB067] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((item, idx) => {
          const isCopied = copiedId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col justify-between rounded-3xl border border-[#1E1B18]/10 bg-white p-5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#FFEAD2] px-3 py-0.5 text-[11px] font-bold text-[#C85A3D]">
                    {item.category}
                  </span>
                  <span className="text-xs font-extrabold text-[#1E1B18]">{item.tool}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-[#3D352E]">{item.description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[#1E1B18] p-3.5 text-[#FAF3E8]">
                <code className="overflow-x-auto font-mono text-xs text-[#FFB067] whitespace-nowrap">
                  {item.command}
                </code>
                <button
                  onClick={() => handleCopy(item.id, item.command)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-white/10 px-2.5 py-1.5 text-[11px] font-bold hover:bg-[#FFB067] hover:text-[#1E1B18] transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Disalin
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Salin
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
