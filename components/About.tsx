import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-16 sm:py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About MySEO Tools
          </p>
          <div className="mt-6 max-w-4xl mx-auto text-lg text-gray-500 dark:text-gray-400 space-y-6">
            <p>
              MySEO Tools offers a comprehensive suite of 100% free online tools designed for SEO experts, YouTubers, webmasters, students, and professional writers. We believe that high-quality digital analysis and web management utilities should be accessible to everyone, regardless of their budget.
            </p>
            <p>
              Whether you need to perform deep keyword research, check website technical parameters, optimize your YouTube channel for better reach, or simply convert units for a project, our platform has you covered. We constantly update our algorithms to ensure you get the most accurate and up-to-date results.
            </p>
            <p>
              Our purpose is simple: to streamline your online workflow. By aggregating over 170+ utilities in one mobile-friendly, lightning-fast interface, we save you time so you can focus on creating great content and building amazing websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;