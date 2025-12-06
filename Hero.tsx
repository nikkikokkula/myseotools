import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTools = () => {
    const element = document.getElementById('tools-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-slate-900 sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32 transition-colors duration-200">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4">
                 <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                 100% Free Forever
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Premium Quality</span>{' '}
                <span className="block text-indigo-600 dark:text-indigo-400">Free SEO Tools</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Free online SEO, Text, Image, YouTube, Web Management, Web Development, Converter, and Calculator Tools, and more. Boost your productivity today.
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                  <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" /> No Registration
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" /> Instant Access
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" /> 24/7 Availability
                  </span>
              </div>

              <div className="mt-8 sm:mt-12 flex justify-center">
                <div className="rounded-md shadow">
                  <button
                    onClick={scrollToTools}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 md:py-4 md:text-lg transition-all transform hover:scale-105"
                  >
                    Browse Tools
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;