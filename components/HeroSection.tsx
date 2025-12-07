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
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 rounded-3xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-2xl bg-white p-2 shadow-xl ring-4 ring-white/50"
              />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                <Crown className="w-3 h-3" />
                <span>Lvl {user.level}</span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
              <p className="text-blue-100 text-lg mb-2">Keep building your future, one simulation at a time</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Trophy className="w-4 h-4" />
                  <span>{user.rank}</span>
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Top {percentile}%</span>
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Medal className="w-4 h-4" />
                  <span>#{user.rankPosition} globally</span>
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onViewAchievements}
            className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/30 transition-all flex items-center space-x-2 shadow-lg"
          >
            <Award className="w-5 h-5" />
            <span>View Achievements</span>
          </button>
        </div>

        {/* XP Progress Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Level {user.level} Progress</span>
            <span className="text-sm">{user.xp} / {user.nextLevelXp} XP</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-1000 shadow-lg"
              style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
            />
          </div>
          <p className="text-xs text-blue-100 mt-2">{user.nextLevelXp - user.xp} XP to Level {user.level + 1}</p>
        </div>

        {/* Enhanced KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard icon={Target} value={user.simulationsStarted} label="Started" trend="up" color="blue" delay={0} animateStats={animateStats} />
          <StatCard icon={CheckCircle} value={user.simulationsCompleted} label="Completed" trend="up" color="green" delay={100} animateStats={animateStats} />
          <StatCard icon={TrendingUp} value={`${user.averageScore}%`} label="Avg Score" trend="up" color="purple" delay={200} animateStats={animateStats} />
          <StatCard icon={Flame} value={user.currentStreak} label="Day Streak" trend="up" color="orange" delay={300} animateStats={animateStats} />
          <StatCard icon={Clock} value={Math.round(user.totalHoursLearned)} label="Hours Learned" trend="up" color="indigo" delay={400} animateStats={animateStats} />
          <StatCard icon={Award} value={`${careerActivationRate}%`} label="Career Active" trend="up" color="green" delay={500} animateStats={animateStats} />
        </div>
      </div>
    </div>
  );
}

