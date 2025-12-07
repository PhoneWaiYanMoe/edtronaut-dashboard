import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg transform hover:rotate-6 transition-transform">
                ED
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EDTRONAUT
              </span>
              <div className="text-xs text-gray-500">Learning Dashboard</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Simulations</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CV PowerUp</a>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Upgrade
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

