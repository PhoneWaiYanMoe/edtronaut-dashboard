import { Recommendation, Job } from '@/lib/types';
import { Sparkles, Briefcase, Clock, Eye, Flame, ChevronRight } from 'lucide-react';
import { getDifficultyColor } from '@/lib/utils';

interface RecommendationsPanelProps {
  recommendations: Recommendation[];
  jobs: Job[];
}

export default function RecommendationsPanel({ recommendations, jobs }: RecommendationsPanelProps) {
  return (
    <div className="space-y-6">
      {/* AI-Powered Recommendations */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 text-white">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            AI-Powered Recommendations
          </h2>
          <p className="text-sm text-purple-100">Personalized picks based on your learning journey</p>
        </div>
        
        <div className="p-4 space-y-4">
          {recommendations.map((rec) => (
            <div 
              key={rec.id}
              className="bg-white rounded-xl p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {rec.trending && (
                <div className="flex items-center space-x-1 text-xs font-bold text-orange-600 mb-2">
                  <Flame className="w-3 h-3" />
                  <span>TRENDING</span>
                </div>
              )}
              <div className="flex items-start space-x-3 mb-3">
                <div className="text-3xl">{rec.logo}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{rec.title}</h3>
                  <p className="text-xs text-gray-600 flex items-center">
                    <Briefcase className="w-3 h-3 mr-1" />
                    {rec.company}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{rec.match}%</div>
                  <div className="text-xs text-gray-500">Match</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-xs mb-3 flex-wrap gap-2">
                <span className={`px-2 py-1 rounded-lg font-semibold border ${getDifficultyColor(rec.difficulty)}`}>
                  {rec.difficulty}
                </span>
                <span className="flex items-center text-gray-600">
                  <Clock className="w-3 h-3 mr-1" />
                  {rec.estimatedTime}
                </span>
                <span className="flex items-center text-gray-600">
                  <Eye className="w-3 h-3 mr-1" />
                  {rec.enrollments}
                </span>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <p className="text-xs text-blue-700 font-medium flex items-start">
                  <Sparkles className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                  {rec.reason}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {rec.skills.map((skill: string) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm py-3 rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-bold group">
                <span>Start Learning</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="p-4">
          <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-purple-50 transition-all shadow-lg">
            View All Recommendations
          </button>
        </div>
      </div>

      {/* Job Matching */}
      <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-green-600" />
            Matched Jobs
          </h2>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>
        </div>
        
        <div className="space-y-4">
          {jobs.map(job => (
            <div 
              key={job.id}
              className="border-2 border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-green-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{job.company}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">{job.match}%</div>
                  <div className="text-xs text-gray-500">Match</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-600 mb-3">
                <span className="flex items-center">📍 {job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
                <span>•</span>
                <span className="font-semibold text-green-600">{job.salary}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {job.skills.map((skill: string) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-xs text-gray-500 mb-3">
                <Eye className="w-3 h-3 mr-1" />
                {job.applicants} applicants • Posted {job.posted}
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 text-white text-xs py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Apply Now
                </button>
                <button className="px-4 border-2 border-green-600 text-green-600 text-xs py-2 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm py-3 rounded-lg hover:shadow-xl transition-all font-bold flex items-center justify-center space-x-2">
          <span>Explore {Math.floor(Math.random() * 500 + 200)} More Jobs</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

