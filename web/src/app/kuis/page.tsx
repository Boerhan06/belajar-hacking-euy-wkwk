'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { COURSE_PHASES, QUIZ_QUESTIONS } from '@/lib/courseData';
import { useCourse } from '@/context/CourseContext';

export default function KuisPage() {
  const { quizScores, saveQuizScore } = useCourse();
  const [selectedPhase, setSelectedPhase] = useState<string>('semua');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = useMemo(() => {
    if (selectedPhase === 'semua') return QUIZ_QUESTIONS;
    return QUIZ_QUESTIONS.filter((q) => q.phaseId === selectedPhase);
  }, [selectedPhase]);

  const currentQuestion = questions[currentIndex];

  const handlePhaseChange = (phaseId: string) => {
    setSelectedPhase(phaseId);
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setIsFinished(false);
  };

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === currentQuestion.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
    } else {
      const finalScore = Math.round((correctCount / questions.length) * 100);
      saveQuizScore(selectedPhase, finalScore);
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setIsFinished(false);
  };

  const finalPercentage =
    questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header Bento */}
      <div className="rounded-3xl bg-[#1E1B18] p-6 sm:p-8 text-[#FAF3E8]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD479] px-3 py-1 text-xs font-extrabold text-[#1E1B18]">
              <HelpCircle className="h-3.5 w-3.5" /> Evaluasi & Latihan Soal
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Kuis Interaktif Keamanan Siber
            </h1>
            <p className="mt-1 text-sm text-[#FAF3E8]/70">
              Uji pemahamanmu per fase kurikulum lengkap dengan pembahasan bahasa Indonesia.
            </p>
          </div>

          {quizScores[selectedPhase] !== undefined && (
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
              <p className="text-[11px] font-bold uppercase text-[#FFB067]">Skor Terbaik</p>
              <p className="text-2xl font-black">{quizScores[selectedPhase]}%</p>
            </div>
          )}
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => handlePhaseChange('semua')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              selectedPhase === 'semua'
                ? 'bg-[#FFB067] text-[#1E1B18]'
                : 'bg-white/10 text-[#FAF3E8]/80 hover:bg-white/20'
            }`}
          >
            Ujian Campuran ({QUIZ_QUESTIONS.length} Soal)
          </button>
          {COURSE_PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => handlePhaseChange(phase.id)}
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

      {/* Quiz Body */}
      <AnimatePresence mode="wait">
        {!isFinished && currentQuestion ? (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-[#1E1B18]/10 bg-white p-6 sm:p-8"
          >
            {/* Progress */}
            <div className="flex items-center justify-between text-xs font-bold text-[#6E6259]">
              <span className="rounded-full bg-[#FFEAD2] px-3 py-1 text-[#C85A3D]">
                {currentQuestion.category}
              </span>
              <span>
                Pertanyaan {currentIndex + 1} dari {questions.length}
              </span>
            </div>

            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#FAF3E8]">
              <div
                className="h-full rounded-full bg-[#FFB067] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h2 className="mt-6 text-lg sm:text-xl font-extrabold text-[#1E1B18] leading-snug">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                const hasAnswered = selectedOption !== null;

                let style =
                  'border-[#1E1B18]/10 bg-[#FAF3E8]/50 text-[#1E1B18] hover:bg-[#FFEAD2]/60';
                if (hasAnswered) {
                  if (isCorrect) {
                    style = 'border-[#1E1B18] bg-[#FFB067] text-[#1E1B18] font-bold';
                  } else if (isSelected) {
                    style = 'border-[#C85A3D] bg-[#FF9472]/30 text-[#1E1B18]';
                  } else {
                    style = 'border-[#1E1B18]/5 bg-[#FAF3E8]/30 text-[#6E6259] opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border p-4 text-left text-sm transition-all ${style}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-[#1E1B18] border border-[#1E1B18]/10">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E1B18]" />
                    )}
                    {hasAnswered && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 shrink-0 text-[#C85A3D]" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl bg-[#1E1B18] p-5 text-[#FAF3E8]"
              >
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FFB067]">
                  <Sparkles className="h-4 w-4" />
                  <span>Pembahasan</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#FAF3E8]/90">
                  {currentQuestion.explanation}
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-full bg-[#FFB067] px-5 py-2.5 text-xs font-extrabold text-[#1E1B18] hover:bg-[#FFD479] transition-colors"
                  >
                    {currentIndex + 1 < questions.length ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-[#1E1B18] p-8 text-center text-[#FAF3E8]"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FFB067] text-[#1E1B18]">
              <Trophy className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold">Kuis Selesai!</h2>
            <p className="mt-1 text-sm text-[#FAF3E8]/70">
              Kamu menjawab benar {correctCount} dari {questions.length} pertanyaan.
            </p>
            <div className="mt-6 inline-block rounded-3xl bg-white/10 px-8 py-4">
              <p className="text-4xl font-black text-[#FFB067]">{finalPercentage}%</p>
              <p className="mt-1 text-xs font-bold text-[#FFD479]">
                +{Math.round(finalPercentage * 1.5)} XP Tersimpan
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFB067] px-6 py-3 text-sm font-extrabold text-[#1E1B18] hover:bg-[#FFD479] transition-colors"
              >
                <RotateCcw className="h-4 w-4" /> Ulangi Kuis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
