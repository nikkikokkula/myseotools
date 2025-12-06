import React from 'react';
import { ToolCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ToolCategoryCardProps {
  category: ToolCategory;
}

const ToolCategoryCard: React.FC<ToolCategoryCardProps> = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="p-6 border-b border-gray-50 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/50">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="grid grid-cols-1 gap-y-3">
          {category.tools.map((tool, idx) => (
            <a 
              key={idx}
              href="#" 
              className="group flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center space-x-3 truncate">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-indigo-500 transition-colors"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 truncate">
                  {tool.name}
                </span>
              </div>
              {tool.isNew && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                  New
                </span>
              )}
              <ArrowUpRight className="w-3 h-3 text-gray-300 dark:text-slate-600 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-700">
        <a href="#" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 uppercase tracking-wide flex items-center justify-center hover:underline">
          View All {category.title}
        </a>
      </div>
    </div>
  );
};

export default ToolCategoryCard;