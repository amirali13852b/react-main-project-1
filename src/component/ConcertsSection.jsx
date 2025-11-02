import { useState, useEffect } from 'react';
import EventCard from './EventCard';
import Cardsinfo from './Cardsinfo'; 
import Chips from './Chips'; 

const concertChips = [
  { title: 'All' }, { title: 'Pop' }, { title: 'Rock' }, { title: 'Jazz & Blues' },
  { title: 'Hip-Hop & Rap' }, { title: 'Alternative' }, { title: 'Classical' }, { title: 'Opera' }, { title: 'Country' }, { title: 'Folk' }
];
   const mockApiData = [
      { id: 1, title: 'Nora Bayes', category: 'Jazz & Blues', imageSrc: '/img/nora bayes.svg', date: 'May 6, 2025', location: 'Hagen', price: '$779.58', daysLeft: '5 days left' },
      { id: 2, title: 'Tony Bennett', category: 'Jazz & Blues', imageSrc: '/img/tony bennet.svg', date: 'August 2, 2025', location: 'Salem, OR', price: '$589.99', daysLeft: '10 days left' },
      { id: 3, title: 'Joan Baez', category: 'Folk', imageSrc: '/img/joan baez.svg', date: 'December 29, 2025', location: 'Naltchik', price: '$406.27', daysLeft: '15 days left' },
      { id: 4, title: 'Devendra Banhart', category: 'Alternative', imageSrc: '/img/devendra banhart.svg', date: 'February 9, 2025', location: 'Sterlitamak', price: '$275.43', daysLeft: '20 days left' },
    ];

const ConcertsSection = () => {
  const [concerts, setConcerts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
 

    setConcerts(mockApiData);
    setLoading(false);

  }, []);

  const filteredConcerts = selectedCategory === 'All'
    ? concerts
    : concerts.filter(concert => concert.category === selectedCategory);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col gap-7">
        <Cardsinfo title="Shows"/>
        <div className='flex flex-wrap gap-2'>
          {concertChips.map((item) => (
            <Chips
              key={item.title}
              title={item.title}
              isActive={selectedCategory === item.title}
              onClick={() => setSelectedCategory(item.title)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredConcerts.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcertsSection;