// __tests__/components/StatCard.test.tsx - FIXED VERSION
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
    const { container } = render(
      <StatCard
        icon={Target}
        value={10}
        label="Test Label"
        trend="up"
        animateStats={true}
      />
    );
    
    // Check that the trend span is rendered with correct class
    const trendElement = container.querySelector('.text-green-600');
    expect(trendElement).toBeInTheDocument();
    
    // Check for the arrow SVG
    const svgElements = container.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(1); // Should have icon + arrow
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

  it('applies correct color scheme', () => {
    const { container } = render(
      <StatCard
        icon={Target}
        value={100}
        label="Test"
        color="blue"
        animateStats={true}
      />
    );

    expect(container.querySelector('.text-blue-600')).toBeInTheDocument();
  });
});
