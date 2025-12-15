import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function ResponsiveHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-semibold shadow-sm">
                ED
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-semibold text-blue-800">
                EDTRONAUT
              </span>
              <div className="text-xs text-blue-600 hidden sm:block">Learning Dashboard</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">
              Simulations
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">
              Jobs
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">
              CV PowerUp
            </a>
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Upgrade
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-blue-700 hover:bg-blue-50 font-medium py-2 px-3 rounded-lg transition-colors">
                Simulations
              </a>
              <a href="#" className="text-blue-700 hover:bg-blue-50 font-medium py-2 px-3 rounded-lg transition-colors">
                Jobs
              </a>
              <a href="#" className="text-blue-700 hover:bg-blue-50 font-medium py-2 px-3 rounded-lg transition-colors">
                CV PowerUp
              </a>
              <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Upgrade</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}