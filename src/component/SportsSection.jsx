import { useState, useEffect } from 'react'; 
import EventCard from './EventCard';
import Cardsinfo from './Cardsinfo';
import Chips from './Chips';


const sportsData = [
  { id: 1, title: 'Football', category: 'Team Sport', imageSrc: '/img/football.svg', date: 'Jul 14, 2025', location: 'Los Angeles', price: '$106.58', daysLeft: '25 days left' },
  { id: 2, title: 'Hockey', category: 'Ice Sport', imageSrc: '/img/hockey.svg', date: 'May 12, 2025', location: 'Morón', price: '$219.78', daysLeft: '40 days left' },
  { id: 3, title: 'Karting', category: 'Motorsport', imageSrc: '/img/karting.svg', date: 'Dec 19, 2025', location: 'Hampton', price: '$948.55', daysLeft: '35 days left' },
  { id: 4, title: 'Basketball', category: 'Team Sport', imageSrc: '/img/basketball.svg', date: 'May 9, 2025', location: 'Ryazan', price: '$782.01', daysLeft: '60 days left' },
];


const sportsChips = [
  { title: 'All' }, { title: 'Team Sport' }, { title: 'Ice Sport' }, { title: 'Motorsport' },
];

const SportsSection = () => {

  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
   
    setSports(sportsData);
   
    setLoading(false);
  }, []); 

  const filteredSports = selectedCategory === 'All'
    ? sports
    : sports.filter(sport => sport.category === selectedCategory);

  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col gap-7">

        <Cardsinfo title="Sports" />

        <div className='flex flex-wrap gap-2'>
          {sportsChips.map((item) => (
            <Chips
              key={item.title}
              title={item.title}
              isActive={selectedCategory === item.title} 
              onClick={() => setSelectedCategory(item.title)} 
            />
          ))}
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSports.map((event) => (
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

export default SportsSection;