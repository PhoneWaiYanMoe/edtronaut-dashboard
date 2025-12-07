import { Award, Download, Share2, Trophy } from 'lucide-react';
import { Simulation } from '@/lib/types';

interface CertificatesSectionProps {
  simulations: Simulation[];
  totalCertificates: number;
}

export default function CertificatesSection({ simulations, totalCertificates }: CertificatesSectionProps) {
  const completedSimulations = simulations.filter(s => s.status === 'completed').slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-600" />
          Your Certificates
        </h2>
        {totalCertificates > 0 && (
          <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
            {totalCertificates} Total
          </span>
        )}
      </div>
      
      {completedSimulations.length === 0 ? (
        <div className="text-center py-8">
          <Trophy className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p className="text-sm text-gray-500">No certificates yet</p>
          <p className="text-xs text-gray-400 mt-1">Complete simulations to earn certificates</p>
        </div>
      ) : (
        <div className="space-y-3">
          {completedSimulations.map(sim => (
            <div 
              key={sim.id}
              className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 flex-1">
                  <div className="text-2xl">{sim.logo}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900 truncate">{sim.company}</div>
                    <div className="text-xs text-gray-600 truncate">{sim.role}</div>
                    {sim.score !== null && (
                      <div className="text-xs text-gray-500 mt-1">
                        Score: <span className="font-bold text-green-600">{sim.score}%</span>
                      </div>
                    )}
                  </div>
                </div>
                <Trophy className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-yellow-600 text-white text-xs py-2 rounded hover:bg-yellow-700 transition-colors font-semibold flex items-center justify-center space-x-1">
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </button>
                <button className="flex-1 border-2 border-yellow-600 text-yellow-600 text-xs py-2 rounded hover:bg-yellow-50 transition-colors font-semibold flex items-center justify-center space-x-1">
                  <Share2 className="w-3 h-3" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {totalCertificates > completedSimulations.length && (
        <button className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors">
          View All {totalCertificates} Certificates →
        </button>
      )}
    </div>
  );
}

