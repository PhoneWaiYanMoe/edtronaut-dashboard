'use client';

import { useState } from 'react';
import { BarChart3, Sparkles, ArrowUp, ArrowDown, X } from 'lucide-react';
import { Simulation } from '@/lib/types';
import { getDifficultyColor } from '@/lib/utils';

interface SkillsChartProps {
  skills: Record<string, { current: number; previous: number; trend: 'up' | 'down' }>;
  simulations: Simulation[];
  selectedSkill: string | null;
  onSkillSelect: (skill: string | null) => void;
}

export default function SkillsChart({ skills, simulations, selectedSkill, onSkillSelect }: SkillsChartProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
          Skills Mastery Dashboard
        </h2>
        {selectedSkill && (
          <button
            onClick={() => onSkillSelect(null)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all shadow-sm"
          >
            <X className="w-4 h-4" />
            <span className="font-medium">Clear Filter</span>
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {Object.entries(skills).map(([skill, data]) => {
          const isSelected = selectedSkill === skill;
          const simCount = simulations.filter(s => s.skills.includes(skill)).length;
          
          return (
            <div 
              key={skill}
              className={`transition-all duration-300 ${isSelected ? 'scale-105' : ''}`}
            >
              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={() => onSkillSelect(isSelected ? null : skill)}
                  className={`text-sm font-semibold transition-all flex items-center space-x-2 ${
                    isSelected 
                      ? 'text-blue-700 scale-110' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>{skill}</span>
                  {data.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-blue-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-blue-500" />
                  )}
                </button>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500">{simCount} simulations</span>
                  <span className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                    {data.current}%
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                  <div 
                    className={`h-4 rounded-full transition-all duration-700 relative ${
                      isSelected 
                        ? 'bg-blue-600' 
                        : data.current >= 80 
                          ? 'bg-blue-500'
                          : data.current >= 60
                            ? 'bg-blue-400'
                            : 'bg-blue-300'
                    }`}
                    style={{ width: `${data.current}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20"></div>
                  </div>
                </div>
                {data.current !== data.previous && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      data.trend === 'up' ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {data.trend === 'up' ? '+' : ''}{data.current - data.previous}
                    </span>
                  </div>
                )}
              </div>
              {isSelected && (
                <div className="mt-2 text-xs text-blue-600 font-medium animate-fadeIn">
                  ✨ Showing {simCount} simulation(s) that develop this skill
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-sm text-gray-700 flex items-center">
          <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
          <strong>Pro Tip:</strong>&nbsp;Click any skill bar to filter simulations below and see which courses helped you develop that skill
        </p>
      </div>
    </div>
  );
}

