import { render, screen, fireEvent } from '@testing-library/react';
import SkillsChart from '@/components/SkillsChart';
import { mockSkills, mockSimulations } from '@/lib/mockData';
import '@testing-library/jest-dom';

describe('SkillsChart Component', () => {
  const mockOnSkillSelect = jest.fn();

  beforeEach(() => {
    mockOnSkillSelect.mockClear();
  });

  it('renders all skills', () => {
    render(
      <SkillsChart
        skills={mockSkills}
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillSelect={mockOnSkillSelect}
      />
    );

    Object.keys(mockSkills).forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('shows skill proficiency percentages', () => {
    render(
      <SkillsChart
        skills={mockSkills}
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillSelect={mockOnSkillSelect}
      />
    );

    expect(screen.getByText('82%')).toBeInTheDocument(); 
    expect(screen.getByText('88%')).toBeInTheDocument(); 
  });

  it('filters simulations when skill is clicked', () => {
    render(
      <SkillsChart
        skills={mockSkills}
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillSelect={mockOnSkillSelect}
      />
    );

    const dataAnalysisButton = screen.getByText('Data Analysis');
    fireEvent.click(dataAnalysisButton);

    expect(mockOnSkillSelect).toHaveBeenCalledWith('Data Analysis');
  });

  it('shows clear filter button when skill is selected', () => {
    render(
      <SkillsChart
        skills={mockSkills}
        simulations={mockSimulations}
        selectedSkill="Data Analysis"
        onSkillSelect={mockOnSkillSelect}
      />
    );

    const clearButton = screen.getByText('Clear Filter');
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(mockOnSkillSelect).toHaveBeenCalledWith(null);
  });

  it('displays number of simulations per skill', () => {
    render(
      <SkillsChart
        skills={mockSkills}
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillSelect={mockOnSkillSelect}
      />
    );

    const simulationCounts = screen.getAllByText(/\d+ simulations?/);
    expect(simulationCounts.length).toBeGreaterThan(0);
  });
});
