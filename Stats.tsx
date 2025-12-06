import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="bg-indigo-900 dark:bg-indigo-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            We are growing together
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Trusted by content creators, developers, and marketers worldwide.
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                {stat.label}
              </dt>
              <dd className="order-1 text-4xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;