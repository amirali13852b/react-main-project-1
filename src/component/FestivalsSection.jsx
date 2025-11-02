import { useState, useEffect } from 'react'; 
import EventCard from './EventCard';
import Cardsinfo from './Cardsinfo';
import Chips from './Chips';

const response = [
  { id: 1, title: 'La Tomatina', category: 'Cultural', imageSrc: '/img/tomatina.svg', date: 'March 13, 2025', location: 'Herne', price: '$800.65', daysLeft: '50 days left' },
  { id: 2, title: 'Aquacolor', category: 'Dance', imageSrc: '/img/aquacolor.svg', date: 'August 7, 2025', location: 'Tampa (FL)', price: '$928.41', daysLeft: '30 days left' },
  { id: 3, title: 'Holiwave', category: 'Cultural', imageSrc: '/img/holiwave.svg', date: 'May 20, 2025', location: 'Omsk', price: '$943.65', daysLeft: '70 days left' },
  { id: 4, title: 'Cultura Viva', category: 'Music', imageSrc: '/img/cultura-viva.svg', date: 'October 25, 2025', location: 'Gelsenkirchen', price: '$630.44', daysLeft: '45 days left' },
];

const festivalsChips = [
  { title: 'All' }, { title: 'Dance' }, { title: 'Music' }, { title: 'Cultural' }, { title: 'Food' },,
];

const FestivalsSection = () => {
  const [festivalsData, setFestivalsData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Axios get
    setFestivalsData(response)
  }, []); 

  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col gap-7">
        
        <Cardsinfo title="Festivals" />

        <div className='flex flex-wrap gap-2'>
          {festivalsChips.map((item) => (
            <Chips
              key={item.title}
              title={item.title}
              isActive={selectedCategory === item.title}
              onClick={() => setSelectedCategory(item.title)} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {festivalsData.filter(
            festival => festival.category == selectedCategory 
            || selectedCategory == "All"
          ).map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              imageSrc={event.imageSrc}
              date={event.date}
              location={event.location}
              price={event.price}
              daysLeft={event.daysLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalsSection;