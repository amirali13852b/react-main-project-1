const Search = () => (
    <div class="container mx-auto px-6 flex flex-col items-center text-center text-white pt-50">
            <h1 class="text-4xl font-bold mb-4">What <span class="text-[#C14FE6]">Concert</span> would you like?</h1>
            <p class="text-lg text-gray-300 mb-6">More than 100 concerts are available worldwide</p>


            <div class="bg-[#1B1B1B] rounded-lg p-7 w-full max-w-4xl border border-[#303030] mt-14">

                <div class="flex items-center justify-between text-white pb-12 border-b border-gray-700/50">
                    <div class="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
                        <img src="/img/Music Note.svg" alt="" class="w-5 h-5"/>
                        <a href="" class="ml-1">Concerts</a>
                    </div>
                    <div class="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
                        <img src="/img/Masks.svg" alt="" class="w-5 h-5"/>
                        <a href="" class="ml-1">Shows</a>
                    </div>
                    <div class="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
                        <img src="/img/Dumbbell Large.svg" alt="" class="w-5 h-5"/>
                        <a href="" class="ml-1">Sports</a>
                    </div>
                    <div class="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
                        <img src="/img/Ferris Wheel.svg" alt="" class="w-5 h-5"/>
                        <a href="" class="ml-1">Festivals</a>
                    </div>
                </div>

              
                <div class="flex items-center justify-between text-white pt-8">
                    <button class="flex items-center space-x-2 hover:text-purple-400 cursor-pointer mr-35">
                        <img src="/img/Widget 2.svg" alt=""/>
                        <div class="text-left">
                            <p>What</p>
                            <p class="text-gray-400 text-sm">Event Type</p>
                        </div>
                    </button>
                    <button
                        class="flex items-center space-x-2 hover:text-purple-400 cursor-pointer border-l border-gray-700/50 pl-5">
                        <img src="/img/Map Point.svg" alt=""/>
                        <div class="text-left">
                            <p>Where</p>
                            <p class="text-gray-400 text-sm">Location</p>
                        </div>
                    </button>
                    <button class="flex items-center space-x-2 hover:text-purple-400 cursor-pointer ">
                        <img src="/img/Calendar.svg" alt=""/>
                        <div class="text-left">
                            <p>When</p>
                            <p class="text-gray-400 text-sm">Date</p>
                        </div>
                    </button>
                    <button
                        class="flex items-center space-x-2 hover:bg-purple-950 cursor-pointer bg-[#C14FE6] p-2 rounded-lg">
                        <img src="/img/zarebn.svg" alt="" class="flex justify-center"/>
                    </button>
                </div>
            </div>

            <div class="mt-4 flex justify-between space-x-8">
                <a href="" class="flex items-center justify-center space-x-2 text-white hover:text-purple-400">
                    <img src="/img/Bookmark.svg" alt=""/>
                    <span>Book Anytime</span>
                </a>
                <a href="" class="flex items-center justify-center space-x-2 text-white hover:text-purple-400">
                    <img src="/img/Ticket.svg" alt=""/>
                    <span>Refundable Ticket</span>
                </a>
                <a href="" class="flex items-center justify-center space-x-2 text-white hover:text-purple-400">
                    <img src="/img/Confetti.svg" alt=""/>
                    <span>Book Anytime</span>
                </a>
            </div>
        </div>
)

export default Search