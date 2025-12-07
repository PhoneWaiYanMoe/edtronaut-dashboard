export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type SimulationStatus = 'completed' | 'in-progress' | 'not-started';
export type SortBy = 'recent' | 'score' | 'difficulty';
export type ActiveTab = 'all' | 'in-progress' | 'completed' | 'not-started';
export type Trend = 'up' | 'down';

export interface User {
  name: string;
  avatar: string;
  email: string;
  joinDate: string;
  simulationsStarted: number;
  simulationsCompleted: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
  learningDaysThisWeek: number;
  totalHoursLearned: number;
  rank: string;
  rankPosition: number;
  totalUsers: number;
  certificates: number;
  level: number;
  xp: number;
  nextLevelXp: number;
}

export interface Simulation {
  id: number;
  title: string;
  company: string;
  logo: string;
  role: string;
  difficulty: Difficulty;
  status: SimulationStatus;
  progress: number;
  score: number | null;
  lastActivity: string | null;
  completedDate?: string;
  startedDate?: string;
  skills: string[];
  estimatedTime: string;
  actualTime: number;
  steps: number;
  completedSteps: number;
  xpEarned: number;
  popularity: number;
  completionRate: number;
}

export interface SkillData {
  current: number;
  previous: number;
  trend: Trend;
}

export interface Recommendation {
  id: number;
  title: string;
  company: string;
  logo: string;
  difficulty: Difficulty;
  estimatedTime: string;
  reason: string;
  skills: string[];
  match: number;
  trending: boolean;
  enrollments: number;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  match: number;
  posted: string;
  applicants: number;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
  progress?: number;
}

export interface HeatmapDay {
  date: string;
  value: number;
  minutes: number;
}

