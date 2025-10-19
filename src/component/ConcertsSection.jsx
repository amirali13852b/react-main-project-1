import EventCard from './EventCard';
import Cardsinfo from './Cardsinfo'; 
import Chips from './Chips'; 

const concertsData = [
  { id: 1, title: 'Nora Bayes', imageSrc: '/img/nora bayes.svg', date: 'May 6, 2025', location: 'Hagen', price: '$779.58', daysLeft: '5 days left' },
  { id: 2, title: 'Tony Bennett', imageSrc: '/img/tony bennet.svg', date: 'August 2, 2025', location: 'Salem, OR', price: '$589.99', daysLeft: '10 days left' },
  { id: 3, title: 'Joan Baez', imageSrc: '/img/joan baez.svg', date: 'December 29, 2025', location: 'Naltchik', price: '$406.27', daysLeft: '15 days left' },
  { id: 4, title: 'Devendra Banhart', imageSrc: '/img/devendra banhart.svg', date: 'February 9, 2025', location: 'Sterlitamak', price: '$275.43', daysLeft: '20 days left' },
];

const concertChips = [
  { title: 'All' }, { title: 'Pop' }, { title: 'Rock' }, { title: 'Jazz & Blues' },
  { title: 'Hip-Hop & Rap' }, { title: 'Alternative' }, { title: 'Classical' }, { title: 'Opera' }, { title: 'Country' },
];

const ConcertsSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col gap-7">
        
        <Cardsinfo title="Shows"/>
    
        <div className='flex gap-2'>
          {concertChips.map((item, index) => (
            <Chips
              key={index}
              title={item.title}
              isActive={item.title === 'All'} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {concertsData.map((event) => (
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

export default ConcertsSection;