import { LucideIcon, ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  trend?: 'up' | 'down';
  color?: string;
  delay?: number;
  animateStats: boolean;
}

export default function StatCard({ icon: Icon, value, label, trend, color = "blue", delay = 0, animateStats }: StatCardProps) {
  return (
    <div 
      className={`bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-${color}-200 hover:border-${color}-400 transition-all duration-300 hover:scale-105 hover:shadow-xl ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-6 h-6 text-${color}-600`} />
        {trend && (
          <span className={`flex items-center text-xs font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          </span>
        )}
      </div>
      <div className={`text-3xl font-bold text-${color}-600 mb-1`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

