const Card = () => (
    <div
        className="relative h-96 w-auto rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer">
        <img src="/img/nora bayes.svg" alt="Nora Bayes" className="w-full h-full object-cover" />
        <div classNameName="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
            <h3
                classNameName="text-xl font-bold text-white hover:text-purple-400 transform transition-all duration-300">
                Nora Bayes</h3>
            <p classNameName="text-sm text-gray-300 mt-1">May 6, 2025</p>
            <p classNameName="text-sm text-gray-300">Hagen</p>
            <div classNameName="flex justify-between items-center mt-4">
                <div>
                    <p classNameName="text-xs text-gray-400">Starting from</p>
                    <p className="text-lg font-bold text-[#C14FE6] hover:text-white">$779.58</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>5 days left</span>
                </div>
            </div>
        </div>
    </div>
)
export default Card