import { Sparkles, TrendingUp } from 'lucide-react';
import { SkillData } from '@/lib/types';

interface SkillInsightsProps {
  skills: Record<string, SkillData>;
}

export default function SkillInsights({ skills }: SkillInsightsProps) {
  const sorted = Object.entries(skills).sort((a, b) => b[1].current - a[1].current);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];
  const mostImproved = sorted.reduce((max, curr) => 
    (curr[1].current - curr[1].previous) > (max[1].current - max[1].previous) ? curr : max
  );

  return (
    <div className="bg-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100">
      <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-900">
        <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
        Your Skill Insights
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="text-sm text-blue-600 mb-1">Strongest Skill</div>
          <div className="text-2xl font-semibold text-blue-900">{strongest[0]}</div>
          <div className="text-3xl font-bold mt-1 text-blue-700">{strongest[1].current}%</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="text-sm text-blue-600 mb-1">Most Improved</div>
          <div className="text-2xl font-semibold text-blue-900">{mostImproved[0]}</div>
          <div className="text-lg font-semibold mt-1 flex items-center text-blue-700">
            +{mostImproved[1].current - mostImproved[1].previous}%
            <TrendingUp className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="text-sm text-blue-600 mb-1">Focus Area</div>
          <div className="text-2xl font-semibold text-blue-900">{weakest[0]}</div>
          <div className="text-3xl font-bold mt-1 text-blue-700">{weakest[1].current}%</div>
        </div>
      </div>
    </div>
  );
}

