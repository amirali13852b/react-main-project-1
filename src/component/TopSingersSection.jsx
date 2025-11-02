import SingerCard from './SingerCard';

const singersData = [
  { id: 1, name: 'Drake', imageSrc: '/img/drake.svg', date: '20 June', location: 'Toronto' },
  { id: 2, name: 'Adele', imageSrc: '/img/drake.svg', date: '15 July', location: 'London' },
  { id: 3, name: 'The Weeknd', imageSrc: '/img/drake.svg', date: '5 August', location: 'Los Angeles' },
  { id: 4, name: 'Billie Eilish', imageSrc: '/img/drake.svg', date: '22 September', location: 'New York' },
  { id: 5, name: 'Ed Sheeran', imageSrc: '/img/drake.svg', date: '1 October', location: 'Manchester' },
  { id: 6, name: 'Taylor Swift', imageSrc: '/img/drake.svg', date: '10 November', location: 'Nashville' },
  { id: 7, name: 'Bruno Mars', imageSrc: '/img/drake.svg', date: '30 December', location: 'Honolulu' },
  { id: 8, name: 'Ariana Grande', imageSrc: '/img/drake.svg', date: '18 January', location: 'Boca Raton' },
];

const TopSingersSection = () => {

  const firstRowSingers = singersData.slice(0, 4);
  const secondRowSingers = singersData.slice(4, 8);

  return (
    <section className="text-white mt-13 mb-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Top singers</h2>
            <p className="text-sm text-gray-400">
              Find the singers you're looking for quickly.{' '}
              <span className="text-[#E4AFF8]">You can see more.</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {firstRowSingers.map((singer) => (
            <SingerCard
              key={singer.id}
              imageSrc={singer.imageSrc}
              name={singer.name}
              date={singer.date}
              location={singer.location}
            />
          ))}
        </div>
        <div className="flex justify-center space-x-6 mt-3">
          {secondRowSingers.map((singer) => (
            <SingerCard
              key={singer.id}
              imageSrc={singer.imageSrc}
              name={singer.name}
              date={singer.date}
              location={singer.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSingersSection;