# Edtronaut Learner Dashboard - Project Write-up

## Executive Summary

I built a comprehensive, user-centric dashboard for Edtronaut's AI-enabled Job Simulation Platform that helps learners track progress, gain skill insights, and discover their next learning steps. The implementation prioritizes clear information hierarchy, actionable insights, and motivational UI over raw data visualization.

**Live Demo:** https://edtronaut-dashboard-urcx.vercel.app/
**Repository:** https://github.com/PhoneWaiYanMoe/edtronaut-dashboard

---

## Approach & Key Design Decisions

### 1. Information Architecture

I structured the dashboard to answer three critical questions learners have:

1. **"Where am I now?"** → Hero section with KPIs, XP progress, and global ranking
2. **"What have I accomplished?"** → Skills visualization + simulation history with certificates
3. **"What should I do next?"** → AI-powered recommendations + job matching

This hierarchy follows learning analytics research showing that dashboards are most effective when they provide clear, actionable feedback rather than just data visualization.

### 2. Technical Architecture

**Stack Choices:**
- **Next.js 16 (App Router):** Leveraged server components where possible for better performance
- **TypeScript:** Full type safety across the entire application
- **TailwindCSS v4:** Utility-first approach for rapid, consistent styling
- **Custom Charts:** Hand-rolled SVG/CSS charts for skill bars and heatmaps (no heavy dependencies)
- **Client-side State:** Used React hooks for interactivity (useState, useMemo, useEffect)

**Component Structure:**
```
app/
  ├── page.tsx          # Main dashboard (client component)
  └── layout.tsx        # Root layout
components/
  ├── Header.tsx        # Navigation and branding
  ├── HeroSection.tsx   # User profile + KPIs + XP
  ├── SkillsChart.tsx   # Interactive skill bars with filtering
  ├── SimulationList.tsx # Simulation cards with tabs
  ├── SimulationCard.tsx # Individual simulation display
  ├── ActivityHeatmap.tsx # GitHub-style activity view
  ├── RecommendationsPanel.tsx # AI recommendations + jobs
  ├── CertificatesSection.tsx # Dedicated certificates area
  └── [other components]
lib/
  ├── types.ts          # TypeScript definitions
  ├── mockData.ts       # Mock data for development
  └── utils.ts          # Helper functions
```

### 3. Key Features Implemented

#### Must-Have Features

**Header Snapshot:**
- User profile with avatar, name, and welcome message
- 6 KPI cards: Started, Completed, Avg Score, Streak, Hours, Career Activation Rate
- XP progress bar showing level advancement
- Global ranking and percentile display
- Achievement button

**Active & Completed Simulations:**
- Status-based tabs (All, In Progress, Completed, Not Started)
- Each card shows: title, company, role, difficulty, progress, score, last activity
- Hover interactions with action buttons (Continue/Start, Download Certificate, Share)
- Sort by: Recent, Score, Difficulty
- Empty states handled

**Skills Dashboard:**
- 8 skill categories with proficiency bars (0-100%)
- Trend indicators (up/down arrows)
- **Interactive filtering:** Click any skill to filter simulations below
- Clear filter button
- Visual feedback showing number of simulations per skill

**Recommendations Panel:**
- 4 simulation recommendations based on skill gaps
- Match percentage calculation
- "Why recommended" reasoning
- Trending indicator
- 3 job recommendations with skill matching
- Apply/Save actions

#### Bonus Features

**Activity Heatmap:**
- GitHub-style contribution view (12 weeks, 84 days)
- Color intensity based on activity level
- Hover tooltips showing exact minutes
- Summary stats: Longest Streak, Total Hours, Days This Week, Active Days

**Certificates Section:**
- Dedicated sidebar component
- Download and Share buttons for each certificate
- Shows score and completion date
- Quick access to all earned certificates

**Additional Enhancements:**
- Left sidebar with Quick Stats (Rank, Percentile, XP, Level Progress)
- Skill Insights card showing strongest, most improved, and focus areas
- Responsive design (mobile, tablet, desktop)
- Animations and transitions for better UX

