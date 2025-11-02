const EventCard = ({ imageSrc, title, date, location, price, daysLeft }) => {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
        <h3 className="text-xl font-bold text-white hover:text-purple-400 transform transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-1">{date}</p>
        <p className="text-sm text-gray-300">{location}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-lg font-bold text-[#C14FE6] hover:text-white">{price}</p>
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{daysLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;