import { render, screen, fireEvent } from '@testing-library/react';
import SimulationList from '@/components/SimulationList';
import { mockSimulations } from '@/lib/mockData';

describe('SimulationList Component', () => {
  const mockOnSkillClick = jest.fn();
  const mockOnSortChange = jest.fn();

  it('renders all simulation tabs', () => {
    render(
      <SimulationList
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillClick={mockOnSkillClick}
        sortBy="recent"
        onSortChange={mockOnSortChange}
      />
    );

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Not Started')).toBeInTheDocument();
  });

  it('shows correct count for each status', () => {
    render(
      <SimulationList
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillClick={mockOnSkillClick}
        sortBy="recent"
        onSortChange={mockOnSortChange}
      />
    );

    const completedCount = mockSimulations.filter(s => s.status === 'completed').length;
    const inProgressCount = mockSimulations.filter(s => s.status === 'in-progress').length;

    expect(screen.getByText(completedCount.toString())).toBeInTheDocument();
    expect(screen.getByText(inProgressCount.toString())).toBeInTheDocument();
  });

  it('filters simulations when tab is clicked', () => {
    render(
      <SimulationList
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillClick={mockOnSkillClick}
        sortBy="recent"
        onSortChange={mockOnSortChange}
      />
    );

    const completedTab = screen.getByText('Completed');
    fireEvent.click(completedTab);

    const completedSims = mockSimulations.filter(s => s.status === 'completed');
    completedSims.forEach(sim => {
      expect(screen.getByText(sim.title)).toBeInTheDocument();
    });
  });

  it('shows empty state when no simulations match filter', () => {
    render(
      <SimulationList
        simulations={[]}
        selectedSkill="Non-existent Skill"
        onSkillClick={mockOnSkillClick}
        sortBy="recent"
        onSortChange={mockOnSortChange}
      />
    );

    expect(screen.getByText('No simulations found')).toBeInTheDocument();
    expect(screen.getByText(/No simulations found for/)).toBeInTheDocument();
  });

  it('allows sorting simulations', () => {
    render(
      <SimulationList
        simulations={mockSimulations}
        selectedSkill={null}
        onSkillClick={mockOnSkillClick}
        sortBy="recent"
        onSortChange={mockOnSortChange}
      />
    );

    const sortSelect = screen.getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'score' } });

    expect(mockOnSortChange).toHaveBeenCalledWith('score');
  });
});