### 4. Design Philosophy

**User-Centric Approach:**
- **Motivational UI:** Used gamification elements (XP, levels, streaks) to encourage continued learning
- **Actionable Insights:** Made charts interactive - clicking skills filters simulations
- **Progressive Disclosure:** Primary info visible, details on hover/click
- **Visual Hierarchy:** Used color, size, and spacing to guide attention

**Color System:**
- Blue as primary color (trust, learning, professionalism)
- Green for progress and achievements (growth, success)
- Orange for XP and rewards (energy, motivation)
- Consistent badge system for difficulty, status, and tags

---

## Trade-offs Made Due to Time

### 1. Mock Data vs. API Integration
**Trade-off:** Used static mock data instead of connecting to a real backend  
**Rationale:** Allowed me to focus on UI/UX and core functionality within 6-8 hours  
**Impact:** Easy to replace - data layer is well-abstracted in `mockData.ts`

### 2. Testing Coverage
**Trade-off:** Implemented basic test coverage (~30%) instead of comprehensive (80%+)  
**What's Tested:**
- ✅ Utility functions (filtering, sorting)
- ✅ Key component (StatCard)
- ❌ Integration tests for user flows
- ❌ E2E tests with Playwright

**Rationale:** Prioritized working features over exhaustive tests  
**Next Steps:** Would add React Testing Library tests for all interactive components

### 3. Recommendation Algorithm
**Trade-off:** Simple rule-based logic instead of ML-powered recommendations  
**Current Logic:**
- Find user's weakest skills (lowest proficiency scores)
- Recommend simulations tagged with those skills
- Sort by match percentage

**Ideal:** Train a collaborative filtering model or use embeddings for semantic matching


### 4. Performance Optimization
**Trade-off:** Basic optimization instead of advanced techniques  
**What's Implemented:**
- ✅ useMemo for filtered/sorted data
- ✅ Client-side data generation (heatmap) to avoid hydration issues
- ❌ Code splitting for large components
- ❌ Image optimization with Next.js Image
- ❌ Virtual scrolling for long lists
- ❌ React.memo for expensive components

### 6. Mobile Experience
**Trade-off:** Responsive layout instead of native mobile optimizations  
**What's Implemented:**
- ✅ Mobile-first responsive grid
- ✅ Touch-friendly buttons and cards
- ❌ Swipe gestures
- ❌ Pull-to-refresh
- ❌ Mobile-specific navigation patterns

---

## What I Would Improve With More Time

### High Priority (Next Sprint)

#### 1. Complete Test Coverage (2-3 days)
- **Unit tests:** All utility functions and data transformations
- **Component tests:** Interactive elements (tabs, filters, buttons)
- **Integration tests:** User flows (select skill → filter simulations → view details)
- **E2E tests:** Critical paths with Playwright
- **Target:** 80%+ code coverage

#### 2. Real API Integration (3-5 days)

- Implement loading states with skeletons
- Add error boundaries for failed requests
- Cache with SWR or React Query
- Optimistic updates for user actions

#### 3. Advanced Recommendation Engine (5-7 days)
**Current:** Rule-based (weakest skills)  
**Upgrade to:**
- Collaborative filtering (users with similar profiles)
- Content-based filtering (simulation metadata)
- Hybrid approach combining both
- A/B test recommendation quality

#### 4. Analytics & Insights (3-4 days)
**New Dashboard Sections:**
- **Time-Series Charts:** Skill progression over time (line charts)
- **Peer Comparison:** "You're in the top X% for Y skill"
- **Learning Velocity:** Simulations completed per week/month
- **Skill Gaps:** Identify missing skills for target roles
- **Career Path Progress:** Visual roadmap showing current → target role

### Medium Priority

#### 5. Performance Optimization (2-3 days)
- Implement code splitting with dynamic imports
- Add React.memo for expensive components
- Optimize images with Next.js Image component
- Implement virtual scrolling for long simulation lists
- Add service worker for offline support
- Lighthouse score target: 95+

