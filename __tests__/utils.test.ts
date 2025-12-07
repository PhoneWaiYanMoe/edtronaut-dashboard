import { filterSimulationsBySkill, sortSimulations } from '@/lib/utils';
import { Simulation } from '@/lib/types';

describe('filterSimulationsBySkill', () => {
  const mockSimulations: Simulation[] = [
    {
      id: 1,
      title: 'Test Simulation 1',
      company: 'Test Co',
      logo: '🔍',
      role: 'Test Role',
      difficulty: 'Beginner',
      status: 'completed',
      progress: 100,
      score: 90,
      lastActivity: '2024-12-01',
      skills: ['Data Analysis', 'Problem Solving'],
      estimatedTime: '2 hours',
      actualTime: 2,
      steps: 3,
      completedSteps: 3,
      xpEarned: 100,
      popularity: 80,
      completionRate: 75
    },
    {
      id: 2,
      title: 'Test Simulation 2',
      company: 'Test Co',
      logo: '🔍',
      role: 'Test Role',
      difficulty: 'Intermediate',
      status: 'in-progress',
      progress: 50,
      score: null,
      lastActivity: '2024-12-02',
      skills: ['Communication', 'Strategic Thinking'],
      estimatedTime: '3 hours',
      actualTime: 1.5,
      steps: 4,
      completedSteps: 2,
      xpEarned: 0,
      popularity: 85,
      completionRate: 70
    }
  ];

  it('should return all simulations when skill is null', () => {
    const result = filterSimulationsBySkill(mockSimulations, null);
    expect(result).toHaveLength(2);
  });

  it('should filter simulations by skill', () => {
    const result = filterSimulationsBySkill(mockSimulations, 'Data Analysis');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  it('should return empty array when no simulations match skill', () => {
    const result = filterSimulationsBySkill(mockSimulations, 'Non-existent Skill');
    expect(result).toHaveLength(0);
  });
});

describe('sortSimulations', () => {
  const mockSimulations: Simulation[] = [
    {
      id: 1,
      title: 'Test Simulation 1',
      company: 'Test Co',
      logo: '🔍',
      role: 'Test Role',
      difficulty: 'Beginner',
      status: 'completed',
      progress: 100,
      score: 80,
      lastActivity: '2024-12-01',
      skills: ['Data Analysis'],
      estimatedTime: '2 hours',
      actualTime: 2,
      steps: 3,
      completedSteps: 3,
      xpEarned: 100,
      popularity: 80,
      completionRate: 75
    },
    {
      id: 2,
      title: 'Test Simulation 2',
      company: 'Test Co',
      logo: '🔍',
      role: 'Test Role',
      difficulty: 'Advanced',
      status: 'completed',
      progress: 100,
      score: 95,
      lastActivity: '2024-12-02',
      skills: ['Communication'],
      estimatedTime: '3 hours',
      actualTime: 3,
      steps: 4,
      completedSteps: 4,
      xpEarned: 150,
      popularity: 85,
      completionRate: 70
    }
  ];

  it('should sort by score descending', () => {
    const result = sortSimulations(mockSimulations, 'score');
    expect(result[0].score).toBe(95);
    expect(result[1].score).toBe(80);
  });

  it('should sort by difficulty descending', () => {
    const result = sortSimulations(mockSimulations, 'difficulty');
    expect(result[0].difficulty).toBe('Advanced');
    expect(result[1].difficulty).toBe('Beginner');
  });

  it('should sort by recent (lastActivity) descending', () => {
    const result = sortSimulations(mockSimulations, 'recent');
    expect(result[0].lastActivity).toBe('2024-12-02');
    expect(result[1].lastActivity).toBe('2024-12-01');
  });
});

