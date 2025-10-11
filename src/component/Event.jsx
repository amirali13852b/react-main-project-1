// components/EventSection.js
import React from 'react';
import EventCard from './EventCard';

const EventSection = ({ type }) => {
  // Define categories based on type
  const categories = {
    concerts: ['All', 'Pop', 'Rock', 'Jazz & Blues', 'Hip-Hop & Rap', 'Alternative', 'Classical', 'Opera', 'Country'],
    shows: ['All', 'Theater', 'Musical', 'Drama', 'Comedy', 'Ballet', 'Opera', 'Circus'],
    sports: ['All', 'Football', 'Hockey', 'Karting', 'Basketball'],
    festivals: ['All', 'Dance', 'Music', 'Cultural', 'Food']
  };

  // Define events based on type
  const events = {
    concerts: [
      { id: 1, name: 'Nora Bayes', date: 'May 6, 2025', location: 'Hagen', price: '$779.58', daysLeft: '5', image: 'nora bayes.svg' },
      { id: 2, name: 'Tony Bennett', date: 'August 2, 2025', location: 'Salem, OR', price: '$589.99', daysLeft: '10', image: 'tony bennet.svg' },
      { id: 3, name: 'Joan Baez', date: 'December 29, 2025', location: 'Naltchik', price: '$406.27', daysLeft: '15', image: 'joan baez.svg' },
      { id: 4, name: 'Devendra Banhart', date: 'February 9, 2025', location: 'Sterlitamak', price: '$275.43', daysLeft: '20', image: 'devendra banhart.svg' }
    ],
    shows: [
      { id: 1, name: 'Slave\'s Snow', date: 'March 6, 2025', location: 'Chelyabinsk', price: '$473.85', daysLeft: '30', image: 'slaves snow.svg' },
      { id: 2, name: 'Flying Trapeze', date: 'October 31, 2025', location: 'Córdoba', price: '$767.50', daysLeft: '60', image: 'flying trapeze.svg' },
      { id: 3, name: 'Amaluna', date: 'August 24, 2025', location: 'Bahía Blanca', price: '$576.28', daysLeft: '45', image: 'amaluna.svg' },
      { id: 4, name: 'Fire of Anatolia', date: 'November 7, 2025', location: 'La Plata', price: '$328.85', daysLeft: '55', image: 'fire of anatolia.svg' }
    ],
    sports: [
      { id: 1, name: 'Football', date: 'Jul 14, 2025', location: 'Los Angeles', price: '$106.58', daysLeft: '25', image: 'football.svg' },
      { id: 2, name: 'Hockey', date: 'May 12, 2025', location: 'Morón', price: '$219.78', daysLeft: '40', image: 'hockey.svg' },
      { id: 3, name: 'Karting', date: 'Dec 19, 2025', location: 'Hampton', price: '$948.55', daysLeft: '35', image: 'karting.svg' },
      { id: 4, name: 'Basketball', date: 'May 9, 2025', location: 'Ryazan', price: '$782.01', daysLeft: '60', image: 'basketball.svg' }
    ],
    festivals: [
      { id: 1, name: 'La Tomatina', date: 'March 13, 2025', location: 'Herne', price: '$800.65', daysLeft: '50', image: 'tomatina.svg' },
      { id: 2, name: 'Aquacolor', date: 'August 7, 2025', location: 'Tampa (FL)', price: '$928.41', daysLeft: '30', image: 'aquacolor.svg' },
      { id: 3, name: 'Holiwave', date: 'May 20, 2025', location: 'Omsk', price: '$943.65', daysLeft: '70', image: 'holiwave.svg' },
      { id: 4, name: 'Cultura Viva', date: 'October 25, 2025', location: 'Gelsenkirchen', price: '$630.44', daysLeft: '45', image: 'cultura-viva.svg' }
    ]
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* info */}
        <div className="flex justify-between mt-20 border-b border-gray-700/50 pb-6">
          <h1 className="text-2xl capitalize">{type}</h1>
          <a href="" className="hover:text-purple-400">See all</a>
        </div>
        
        {/* cards menu */}
        <div className="flex flex-wrap gap-2 mt-6 mb-8">
          {categories[type].map((category, index) => (
            <a
              key={index}
              href="#"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-[#C14FE6] text-white hover:bg-purple-600' 
                  : 'bg-[#1B1B1B] text-gray-300 hover:bg-[#303030] hover:text-white border border-gray-700'
              }`}
            >
              {category}
            </a>
          ))}
        </div>

        {/* Cards Container using Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {events[type].map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;