import { mockSimulations, mockSkills } from '@/lib/mockData';
import { Simulation, SkillData } from '@/lib/types';

describe('Recommendation Logic', () => {
  it('should identify weakest skills for improvement', () => {
    const skillEntries = Object.entries(mockSkills);
    const sortedByProficiency = skillEntries.sort((a, b) => a[1].current - b[1].current);
    
    const weakestSkill = sortedByProficiency[0];
    expect(weakestSkill[0]).toBe('Design Thinking');
    expect(weakestSkill[1].current).toBe(52);
  });

  it('should find simulations that teach specific skills', () => {
    const targetSkill = 'Data Analysis';
    const relevantSimulations = mockSimulations.filter(sim => 
      sim.skills.includes(targetSkill)
    );
    
    expect(relevantSimulations.length).toBeGreaterThan(0);
    relevantSimulations.forEach(sim => {
      expect(sim.skills).toContain(targetSkill);
    });
  });

  it('should calculate skill match percentage', () => {
    const userSkills = ['Data Analysis', 'Communication', 'Problem Solving'];
    const simulationSkills = ['Data Analysis', 'Technical Skills'];
    
    const matchingSkills = userSkills.filter(skill => 
      simulationSkills.includes(skill)
    );
    const matchPercentage = (matchingSkills.length / simulationSkills.length) * 100;
    
    expect(matchPercentage).toBe(50);
  });

  it('should prioritize trending simulations', () => {
    const recommendations = [
      { id: 1, trending: true, match: 94 },
      { id: 2, trending: false, match: 95 },
      { id: 3, trending: true, match: 90 }
    ];

    const sorted = recommendations.sort((a, b) => {
      if (a.trending && !b.trending) return -1;
      if (!a.trending && b.trending) return 1;
      return b.match - a.match;
    });

    expect(sorted[0].trending).toBe(true);
    expect(sorted[0].match).toBe(94);
  });
});
