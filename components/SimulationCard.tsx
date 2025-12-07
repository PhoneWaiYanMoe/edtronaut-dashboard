'use client';

import { Simulation } from '@/lib/types';
import { Briefcase, Clock, Calendar, Users, Zap, Star, Play, Download, Share2 } from 'lucide-react';
import { getStatusColor, getDifficultyColor } from '@/lib/utils';

interface SimulationCardProps {
  simulation: Simulation;
  selectedSkill: string | null;
  onSkillClick: (skill: string) => void;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function SimulationCard({ 
  simulation, 
  selectedSkill, 
  onSkillClick, 
  hovered, 
  onMouseEnter, 
  onMouseLeave 
}: SimulationCardProps) {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`border-2 rounded-xl p-5 transition-all duration-300 cursor-pointer ${
        hovered 
          ? 'border-blue-400 shadow-2xl scale-[1.02] bg-gradient-to-r from-blue-50 to-purple-50' 
          : 'border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className={`text-4xl transform transition-transform ${hovered ? 'scale-125' : ''}`}>
            {simulation.logo}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                {simulation.title}
              </h3>
              {simulation.status === 'completed' && simulation.score !== null && simulation.score >= 90 && (
                <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Excellence</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
              <span className="font-semibold text-gray-700 flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                {simulation.company}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{simulation.role}</span>
              <span className="text-gray-400">•</span>
              <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getDifficultyColor(simulation.difficulty)}`}>
                {simulation.difficulty}
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {simulation.estimatedTime}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {simulation.skills.map((skill: string) => (
                <span 
                  key={skill}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSkillClick(skill);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedSkill === skill
                      ? 'bg-blue-600 text-white shadow-lg scale-110'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              {simulation.lastActivity && (
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  Last: {new Date(simulation.lastActivity).toLocaleDateString()}
                </span>
              )}
              <span className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {simulation.popularity}% popularity
              </span>
              {simulation.xpEarned > 0 && (
                <span className="flex items-center text-orange-600 font-medium">
                  <Zap className="w-3 h-3 mr-1" />
                  +{simulation.xpEarned} XP
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-right ml-6">
          <span className={`inline-block px-4 py-2 rounded-xl text-xs font-bold mb-3 border ${getStatusColor(simulation.status)} shadow-sm`}>
            {simulation.status.replace('-', ' ').toUpperCase()}
          </span>
          {simulation.score !== null && (
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {simulation.score}%
              </div>
              <div className="text-xs text-gray-500 mt-1">Your Score</div>
            </div>
          )}
        </div>
      </div>
      
      {simulation.status !== 'not-started' && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="font-medium text-gray-700">
              Progress: {simulation.completedSteps} of {simulation.steps} steps
            </span>
            <span className="font-bold text-blue-600">{simulation.progress}%</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-700"
              style={{ width: `${simulation.progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
            </div>
          </div>
          {simulation.actualTime > 0 && (
            <div className="mt-2 text-xs text-gray-500">
              Time spent: {simulation.actualTime.toFixed(1)} hours
            </div>
          )}
        </div>
      )}
      
      {hovered && (
        <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-semibold">
            <Play className="w-4 h-4" />
            <span>{simulation.status === 'not-started' ? 'Start' : 'Continue'}</span>
          </button>
          {simulation.status === 'completed' && (
            <>
              <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center space-x-2 font-semibold">
                <Download className="w-4 h-4" />
                <span>Certificate</span>
              </button>
              <button className="px-4 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-all flex items-center space-x-2 font-semibold">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

