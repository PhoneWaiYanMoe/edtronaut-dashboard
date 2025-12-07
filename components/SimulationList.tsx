'use client';

import { useState } from 'react';
import { BookOpen, Play, CheckCircle, Circle, Filter } from 'lucide-react';
import { Simulation, ActiveTab, SortBy } from '@/lib/types';
import SimulationCard from './SimulationCard';

interface SimulationListProps {
  simulations: Simulation[];
  selectedSkill: string | null;
  onSkillClick: (skill: string) => void;
  sortBy: SortBy;
  onSortChange: (sort: SortBy) => void;
}

export default function SimulationList({ 
  simulations, 
  selectedSkill, 
  onSkillClick, 
  sortBy, 
  onSortChange 
}: SimulationListProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');
  const [hoveredSim, setHoveredSim] = useState<number | null>(null);

  const groupedSimulations = {
    'in-progress': simulations.filter(s => s.status === 'in-progress'),
    'completed': simulations.filter(s => s.status === 'completed'),
    'not-started': simulations.filter(s => s.status === 'not-started')
  } as const;

  const displayedSimulations = activeTab === 'all' 
    ? simulations 
    : (activeTab === 'in-progress' 
      ? groupedSimulations['in-progress'] 
      : activeTab === 'completed' 
        ? groupedSimulations['completed'] 
        : groupedSimulations['not-started']);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-green-600" />
          Your Simulation Journey
          {selectedSkill && (
            <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
              {selectedSkill}
            </span>
          )}
        </h2>
        <div className="flex items-center space-x-3">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortBy)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-medium hover:border-blue-400 focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="recent">Most Recent</option>
            <option value="score">Highest Score</option>
            <option value="difficulty">Difficulty</option>
          </select>
          <Filter className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Enhanced Tabs */}
      <div className="flex space-x-2 mb-6 border-b-2 border-gray-100 overflow-x-auto">
        {[
          { key: 'all' as ActiveTab, label: 'All', icon: BookOpen, count: simulations.length },
          { key: 'in-progress' as ActiveTab, label: 'In Progress', icon: Play, count: groupedSimulations['in-progress'].length },
          { key: 'completed' as ActiveTab, label: 'Completed', icon: CheckCircle, count: groupedSimulations['completed'].length },
          { key: 'not-started' as ActiveTab, label: 'Not Started', icon: Circle, count: groupedSimulations['not-started'].length }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 px-4 text-sm font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
              activeTab === tab.key
                ? 'border-b-3 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === tab.key ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Simulation Cards */}
      <div className="space-y-4">
        {displayedSimulations.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No simulations found</h3>
            <p className="text-gray-500 mb-4">
              {selectedSkill 
                ? `No simulations found for ${selectedSkill}` 
                : "Start your learning journey today!"}
            </p>
            {selectedSkill && (
              <button
                onClick={() => onSkillClick('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Clear Filter & View All
              </button>
            )}
          </div>
        ) : (
          displayedSimulations.map(sim => (
            <SimulationCard
              key={sim.id}
              simulation={sim}
              selectedSkill={selectedSkill}
              onSkillClick={onSkillClick}
              hovered={hoveredSim === sim.id}
              onMouseEnter={() => setHoveredSim(sim.id)}
              onMouseLeave={() => setHoveredSim(null)}
            />
          ))
        )}
      </div>
    </div>
  );
}

