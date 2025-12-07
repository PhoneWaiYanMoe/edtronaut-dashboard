import { TrendingUp, TrendingDown, Award, Zap, Target } from 'lucide-react';
import { User } from '@/lib/types';

interface SidebarProps {
  user: User;
}

export default function Sidebar({ user }: SidebarProps) {
  const percentile = Math.round((1 - user.rankPosition / user.totalUsers) * 100);
  
  return (
    <div className="hidden xl:block w-64 space-y-6">
      {/* Quick Stats Sidebar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 sticky top-24">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-600" />
          Quick Stats
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Global Rank</span>
            <span className="text-lg font-bold text-blue-600">#{user.rankPosition}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Percentile</span>
            <span className="text-lg font-bold text-green-600">{percentile}%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Total XP</span>
            <span className="text-lg font-bold text-purple-600">{user.xp}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Certificates</span>
            <span className="text-lg font-bold text-yellow-600">{user.certificates}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Level Progress</span>
            <span className="text-xs text-gray-500">{user.xp}/{user.nextLevelXp}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
              style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          Your Impact
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Outperforming</span>
            <span className="font-bold">{percentile}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Longest Streak</span>
            <span className="font-bold">{user.longestStreak} days</span>
          </div>
          <div className="flex items-center justify-between">
            <span>This Week</span>
            <span className="font-bold">{user.learningDaysThisWeek} days</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-gray-700 transition-colors">
            📊 View Analytics
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-green-50 text-sm font-medium text-gray-700 transition-colors">
            🎯 Set Goals
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-50 text-sm font-medium text-gray-700 transition-colors">
            📝 Update Profile
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-50 text-sm font-medium text-gray-700 transition-colors">
            🔔 Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

