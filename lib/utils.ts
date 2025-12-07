import { Simulation, SortBy, Difficulty, HeatmapDay } from './types';

export const generateHeatmapData = (): HeatmapDay[] => {
  const data: HeatmapDay[] = [];
  const today = new Date();
  for (let i = 83; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const intensity = Math.floor(Math.random() * 5);
    data.push({
      date: date.toISOString().split('T')[0],
      value: intensity,
      minutes: intensity * 30
    });
  }
  return data;
};

export const sortSimulations = (simulations: Simulation[], sortBy: SortBy): Simulation[] => {
  const sorted = [...simulations].sort((a, b) => {
    switch(sortBy) {
      case 'score': 
        return (b.score || 0) - (a.score || 0);
      case 'difficulty': 
        const diffMap: Record<string, number> = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
        return (diffMap[b.difficulty] || 0) - (diffMap[a.difficulty] || 0);
      case 'recent':
      default:
        return new Date(b.lastActivity || 0).getTime() - new Date(a.lastActivity || 0).getTime();
    }
  });
  return sorted;
};

export const filterSimulationsBySkill = (simulations: Simulation[], skill: string | null): Simulation[] => {
  if (!skill) return simulations;
  return simulations.filter(sim => sim.skills.includes(skill));
};

export const getStatusColor = (status: string): string => {
  switch(status) {
    case 'completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'not-started': return 'bg-gray-100 text-gray-600 border-gray-200';
    default: return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

export const getDifficultyColor = (difficulty: Difficulty): string => {
  switch(difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
    case 'Intermediate': return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
    default: return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

export const getHeatmapColor = (value: number): string => {
  if (value === 0) return 'bg-gray-100';
  if (value === 1) return 'bg-green-200';
  if (value === 2) return 'bg-green-300';
  if (value === 3) return 'bg-green-500';
  return 'bg-green-600';
};

export const calculatePercentile = (rankPosition: number, totalUsers: number): number => {
  return Math.round((1 - rankPosition / totalUsers) * 100);
};

