# Edtronaut Learner Dashboard

A modern, user-centric dashboard for Edtronaut's AI-enabled Job Simulation Platform, built with Next.js, React, and TypeScript.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📁 Project Structure

```
edtronaut-dashboard/
├── app/
│   ├── page.tsx          # Main dashboard page (client component)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── StatCard.tsx
│   ├── SkillsChart.tsx
│   ├── SimulationCard.tsx
│   ├── SimulationList.tsx
│   ├── RecommendationsPanel.tsx
│   ├── ActivityHeatmap.tsx
│   ├── AchievementsModal.tsx
│   └── SkillInsights.tsx
├── lib/                    # Utilities and data
│   ├── types.ts           # TypeScript type definitions
│   ├── mockData.ts        # Mock data for development
│   └── utils.ts           # Utility functions
├── __tests__/              # Test files
│   ├── utils.test.ts      # Utility function tests
│   └── components/        # Component tests
└── public/                 # Static assets
```

## 🏗️ Architecture

### Component Structure
- **Header**: Navigation and branding
- **HeroSection**: User profile, XP progress, and KPI cards
- **SkillsChart**: Interactive skills visualization with filtering
- **SimulationList**: List of simulations with filtering and sorting
- **RecommendationsPanel**: AI-powered recommendations and job matching
- **ActivityHeatmap**: GitHub-style activity visualization
- **AchievementsModal**: User achievements display

### State Management
- Uses React hooks (`useState`, `useMemo`, `useEffect`) for local state
- State is lifted to the main page component for shared data
- No external state management library (kept simple per requirements)

### Data Model
- **User**: Profile information, stats, and progress
- **Simulation**: Job simulation details, progress, and scores
- **Skill**: Skill proficiency data with trends
- **Recommendation**: Suggested simulations based on user profile
- **Job**: Job postings matched to user skills

## 🧪 Testing

The project includes basic test coverage:

- **Unit Tests**: Utility functions (filtering, sorting)
- **Component Tests**: Key UI components (StatCard)

Run tests:
```bash
npm test
npm test:watch  # Watch mode
```

## 🎨 Design Decisions

### UX & Information Hierarchy
1. **Hero Section**: Immediate visibility of key metrics and user status
2. **Skills Visualization**: Actionable skill bars that filter simulations
3. **Simulation List**: Clear grouping by status with sorting options
4. **Recommendations**: Contextual suggestions in sidebar

### Technical Choices
- **Next.js App Router**: Modern routing with server/client component separation
- **TypeScript**: Type safety throughout the codebase
- **TailwindCSS**: Utility-first styling for rapid development
- **Componentization**: Reusable, testable components
- **Client-side data generation**: Heatmap data generated on client to avoid hydration issues

## 📊 Features Implemented

### Must-Have Features ✅
- [x] Header with user snapshot and KPIs
- [x] Active & Completed Simulations list
- [x] Skills Radar/Bar Chart with filtering
- [x] Recommendations Panel (Simulations + Jobs)
- [x] Responsive design (mobile & desktop)
- [x] Empty states handling
- [x] Basic accessibility (semantic HTML)

### Bonus Features ✅
- [x] Activity Heatmap (GitHub-style)
- [x] Achievements Modal
- [x] Skill Insights Card
- [x] XP Progress Bar
- [x] Career Activation Rate

## 🔄 Trade-offs & Limitations

### Due to Time Constraints
1. **Mock Data**: Using static mock data instead of API integration
2. **Testing**: Basic coverage - would add more integration tests with more time
3. **Accessibility**: Basic semantic HTML - would add ARIA labels and keyboard navigation
4. **Performance**: Could optimize with React.memo and code splitting
5. **Error Handling**: Basic error states - would add more robust error boundaries

### What Would Be Improved With More Time
1. **API Integration**: Connect to real backend services
2. **Advanced Filtering**: Multi-skill filtering, date ranges
3. **Data Visualization**: More interactive charts (recharts, chart.js)
4. **Real-time Updates**: WebSocket integration for live progress
5. **Accessibility**: Full WCAG 2.1 AA compliance
6. **Performance**: Image optimization, lazy loading, virtual scrolling
7. **Internationalization**: Multi-language support
8. **Analytics**: User behavior tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Package Manager**: npm

## 📝 Development Notes

- All components are client components (use 'use client' directive) due to interactivity
- Heatmap data is generated client-side to prevent hydration mismatches
- Mock data is separated for easy replacement with API calls
- Type definitions ensure type safety across the application

## 🚢 Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This project is part of the Edtronaut take-home assignment.
