import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ToolCategoryCard from './components/ToolCategoryCard';
import About from './components/About';
import Footer from './components/Footer';
import { TOOL_CATEGORIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        
        {/* Tools Section */}
        <section id="tools-section" className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Our Collection</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Browse Tools by Category
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                Explore our wide range of free utilities designed to help you succeed online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {TOOL_CATEGORIES.map((category) => (
                <ToolCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;