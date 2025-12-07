import { X } from 'lucide-react';
import { Achievement } from '@/lib/types';

interface AchievementsModalProps {
  achievements: Achievement[];
  isOpen: boolean;
  onClose: () => void;
}

export default function AchievementsModal({ achievements, isOpen, onClose }: AchievementsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Your Achievements 🏆</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map(ach => (
            <div key={ach.id} className={`border-2 rounded-xl p-6 transition-all ${ach.earned ? 'border-yellow-300 bg-yellow-50 shadow-lg' : 'border-gray-200 bg-gray-50 opacity-60'}`}>
              <div className="text-4xl mb-3">{ach.icon}</div>
              <h3 className="font-bold text-lg mb-1">{ach.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{ach.description}</p>
              {ach.earned ? (
                <span className="text-xs text-green-600 font-medium">Earned {ach.date}</span>
              ) : (
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${ach.progress}%` }} />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{ach.progress}% complete</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

