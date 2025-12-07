'use client';

import { Calendar } from 'lucide-react';
import { HeatmapDay } from '@/lib/types';
import { getHeatmapColor } from '@/lib/utils';

interface ActivityHeatmapProps {
  heatmapData: HeatmapDay[];
  longestStreak: number;
  totalHours: number;
  learningDaysThisWeek: number;
}

export default function ActivityHeatmap({ 
  heatmapData, 
  longestStreak, 
  totalHours, 
  learningDaysThisWeek 
}: ActivityHeatmapProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
        Learning Activity - Last 12 Weeks
      </h2>
      <div className="overflow-x-auto">
        {heatmapData.length > 0 ? (
          <div className="inline-grid grid-cols-12 gap-2 min-w-max">
            {heatmapData.map((day, idx) => (
              <div
                key={idx}
                className={`w-8 h-8 rounded ${getHeatmapColor(day.value)} hover:ring-2 hover:ring-green-400 transition-all cursor-pointer group relative`}
                title={`${day.date}: ${day.minutes} minutes`}
              >
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                  {day.date}: {day.minutes}min
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="inline-grid grid-cols-12 gap-2 min-w-max">
            {Array.from({ length: 84 }).map((_, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded bg-gray-100"
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
        <span>Less active</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-gray-100 rounded"></div>
          <div className="w-4 h-4 bg-green-200 rounded"></div>
          <div className="w-4 h-4 bg-green-300 rounded"></div>
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <div className="w-4 h-4 bg-green-600 rounded"></div>
        </div>
        <span>More active</span>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-700">{longestStreak}</div>
          <div className="text-xs text-gray-600">Longest Streak</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-700">{totalHours}</div>
          <div className="text-xs text-gray-600">Total Hours</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-700">{learningDaysThisWeek}</div>
          <div className="text-xs text-gray-600">Days This Week</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-orange-600">{heatmapData.length > 0 ? heatmapData.filter(d => d.value > 0).length : 0}</div>
          <div className="text-xs text-gray-600">Active Days</div>
        </div>
      </div>
    </div>
  );
}

