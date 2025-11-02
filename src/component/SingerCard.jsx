const SingerCard = ({ imageSrc, name, date, location }) => {
  return (
    <div className="flex items-center pr-8 bg-[#1B1B1B] text-gray-300 rounded-lg font-medium transition-all duration-300 hover:bg-[#303030] hover:text-white border border-gray-700 hover:border-[#E4AFF8] cursor-pointer">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-white group-hover:text-[#E4AFF8] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-xs text-gray-400">{location}</p>
      </div>
    </div>
  );
};

export default SingerCard;