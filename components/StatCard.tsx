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
      className={`bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-6 h-6 text-blue-600" />
        {trend && (
          <span className={`flex items-center text-xs font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
            {trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-blue-700 mb-1">{value}</div>
      <div className="text-sm text-blue-600">{label}</div>
    </div>
  );
}

