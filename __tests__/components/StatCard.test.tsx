import { render, screen } from '@testing-library/react';
import StatCard from '@/components/StatCard';
import { Target } from 'lucide-react';

describe('StatCard', () => {
  it('renders with correct value and label', () => {
    render(
      <StatCard
        icon={Target}
        value={10}
        label="Test Label"
        animateStats={true}
      />
    );
    
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('shows trend indicator when provided', () => {
    render(
      <StatCard
        icon={Target}
        value={10}
        label="Test Label"
        trend="up"
        animateStats={true}
      />
    );
    
    // Check that the trend is rendered (ArrowUp icon would be present)
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it('renders string values correctly', () => {
    render(
      <StatCard
        icon={Target}
        value="85%"
        label="Average Score"
        animateStats={true}
      />
    );
    
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('Average Score')).toBeInTheDocument();
  });
});

