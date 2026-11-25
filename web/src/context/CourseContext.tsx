'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { COURSE_MODULES } from '@/lib/courseData';

export interface CustomQA {
  id: string;
  category: string;
  question: string;
  answer: string;
  createdAt: string;
}

interface CourseState {
  completedModules: string[];
  dailyCheckins: boolean[]; // [Sen, Sel, Rab, Kam, Jum, Sab, Min]
  quizScores: Record<string, number>;
  customQuestions: CustomQA[];
  xp: number;
  streakDays: number;
}

interface CourseContextValue extends CourseState {
  toggleModuleComplete: (slug: string) => void;
  toggleDayCheckin: (dayIndex: number) => void;
  saveQuizScore: (phaseId: string, scorePercent: number) => void;
  addCustomQuestion: (question: string, answer: string, category: string) => void;
  deleteCustomQuestion: (id: string) => void;
  isHydrated: boolean;
}

const DEFAULT_STATE: CourseState = {
  completedModules: ['Basic'],
  dailyCheckins: [true, true, true, true, false, false, false],
  quizScores: {},
  customQuestions: [],
  xp: 50,
  streakDays: 4,
};

const STORAGE_KEY = 'starsec_course_progress_v1';

const CourseContext = createContext<CourseContextValue | null>(null);

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CourseState>(DEFAULT_STATE);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<CourseState>;
        setState((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore storage errors
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const persist = (next: CourseState) => {
    setState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage errors
    }
  };

  const calculateXp = (completed: string[], scores: Record<string, number>) => {
    const modXp = completed.reduce((sum, slug) => {
      const found = COURSE_MODULES.find((m) => m.slug === slug);
      return sum + (found ? found.xp : 40);
    }, 0);
    const quizXp = Object.values(scores).reduce((sum, sc) => sum + Math.round(sc * 1.5), 0);
    return modXp + quizXp;
  };

  const toggleModuleComplete = (slug: string) => {
    const exists = state.completedModules.includes(slug);
    const completedModules = exists
      ? state.completedModules.filter((s) => s !== slug)
      : [...state.completedModules, slug];
    const xp = calculateXp(completedModules, state.quizScores);
    persist({ ...state, completedModules, xp });
  };

  const toggleDayCheckin = (dayIndex: number) => {
    const dailyCheckins = state.dailyCheckins.map((val, idx) => (idx === dayIndex ? !val : val));
    const streakDays = dailyCheckins.filter(Boolean).length;
    persist({ ...state, dailyCheckins, streakDays });
  };

  const saveQuizScore = (phaseId: string, scorePercent: number) => {
    const best = Math.max(state.quizScores[phaseId] ?? 0, scorePercent);
    const quizScores = { ...state.quizScores, [phaseId]: best };
    const xp = calculateXp(state.completedModules, quizScores);
    persist({ ...state, quizScores, xp });
  };

  const addCustomQuestion = (question: string, answer: string, category: string) => {
    const newItem: CustomQA = {
      id: `custom-${Date.now()}`,
      question,
      answer,
      category: category || 'Catatan Pribadi',
      createdAt: new Date().toLocaleDateString('id-ID'),
    };
    persist({ ...state, customQuestions: [newItem, ...state.customQuestions] });
  };

  const deleteCustomQuestion = (id: string) => {
    persist({
      ...state,
      customQuestions: state.customQuestions.filter((q) => q.id !== id),
    });
  };

  return (
    <CourseContext.Provider
      value={{
        ...state,
        toggleModuleComplete,
        toggleDayCheckin,
        saveQuizScore,
        addCustomQuestion,
        deleteCustomQuestion,
        isHydrated,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) {
    throw new Error('useCourse must be used inside CourseProvider');
  }
  return ctx;
}
