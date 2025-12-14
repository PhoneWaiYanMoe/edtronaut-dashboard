import { User } from '@/lib/types';
import { Target, CheckCircle, TrendingUp, Flame, Clock, Award, Trophy, Users, Medal, Crown } from 'lucide-react';
import StatCard from './StatCard';
import { calculatePercentile } from '@/lib/utils';

interface HeroSectionProps {
  user: User;
  careerActivationRate: number;
  animateStats: boolean;
  onViewAchievements: () => void;
}

export default function HeroSection({ user, careerActivationRate, animateStats, onViewAchievements }: HeroSectionProps) {
  const percentile = calculatePercentile(user.rankPosition, user.totalUsers);

  return (
    <div className="bg-blue rounded-2xl p-8 mb-8 text-white shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/20 rounded-full -ml-24 -mb-24"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-xl bg-white p-2 shadow-lg ring-2 ring-blue-500"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg flex items-center space-x-1">
                <Crown className="w-3 h-3" />
                <span>Lvl {user.level}</span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl text-blue-500 font-bold mb-2">Welcome back, {user.name}</h1>
              <p className="text-blue-300 text-lg mb-2">Track your progress and continue your learning journey</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-blue-600/60 px-3 py-1 rounded-lg flex items-center space-x-1">
                  <Trophy className="w-4 h-4" />
                  <span>{user.rank}</span>
                </span>
                <span className="bg-blue-600/60 px-3 py-1 rounded-lg flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Top {percentile}%</span>
                </span>
                <span className="bg-blue-600/60 px-3 py-1 rounded-lg flex items-center space-x-1">
                  <Medal className="w-4 h-4" />
                  <span>#{user.rankPosition} globally</span>
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onViewAchievements}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-all flex items-center space-x-2 shadow-md"
          >
            <Award className="w-5 h-5" />
            <span>View Achievements</span>
          </button>
        </div>

        {/* XP Progress Bar */}
        <div className="bg-blue-100/40 border border-blue-300 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-blue-800">Level {user.level} Progress</span>
            <span className="text-sm text-blue-800">{user.xp} / {user.nextLevelXp} XP</span>
          </div>
          <div className="w-full bg-white rounded-full h-3 overflow-hidden">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
            />
          </div>
          <p className="text-xs text-blue-800 mt-2">{user.nextLevelXp - user.xp} XP to Level {user.level + 1}</p>
        </div>

        {/* Enhanced KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard icon={Target} value={user.simulationsStarted} label="Started" trend="up" color="blue" delay={0} animateStats={animateStats} />
          <StatCard icon={CheckCircle} value={user.simulationsCompleted} label="Completed" trend="up" color="blue" delay={100} animateStats={animateStats} />
          <StatCard icon={TrendingUp} value={`${user.averageScore}%`} label="Avg Score" trend="up" color="blue" delay={200} animateStats={animateStats} />
          <StatCard icon={Flame} value={user.currentStreak} label="Day Streak" trend="up" color="blue" delay={300} animateStats={animateStats} />
          <StatCard icon={Clock} value={Math.round(user.totalHoursLearned)} label="Hours Learned" trend="up" color="blue" delay={400} animateStats={animateStats} />
          <StatCard icon={Award} value={`${careerActivationRate}%`} label="Career Active" trend="up" color="blue" delay={500} animateStats={animateStats} />
        </div>
      </div>
    </div>
  );
}

