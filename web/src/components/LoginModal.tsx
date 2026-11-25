'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, UserCheck, Sparkles } from 'lucide-react';
import { useCourse } from '@/context/CourseContext';

const AVATAR_PRESETS = [
  '/logo.jpg',
  'https://api.dicebear.com/9.x/thumbs/svg?seed=StarSec&backgroundColor=ffb067',
  'https://api.dicebear.com/9.x/thumbs/svg?seed=CyberFox&backgroundColor=ff9472',
  'https://api.dicebear.com/9.x/thumbs/svg?seed=NetNinja&backgroundColor=ffd479',
];

const ROLES = ['Pemula InfoSec', 'Red Team / Pentest', 'Blue Team / SOC', 'Bug Bounty Hunter'];

export function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { login } = useCourse();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(AVATAR_PRESETS[0]);
  const [role, setRole] = useState(ROLES[0]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    login({
      name: name.trim(),
      avatar,
      role,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1E1B18]/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 w-full max-w-md rounded-3xl border border-[#1E1B18]/10 bg-[#FAF3E8] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFB067] text-[#1E1B18]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <h2 className="text-lg font-extrabold text-[#1E1B18]">Masuk ke Profil Belajar</h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-[#6E6259] hover:bg-[#FFEAD2] hover:text-[#1E1B18]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Avatar Selection + Upload */}
              <div>
                <label className="text-xs font-bold text-[#52463C]">Pilih atau Unggah Foto</label>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-[#C85A3D] bg-white">
                    <img src={avatar} alt="Preview Avatar" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {AVATAR_PRESETS.map((preset) => (
                      <button
                        type="button"
                        key={preset}
                        onClick={() => setAvatar(preset)}
                        className={`h-9 w-9 overflow-hidden rounded-xl border-2 transition-transform hover:scale-105 ${
                          avatar === preset ? 'border-[#1E1B18]' : 'border-transparent opacity-70'
                        }`}
                      >
                        <img src={preset} alt="Preset" className="h-full w-full object-cover" />
                      </button>
                    ))}

                    <label className="inline-flex cursor-pointer items-center gap-1 rounded-xl border border-[#1E1B18]/15 bg-white px-2.5 py-2 text-[11px] font-bold text-[#1E1B18] hover:bg-[#FFEAD2]">
                      <Upload className="h-3.5 w-3.5 text-[#C85A3D]" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="text-xs font-bold text-[#52463C]">Nama Panggilan</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Mis. Burhan"
                  className="mt-1 w-full rounded-2xl border border-[#1E1B18]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1E1B18] focus:border-[#FFB067] focus:outline-none"
                />
              </div>

              {/* Role / Track */}
              <div>
                <label className="text-xs font-bold text-[#52463C]">Fokus Belajar</label>
                <div className="mt-1.5 grid grid-cols-2 gap-2">
                  {ROLES.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`rounded-xl px-3 py-2 text-left text-xs font-bold transition-colors ${
                        role === r
                          ? 'bg-[#1E1B18] text-[#FFB067]'
                          : 'bg-white text-[#52463C] border border-[#1E1B18]/10 hover:bg-[#FFEAD2]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#1E1B18] py-3 text-sm font-extrabold text-[#FAF3E8] hover:bg-[#C85A3D] transition-colors"
              >
                <UserCheck className="h-4 w-4" /> Masuk Sekarang
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
