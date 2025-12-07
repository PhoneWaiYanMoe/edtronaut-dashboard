
import { render, screen } from '@testing-library/react';
import LearnerDashboard from '@/app/page';

describe('Dashboard Integration', () => {
  it('renders all major sections', () => {
    render(<LearnerDashboard />);

    expect(screen.getByText(/Welcome back/)).toBeInTheDocument();

    expect(screen.getByText('Skills Mastery Dashboard')).toBeInTheDocument();

    expect(screen.getByText('Your Simulation Journey')).toBeInTheDocument();

    expect(screen.getByText('AI-Powered Recommendations')).toBeInTheDocument();
  });

  it('displays user statistics', () => {
    render(<LearnerDashboard />);

    expect(screen.getByText('Started')).toBeInTheDocument();
    
    const completedElements = screen.getAllByText('Completed');
    expect(completedElements.length).toBeGreaterThan(0);
    
    expect(screen.getByText('Avg Score')).toBeInTheDocument();
    expect(screen.getByText('Day Streak')).toBeInTheDocument();
  });

  it('shows activity heatmap', () => {
    render(<LearnerDashboard />);

    expect(screen.getByText(/Learning Activity - Last 12 Weeks/)).toBeInTheDocument();
    
    const longestStreakElements = screen.getAllByText('Longest Streak');
    expect(longestStreakElements.length).toBeGreaterThan(0);
    
    const totalHoursElements = screen.getAllByText('Total Hours');
    expect(totalHoursElements.length).toBeGreaterThan(0);
  });

  it('shows user profile information', () => {
    render(<LearnerDashboard />);

    expect(screen.getByText(/An Nguyen/)).toBeInTheDocument();
    
    expect(screen.getByText(/Lvl \d+/)).toBeInTheDocument();
  });

  it('displays simulation tabs', () => {
    render(<LearnerDashboard />);

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Not Started')).toBeInTheDocument();
  });

  it('shows recommendations section', () => {
    render(<LearnerDashboard />);

    expect(screen.getByText('AI-Powered Recommendations')).toBeInTheDocument();
    expect(screen.getByText('Matched Jobs')).toBeInTheDocument();
  });
});