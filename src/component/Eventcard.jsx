// components/EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer">
      <img src={`/img/${event.image}`} alt={event.name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
        <h3 className="text-xl font-bold text-white hover:text-purple-400 transform transition-all duration-300">
          {event.name}
        </h3>
        <p className="text-sm text-gray-300 mt-1">{event.date}</p>
        <p className="text-sm text-gray-300">{event.location}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-lg font-bold text-[#C14FE6] hover:text-white">{event.price}</p>
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{event.daysLeft} days left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;