#### 6. Enhanced Gamification (3-4 days)
- **Badges & Achievements:** 
  - "Early Bird" (complete simulation before 9am)
  - "Weekend Warrior" (learn on weekends)
  - "Skill Master" (reach 95% in any skill)
- **Leaderboards:** Global, friends, cohort rankings
- **Challenges:** "Complete 3 Data Analysis sims this month"
- **Rewards:** Unlock premium simulations with XP

#### 7. Social Features (4-5 days)
- Share achievements to LinkedIn/Twitter
- Invite friends for streak competitions
- Discussion forums per simulation
- Mentorship matching based on skills
- Study groups for popular simulations

#### 8. Multi-Language Support (2-3 days)
- Implement i18n with next-intl
- Support English, Vietnamese, Spanish
- RTL support for Arabic, Hebrew
- Locale-specific date/time formatting

#### 9. Advanced Filtering & Search (2-3 days)
- Multi-skill filtering (AND/OR logic)
- Date range filters
- Full-text search across simulations
- Save custom filter presets
- Smart suggestions as you type

### Low Priority (Nice to Have)

#### 10. Data Visualization Upgrades
- Replace custom charts with Recharts or D3.js
- Add interactive tooltips with detailed breakdowns
- Implement drill-down capabilities
- Export charts as PNG/PDF

#### 11. Notification System
- Email digests (weekly progress reports)
- Push notifications for streak reminders
- In-app notifications for new recommendations
- Slack integration for team learning

#### 12. Personalization Engine
- Remember user preferences (dark mode, layout)
- Customize dashboard layout (drag & drop widgets)
- Set personal learning goals
- AI-generated learning plans

#### 13. Portfolio Builder
- Generate professional portfolio page from completed simulations
- Customizable templates
- SEO-optimized personal URL
- Export as PDF resume

---

## Success Metrics

If deployed, I would track:

**Business KPIs:**
- Dashboard Adoption Rate: % of users who visit dashboard within 7 days of signup
- Career Activation Rate: % users taking key actions (as defined in requirements)
- Cross-Product Usage: % clicking Jobs or CV PowerUp from dashboard
- Simulation Completion Rate: Before/after dashboard launch

**Engagement Metrics:**
- Daily/Weekly Active Users (DAU/WAU)
- Average session duration
- Skill filter usage rate (validates interactive design)
- Recommendation click-through rate
- Return visitor rate (7-day, 30-day)

**Learning Outcomes:**
- Avg skill improvement per month
- Time to complete simulations (faster = better engagement)
- Streak retention (% maintaining 7+ day streaks)

---

## What I Learned

1. **User-Centric Design:** Spending time understanding user personas (Kim, An, Tom) led to better feature prioritization
2. **Progressive Enhancement:** Starting with must-haves then adding bonuses prevented scope creep
3. **Component Abstraction:** Building reusable components (StatCard, SimulationCard) paid off immediately
4. **Type Safety:** TypeScript caught numerous bugs during development, especially with data transformations
5. **Mock Data Strategy:** Well-structured mock data made the transition to real APIs straightforward

---

## Conclusion

I thoroughly enjoyed building this dashboard and thinking deeply about how to make learning analytics actionable and motivational. The implementation balances polish with pragmatism - all must-have requirements are complete, bonus features are functional, and the codebase is well-structured for future enhancements.

I'm excited about the potential to iterate on this foundation, particularly around the recommendation engine and deeper analytics. The modular architecture makes it straightforward to add new features without refactoring.

Thank you for the opportunity to work on this challenging and meaningful project. I look forward to discussing the implementation and potential improvements!

---

**Time Invested:** ~7 hours
- Planning & Design: 1 hour
- Core Features: 4 hours  
- Bonus Features: 1.5 hours
- Testing & Documentation: 0.5 hours

**Contact:** wyan40653@gmail.com