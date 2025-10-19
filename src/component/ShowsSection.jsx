import EventCard from './EventCard'; 
import Cardsinfo from './Cardsinfo'; 
import Chips from './Chips'; 

const showsData = [
  { id: 1, title: "Slave's Snow", imageSrc: '/img/slaves snow.svg', date: 'March 6, 2025', location: 'Chelyabinsk', price: '$473.85', daysLeft: '30 days left' },
  { id: 2, title: 'Flying Trapeze', imageSrc: '/img/flying trapeze.svg', date: 'October 31, 2025', location: 'Córdoba', price: '$767.50', daysLeft: '60 days left' },
  { id: 3, title: 'Amaluna', imageSrc: '/img/amaluna.svg', date: 'August 24, 2025', location: 'Bahía Blanca', price: '$576.28', daysLeft: '45 days left' },
  { id: 4, title: 'Fire of Anatolia', imageSrc: '/img/fire of anatolia.svg', date: 'November 7, 2025', location: 'La Plata', price: '$328.85', daysLeft: '55 days left' },
];


const showsChips = [
  { title: 'All' }, { title: 'Theater' }, { title: 'Musical' }, { title: 'Drama' },
  { title: 'Comedy' }, { title: 'Ballet' }, { title: 'Opera' }, { title: 'Circus' },
];

const ShowsSection = () => {
  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col gap-7">
   
        <Cardsinfo title="Shows" />

        <div className='flex flex-wrap gap-2'>
          {showsChips.map((item, index) => (
            <Chips
              key={index}
              title={item.title}
              isActive={item.title === 'All'} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {showsData.map((event) => (
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

export default ShowsSection;