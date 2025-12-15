import { Briefcase, Clock, Calendar, Users, Zap, Star, Play, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

interface Simulation {
  id: number;
  title: string;
  company: string;
  logo: string;
  role: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'completed' | 'in-progress' | 'not-started';
  progress: number;
  score: number | null;
  lastActivity: string | null;
  skills: string[];
  estimatedTime: string;
  actualTime: number;
  steps: number;
  completedSteps: number;
  xpEarned: number;
  popularity: number;
}

interface ResponsiveSimulationCardProps {
  simulation: Simulation;
  selectedSkill: string | null;
  onSkillClick: (skill: string) => void;
}

export default function ResponsiveSimulationCard({ 
  simulation, 
  selectedSkill, 
  onSkillClick 
}: ResponsiveSimulationCardProps) {
  const [hovered, setHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'in-progress': return 'bg-blue-200 text-blue-700 border-blue-300';
      case 'not-started': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Intermediate': return 'bg-blue-200 text-blue-700 border-blue-300';
      case 'Advanced': return 'bg-blue-300 text-blue-800 border-blue-400';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border rounded-xl p-4 sm:p-5 transition-all duration-300 cursor-pointer ${
        hovered 
          ? 'border-blue-400 shadow-lg scale-[1.01] bg-blue-50' 
          : 'border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
        {/* Logo and Info */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 w-full sm:w-auto">
          <div className={`text-3xl sm:text-4xl transform transition-transform flex-shrink-0 ${hovered ? 'scale-125' : ''}`}>
            {simulation.logo}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                {simulation.title}
              </h3>
              {simulation.status === 'completed' && simulation.score !== null && simulation.score >= 90 && (
                <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-xs font-bold whitespace-nowrap self-start sm:self-auto">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Excellence</span>
                </div>
              )}
            </div>
            
            {/* Company and Role Info */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm mb-3">
              <span className="font-semibold text-gray-700 flex items-center gap-1">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate max-w-[150px]">{simulation.company}</span>
              </span>
              <span className="text-gray-400 hidden sm:inline">•</span>
              <span className="text-gray-600 truncate max-w-[200px]">{simulation.role}</span>
            </div>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold border ${getDifficultyColor(simulation.difficulty)}`}>
                {simulation.difficulty}
              </span>
              <span className="flex items-center gap-1 text-gray-600 text-xs bg-gray-100 px-2 py-1 rounded-lg">
                <Clock className="w-3 h-3" />
                {simulation.estimatedTime}
              </span>
              <span className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(simulation.status)} uppercase`}>
                {simulation.status.replace('-', ' ')}
              </span>
            </div>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {simulation.skills.map((skill: string) => (
                <span 
                  key={skill}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSkillClick(skill);
                  }}
                  className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedSkill === skill
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
              {simulation.lastActivity && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span className="hidden sm:inline">Last: </span>
                  {new Date(simulation.lastActivity).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {simulation.popularity}%
              </span>
              {simulation.xpEarned > 0 && (
                <span className="flex items-center gap-1 text-orange-600 font-medium">
                  <Zap className="w-3 h-3" />
                  +{simulation.xpEarned}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Score Section - Now responsive */}
        {simulation.score !== null && (
          <div className="flex sm:flex-col items-center gap-2 sm:gap-0 sm:text-right sm:ml-4 self-start sm:self-auto">
            <div className="text-2xl sm:text-3xl font-bold text-blue-700">
              {simulation.score}%
            </div>
            <div className="text-xs text-gray-500">Your Score</div>
          </div>
        )}
      </div>
      
      {/* Progress Bar */}
      {simulation.status !== 'not-started' && (
        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
            <span className="font-medium text-gray-700">
              <span className="hidden sm:inline">Progress: </span>
              {simulation.completedSteps}/{simulation.steps}
              <span className="hidden sm:inline"> steps</span>
            </span>
            <span className="font-bold text-blue-600">{simulation.progress}%</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden shadow-inner">
            <div 
              className="absolute inset-0 bg-blue-500 rounded-full transition-all duration-700"
              style={{ width: `${simulation.progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          </div>
          {simulation.actualTime > 0 && (
            <div className="mt-2 text-xs text-gray-500">
              Time: {simulation.actualTime.toFixed(1)}h
            </div>
          )}
        </div>
      )}
      
      {/* Action Buttons */}
      {hovered && (
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold text-sm">
            <Play className="w-4 h-4" />
            <span>{simulation.status === 'not-started' ? 'Start' : 'Continue'}</span>
          </button>
          {simulation.status === 'completed' && (
            <>
              <button className="sm:flex-none px-3 sm:px-4 py-2 sm:py-3 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 font-semibold text-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Certificate</span>
              </button>
              <button className="sm:flex-none px-3 sm:px-4 py-2 sm:py-3 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 font-semibold text-sm">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}