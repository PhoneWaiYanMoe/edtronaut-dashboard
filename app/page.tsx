'use client';

import { useState, useMemo, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillInsights from '@/components/SkillInsights';
import SkillsChart from '@/components/SkillsChart';
import ActivityHeatmap from '@/components/ActivityHeatmap';
import SimulationList from '@/components/SimulationList';
import RecommendationsPanel from '@/components/RecommendationsPanel';
import AchievementsModal from '@/components/AchievementsModal';
import Sidebar from '@/components/Sidebar';
import CertificatesSection from '@/components/CertificatesSection';
import { mockUser, mockSimulations, mockSkills, mockRecommendations, mockJobs, achievements } from '@/lib/mockData';
import { generateHeatmapData, filterSimulationsBySkill, sortSimulations } from '@/lib/utils';
import { Simulation, SortBy } from '@/lib/types';

export default function LearnerDashboard() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [sortBy, setSortBy] = useState<SortBy>('recent');
  const [heatmapData, setHeatmapData] = useState<Array<{ date: string; value: number; minutes: number }>>([]);

  useEffect(() => {
    setAnimateStats(true);
    // Generate heatmap data only on client side to avoid hydration mismatch
    setHeatmapData(generateHeatmapData());
  }, []);

  const careerActivationRate = 78;

  const filteredSimulations = useMemo(() => {
    const filtered = filterSimulationsBySkill(mockSimulations, selectedSkill);
    return sortSimulations(filtered, sortBy);
  }, [selectedSkill, sortBy]);

  const handleSkillClick = (skill: string) => {
    if (skill === '') {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex gap-8">
            {/* Left Sidebar */}
            <Sidebar user={mockUser} />

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              <HeroSection 
                user={mockUser}
                careerActivationRate={careerActivationRate}
                animateStats={animateStats}
                onViewAchievements={() => setShowAchievements(true)}
              />

              <AchievementsModal
                achievements={achievements}
                isOpen={showAchievements}
                onClose={() => setShowAchievements(false)}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <SkillInsights skills={mockSkills} />

                  <SkillsChart
                    skills={mockSkills}
                    simulations={mockSimulations}
                    selectedSkill={selectedSkill}
                    onSkillSelect={setSelectedSkill}
                  />

                  <ActivityHeatmap
                    heatmapData={heatmapData}
                    longestStreak={mockUser.longestStreak}
                    totalHours={mockUser.totalHoursLearned}
                    learningDaysThisWeek={mockUser.learningDaysThisWeek}
                  />

                  <SimulationList
                    simulations={filteredSimulations}
                    selectedSkill={selectedSkill}
                    onSkillClick={handleSkillClick}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                  />
                </div>

                {/* Right Sidebar - Recommendations & Certificates */}
                <div className="space-y-6">
                  <RecommendationsPanel
                    recommendations={mockRecommendations}
                    jobs={mockJobs}
                  />
                  
                  <CertificatesSection
                    simulations={mockSimulations}
                    totalCertificates={mockUser.certificates}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 z-40 group">
        <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Need help? Ask AI Mentor
        </div>
      </button>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .border-b-3 {
          border-bottom-width: 3px;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
