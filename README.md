# Edtronaut Learner Dashboard

A modern, user-centric dashboard for Edtronaut's AI-enabled Job Simulation Platform, built with Next.js, React, and TypeScript.

## Getting Started
Please Read the WRITEUP.md for short project write up. 
https://github.com/PhoneWaiYanMoe/edtronaut-dashboard/blob/master/WRITEUP.md

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


## Project Structure

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

## Architecture

### Component Structure
- **Header**: Navigation and branding
- **HeroSection**: User profile, XP progress, and KPI cards
- **SkillsChart**: Interactive skills visualization with filtering
- **SimulationList**: List of simulations with filtering and sorting
- **RecommendationsPanel**: AI-powered recommendations and job matching
- **ActivityHeatmap**: GitHub-style activity visualization
- **AchievementsModal**: User achievements display


Run tests:
```bash
npm test
npm test:watch  
```

## License

This project is part of the Edtronaut take-home assignment.
