import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Search, Moon, Sun } from 'lucide-react';
import { LANGUAGES, TOOL_CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{category: string, tool: string}[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Dark Mode State
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) setIsOpen(false);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Search Logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 0) {
      const results: {category: string, tool: string}[] = [];
      TOOL_CATEGORIES.forEach(cat => {
        cat.tools.forEach(tool => {
          if (tool.name.toLowerCase().includes(query.toLowerCase())) {
            results.push({ category: cat.title, tool: tool.name });
          }
        });
      });
      setSearchResults(results.slice(0, 8)); // Show top 8 results
    } else {
      setSearchResults([]);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg font-bold text-xl">
                MS
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">MySEO Tools</span>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white sm:hidden">MySEO</span>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative" ref={searchContainerRef}>
            <div className="relative w-full text-gray-500 dark:text-gray-400 focus-within:text-indigo-600 dark:focus-within:text-indigo-400">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-slate-700 rounded-full leading-5 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={handleSearch}
              />
              {/* Desktop Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute z-50 mt-2 w-full bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 max-h-80 overflow-auto">
                   {searchResults.map((res, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="flex flex-col px-4 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700 border-b border-gray-50 dark:border-slate-700 last:border-0 transition-colors"
                      >
                         <span className="text-sm font-medium text-gray-900 dark:text-white">{res.tool}</span>
                         <span className="text-xs text-indigo-500 dark:text-indigo-400">{res.category}</span>
                      </a>
                   ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Blog</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Deals</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Services</a>
            
            {/* Guides Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors focus:outline-none"
              >
                Guides <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right border border-gray-100 dark:border-slate-700">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300">About Us</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300">Privacy Policy</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300">Disclaimer</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300">Terms of Services</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300">Report Tools</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300">Contact Us</a>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Dropdown */}
            <div className="relative group ml-1 border-l pl-4 border-gray-200 dark:border-slate-700">
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none">
                <Globe className="w-5 h-5 mr-1" />
                <span className="text-sm">EN</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right grid grid-cols-1 overflow-hidden border border-gray-100 dark:border-slate-700">
                {LANGUAGES.map((lang) => (
                  <a key={lang} href="#" className="block px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300 text-left">
                    {lang}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center lg:hidden gap-2">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
             >
                {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
             </button>
             <button
              onClick={toggleSearch}
              className={`p-2 rounded-md transition-colors focus:outline-none ${isSearchOpen ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
             >
               <span className="sr-only">Search</span>
               <Search className="h-6 w-6" />
             </button>
             <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors focus:outline-none ${isOpen ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
           <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md leading-5 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={handleSearch}
                autoFocus
              />
              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div className="absolute z-50 mt-1 w-full bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto border border-gray-100 dark:border-slate-700">
                   {searchResults.map((res, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="block px-4 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700 border-b border-gray-50 dark:border-slate-700 last:border-0"
                      >
                         <div className="text-sm font-medium text-gray-900 dark:text-white">{res.tool}</div>
                         <div className="text-xs text-gray-500 dark:text-gray-400">{res.category}</div>
                      </a>
                   ))}
                </div>
              )}
           </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Blog</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Deals</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Our Services</a>
          
          <button 
            onClick={() => toggleDropdown('guides')}
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800 focus:outline-none"
          >
            Guides <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'guides' ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`${activeDropdown === 'guides' ? 'block' : 'hidden'} pl-4 space-y-1`}>
             <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">About Us</a>
             <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Privacy Policy</a>
             <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Disclaimer</a>
             <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Terms</a>
             <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800">Contact</a>
          </div>

          <div className="border-t border-gray-200 dark:border-slate-800 mt-2 pt-2">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Language</p>
            <div className="grid grid-cols-2 gap-2 px-3 pb-2">
              {LANGUAGES.slice(0, 6).map((lang) => (
                <a key={lang} href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">{lang}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;