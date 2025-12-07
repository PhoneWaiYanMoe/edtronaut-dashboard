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
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Sparkles className="w-5 h-5 mr-2" />
        Your Skill Insights
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-purple-100 mb-1">Strongest Skill</div>
          <div className="text-2xl font-bold">{strongest[0]}</div>
          <div className="text-3xl font-bold mt-1">{strongest[1].current}%</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-purple-100 mb-1">Most Improved</div>
          <div className="text-2xl font-bold">{mostImproved[0]}</div>
          <div className="text-lg font-bold mt-1 flex items-center text-green-300">
            +{mostImproved[1].current - mostImproved[1].previous}%
            <TrendingUp className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-purple-100 mb-1">Focus Area</div>
          <div className="text-2xl font-bold">{weakest[0]}</div>
          <div className="text-3xl font-bold mt-1">{weakest[1].current}%</div>
        </div>
      </div>
    </div>
  );
}

