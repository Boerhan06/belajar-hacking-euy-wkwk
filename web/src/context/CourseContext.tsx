'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { COURSE_MODULES, COURSE_PHASES } from '@/lib/courseData';

export interface CustomQA {
  id: string;
  category: string;
  question: string;
  answer: string;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  type: 'modul' | 'kuis' | 'checkin' | 'catatan';
  title: string;
  detail: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  role: string;
}

interface CourseState {
  user: UserProfile | null;
  completedModules: string[];
  dailyCheckins: boolean[]; // [Sen, Sel, Rab, Kam, Jum, Sab, Min]
  quizScores: Record<string, number>;
  customQuestions: CustomQA[];
  activityLogs: ActivityLog[];
  xp: number;
  streakDays: number;
}

interface CourseContextValue extends CourseState {
  login: (user: UserProfile) => void;
  logout: () => void;
  toggleModuleComplete: (slug: string) => void;
  toggleDayCheckin: (dayIndex: number) => void;
  saveQuizScore: (phaseId: string, scorePercent: number) => void;
  addCustomQuestion: (question: string, answer: string, category: string) => void;
  deleteCustomQuestion: (id: string) => void;
  addActivityLog: (title: string, detail: string, type?: ActivityLog['type']) => void;
  deleteActivityLog: (id: string) => void;
  isHydrated: boolean;
}

const DAYS_FULL = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

function getNowMeta() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toTimeString().slice(0, 5);
  return { date, time };
}

const DEFAULT_STATE: CourseState = {
  user: null,
  completedModules: ['Basic'],
  dailyCheckins: [true, true, true, true, false, false, false],
  quizScores: {},
  customQuestions: [],
  activityLogs: [
    {
      id: 'init-1',
      date: new Date().toISOString().slice(0, 10),
      time: '09:00',
      type: 'modul',
      title: 'Menyelesaikan Modul: Dasar Keamanan Informasi',
      detail: 'Mempelajari CIA Triad & konsep dasar (+50 XP)',
    },
  ],
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
        setState((prev) => ({
          ...prev,
          ...parsed,
          activityLogs: parsed.activityLogs ?? prev.activityLogs,
        }));
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

  const createLog = (
    title: string,
    detail: string,
    type: ActivityLog['type']
  ): ActivityLog => {
    const { date, time } = getNowMeta();
    return {
      id: `act-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      date,
      time,
      type,
      title,
      detail,
    };
  };

  const login = (user: UserProfile) => {
    const activityLogs = [
      createLog(`Masuk sebagai ${user.name}`, `Jalur belajar: ${user.role}`, 'checkin'),
      ...state.activityLogs,
    ];
    persist({ ...state, user, activityLogs });
  };

  const logout = () => {
    persist({ ...state, user: null });
  };

  const toggleModuleComplete = (slug: string) => {
    const exists = state.completedModules.includes(slug);
    const completedModules = exists
      ? state.completedModules.filter((s) => s !== slug)
      : [...state.completedModules, slug];
    const xp = calculateXp(completedModules, state.quizScores);

    const mod = COURSE_MODULES.find((m) => m.slug === slug);
    const modTitle = mod ? mod.title : slug.replace(/_/g, ' ');
    const activityLogs = !exists
      ? [
          createLog(
            `Menyelesaikan Modul: ${modTitle}`,
            `Progres modul ditandai selesai (+${mod?.xp ?? 40} XP)`,
            'modul'
          ),
          ...state.activityLogs,
        ]
      : state.activityLogs;

    persist({ ...state, completedModules, xp, activityLogs });
  };

  const toggleDayCheckin = (dayIndex: number) => {
    const willCheck = !state.dailyCheckins[dayIndex];
    const dailyCheckins = state.dailyCheckins.map((val, idx) =>
      idx === dayIndex ? willCheck : val
    );
    const streakDays = dailyCheckins.filter(Boolean).length;

    const activityLogs = willCheck
      ? [
          createLog(
            `Check-in Target Harian (${DAYS_FULL[dayIndex]})`,
            `Total hari belajar aktif minggu ini: ${streakDays}/7 hari`,
            'checkin'
          ),
          ...state.activityLogs,
        ]
      : state.activityLogs;

    persist({ ...state, dailyCheckins, streakDays, activityLogs });
  };

  const saveQuizScore = (phaseId: string, scorePercent: number) => {
    const best = Math.max(state.quizScores[phaseId] ?? 0, scorePercent);
    const quizScores = { ...state.quizScores, [phaseId]: best };
    const xp = calculateXp(state.completedModules, quizScores);

    const phase = COURSE_PHASES.find((p) => p.id === phaseId);
    const label = phase ? phase.badge : 'Ujian Campuran';
    const activityLogs = [
      createLog(
        `Menyelesaikan Kuis: ${label}`,
        `Skor diperoleh: ${scorePercent}% (Terbaik: ${best}%)`,
        'kuis'
      ),
      ...state.activityLogs,
    ];

    persist({ ...state, quizScores, xp, activityLogs });
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

  const addActivityLog = (
    title: string,
    detail: string,
    type: ActivityLog['type'] = 'catatan'
  ) => {
    const log = createLog(title, detail, type);
    persist({ ...state, activityLogs: [log, ...state.activityLogs] });
  };

  const deleteActivityLog = (id: string) => {
    persist({
      ...state,
      activityLogs: state.activityLogs.filter((l) => l.id !== id),
    });
  };

  return (
    <CourseContext.Provider
      value={{
        ...state,
        login,
        logout,
        toggleModuleComplete,
        toggleDayCheckin,
        saveQuizScore,
        addCustomQuestion,
        deleteCustomQuestion,
        addActivityLog,
        deleteActivityLog,
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
