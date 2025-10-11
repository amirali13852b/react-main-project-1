// components/Hero.js
import React from 'react';
import headerBg from '../img/headerbg.svg';
import musicNote from '../img/Music Note.svg';
import masks from '../img/Masks.svg';
import dumbbell from '../img/Dumbbell Large.svg';
import ferrisWheel from '../img/Ferris Wheel.svg';
import widget from '../img/Widget 2.svg';
import mapPoint from '../img/Map Point.svg';
import calendar from '../img/Calendar.svg';
import searchIcon from '../img/zarebn.svg';
import bookmark from '../img/Bookmark.svg';
import ticket from '../img/Ticket.svg';
import confetti from '../img/Confetti.svg';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${headerBg})`}}>
      <div className="container mx-auto px-6 flex flex-col items-center text-center text-white pt-50">
        <h1 className="text-4xl font-bold mb-4">What <span className="text-[#C14FE6]">Concert</span> would you like?</h1>
        <p className="text-lg text-gray-300 mb-6">More than 100 concerts are available worldwide</p>

        {/* Search and Filter Section */}
        <div className="bg-[#1B1B1B] rounded-lg p-7 w-full max-w-4xl border border-[#303030] mt-14">
          {/* Top Navigation Section */}
          <div className="flex items-center justify-between text-white pb-12 border-b border-gray-700/50">
            <div className="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
              <img src={musicNote} alt="" className="w-5 h-5" />
              <a href="" className="ml-1">Concerts</a>
            </div>
            <div className="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
              <img src={masks} alt="" className="w-5 h-5" />
              <a href="" className="ml-1">Shows</a>
            </div>
            <div className="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
              <img src={dumbbell} alt="" className="w-5 h-5" />
              <a href="" className="ml-1">Sports</a>
            </div>
            <div className="flex items-center space-x-1 hover:text-purple-400 cursor-pointer">
              <img src={ferrisWheel} alt="" className="w-5 h-5" />
              <a href="" className="ml-1">Festivals</a>
            </div>
          </div>

          {/* Bottom Filter Section */}
          <div className="flex items-center justify-between text-white pt-8">
            <button className="flex items-center space-x-2 hover:text-purple-400 cursor-pointer mr-35">
              <img src={widget} alt="" />
              <div className="text-left">
                <p>What</p>
                <p className="text-gray-400 text-sm">Event Type</p>
              </div>
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-400 cursor-pointer border-l border-gray-700/50 pl-5">
              <img src={mapPoint} alt="" />
              <div className="text-left">
                <p>Where</p>
                <p className="text-gray-400 text-sm">Location</p>
              </div>
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-400 cursor-pointer">
              <img src={calendar} alt="" />
              <div className="text-left">
                <p>When</p>
                <p className="text-gray-400 text-sm">Date</p>
              </div>
            </button>
            <button className="flex items-center space-x-2 hover:bg-purple-950 cursor-pointer bg-[#C14FE6] p-2 rounded-lg">
              <img src={searchIcon} alt="" className="flex justify-center" />
            </button>
          </div>
        </div>

        {/* under Search and Filter Section */}
        <div className="mt-4 flex justify-between space-x-8">
          <a href="" className="flex items-center justify-center space-x-2 text-white hover:text-purple-400">
            <img src={bookmark} alt="" />
            <span>Book Anytime</span>
          </a>
          <a href="" className="flex items-center justify-center space-x-2 text-white hover:text-purple-400">
            <img src={ticket} alt="" />
            <span>Refundable Ticket</span>
          </a>
          <a href="" className="flex items-center justify-center space-x-2 text-white hover:text-purple-400">
            <img src={confetti} alt="" />
            <span>Book Anytime</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;