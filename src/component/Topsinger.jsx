// components/TopSingers.js
import React from 'react';
import drake from '../img/drake.svg';

const TopSingers = () => {
  const singers = Array(8).fill({
    name: 'Drake',
    date: '20 June',
    location: 'Toronto',
    image: drake
  });

  return (
    <section className="text-white mt-13 mb-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Top singers</h2>
            <p className="text-sm text-gray-400">
              Find the singers you're looking for quickly. <span className="text-[#E4AFF8]">You can see more.</span>
            </p>
          </div>
        </div>

        {/* Singers Grid - Top Row */}
        <div className="flex justify-center space-x-4">
          {singers.slice(0, 4).map((singer, index) => (
            <div
              key={index}
              className="flex items-center pr-37 bg-[#1B1B1B] text-gray-300 rounded-lg font-medium transition-all duration-300 hover:bg-[#303030] hover:text-white border border-gray-700 hover:border-[#E4AFF8] cursor-pointer"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                <img src={singer.image} alt={singer.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white group-hover:text-[#E4AFF8] transition-colors duration-300">
                  {singer.name}
                </h3>
                <p className="text-xs text-gray-400">{singer.date}</p>
                <p className="text-xs text-gray-400">{singer.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Singers Grid - Bottom Row */}
        <div className="flex justify-center space-x-6 mt-3">
          {singers.slice(4, 8).map((singer, index) => (
            <div
              key={index + 4}
              className="flex items-center pr-37 bg-[#1B1B1B] text-gray-300 rounded-lg font-medium transition-all duration-300 hover:bg-[#303030] hover:text-white border border-gray-700 hover:border-[#E4AFF8] cursor-pointer"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                <img src={singer.image} alt={singer.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white group-hover:text-[#E4AFF8] transition-colors duration-300">
                  {singer.name}
                </h3>
                <p className="text-xs text-gray-400">{singer.date}</p>
                <p className="text-xs text-gray-400">{singer.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSingers;