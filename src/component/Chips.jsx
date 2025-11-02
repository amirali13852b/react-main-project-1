const Chips = ({ title, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border cursor-pointer ${
                isActive
                    ? 'bg-[#1B1B1B] text-[#C14FE6] border-[#C14FE6]' 
                    : 'bg-[#1B1B1B] text-gray-300 border-gray-700 hover:bg-[#303030] hover:text-white' 
            }`}
        >
            {title}
        </button>
    );
};

export default Chips;