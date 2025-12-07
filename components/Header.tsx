import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-semibold shadow-sm">
                ED
              </div>
            </div>
            <div>
              <span className="text-2xl font-semibold text-blue-800">
                EDTRONAUT
              </span>
              <div className="text-xs text-blue-600">Learning Dashboard</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">Simulations</a>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">Jobs</a>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">CV PowerUp</a>
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Upgrade
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

