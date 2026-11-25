'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessagesSquare,
  Plus,
  ChevronDown,
  Lightbulb,
  Trash2,
  Bookmark,
} from 'lucide-react';
import { QA_ITEMS } from '@/lib/courseData';
import { useCourse } from '@/context/CourseContext';

export default function TanyaJawabPage() {
  const { customQuestions, addCustomQuestion, deleteCustomQuestion } = useCourse();
  const [openId, setOpenId] = useState<string | null>(QA_ITEMS[0].id);
  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('Catatan Belajar');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionInput.trim() || !answerInput.trim()) return;
    addCustomQuestion(questionInput.trim(), answerInput.trim(), categoryInput.trim());
    setQuestionInput('');
    setAnswerInput('');
  };

  return (
    <div className="space-y-6">
      {/* Header Bento */}
      <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-8 text-[#FAF3E8]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF9472] px-3 py-1 text-xs font-extrabold text-[#1E1B18]">
          <MessagesSquare className="h-3.5 w-3.5" /> Tanya Jawab & Catatan
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Pusat Tanya Jawab & Flashcards
        </h1>
        <p className="mt-1 text-sm text-[#FAF3E8]/70">
          Kumpulan pertanyaan penting yang paling sering ditanyakan pemula, plus catatan Q&A pribadimu.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Curated Q&A Accordion */}
        <div className="lg:col-span-7 space-y-3">
          <h2 className="text-lg font-extrabold text-[#1E1B18] px-1">
            Pertanyaan Dasar yang Wajib Dipahami
          </h2>

          {QA_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl border border-[#1E1B18]/10 bg-white"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-[#FFF8EE]"
                >
                  <div>
                    <span className="inline-block rounded-full bg-[#FFEAD2] px-2.5 py-0.5 text-[11px] font-bold text-[#C85A3D]">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-extrabold text-[#1E1B18]">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#6E6259] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C85A3D]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#1E1B18]/10 bg-[#FFF8EE]/60 p-5 space-y-3">
                        <p className="text-sm leading-relaxed text-[#3D352E]">{item.answer}</p>
                        <div className="flex items-start gap-2 rounded-2xl bg-[#1E1B18] p-3.5 text-xs text-[#FAF3E8]">
                          <Lightbulb className="h-4 w-4 shrink-0 text-[#FFD479]" />
                          <span>
                            <strong className="text-[#FFB067]">Inti Cepat: </strong>
                            {item.keyTakeaway}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: User Custom Q&A Notes */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6">
            <div className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-[#C85A3D]" />
              <h2 className="text-base font-extrabold text-[#1E1B18]">
                Tambah Pertanyaan / Catatan Sendiri
              </h2>
            </div>
            <p className="mt-1 text-xs text-[#6E6259]">
              Tersimpan otomatis secara lokal di browser kamu.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-bold text-[#52463C]">Kategori</label>
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-[#1E1B18]/15 bg-[#FAF3E8]/50 px-3.5 py-2 text-sm focus:border-[#FFB067] focus:outline-none"
                  placeholder="Mis. Web Security"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-[#52463C]">Pertanyaan</label>
                <input
                  type="text"
                  value={questionInput}
                  onChange={(e) => setQuestionInput(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-[#1E1B18]/15 bg-[#FAF3E8]/50 px-3.5 py-2 text-sm focus:border-[#FFB067] focus:outline-none"
                  placeholder="Mis. Apa fungsi flag -sV di Nmap?"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-[#52463C]">Jawaban / Ringkasan</label>
                <textarea
                  rows={3}
                  value={answerInput}
                  onChange={(e) => setAnswerInput(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-[#1E1B18]/15 bg-[#FAF3E8]/50 px-3.5 py-2 text-sm focus:border-[#FFB067] focus:outline-none"
                  placeholder="Tulis jawaban singkat biar cepat ingat..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#1E1B18] py-2.5 text-xs font-extrabold text-[#FAF3E8] hover:bg-[#C85A3D] transition-colors"
              >
                Simpan ke Catatan Lokal
              </button>
            </form>
          </div>

          {/* Saved Custom Questions */}
          {customQuestions.length > 0 && (
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#1E1B18] px-1">
                <Bookmark className="h-4 w-4 text-[#C85A3D]" />
                Catatan Q&A Pribadimu ({customQuestions.length})
              </h3>
              {customQuestions.map((cq) => (
                <div
                  key={cq.id}
                  className="rounded-3xl border border-[#FFB067]/50 bg-[#FFF8EE] p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-[#FFB067] px-2.5 py-0.5 text-[10px] font-extrabold text-[#1E1B18]">
                      {cq.category}
                    </span>
                    <button
                      onClick={() => deleteCustomQuestion(cq.id)}
                      className="text-[#6E6259] hover:text-[#C85A3D]"
                      title="Hapus catatan"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-2 text-sm font-extrabold text-[#1E1B18]">{cq.question}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#52463C]">{cq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
