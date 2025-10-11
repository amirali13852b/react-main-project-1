// components/BigPictures.js
import React from 'react';
import refundable from '../img/bigs/refundble.svg';
import smartDeals from '../img/bigs/smart deals.svg';
import bookAnytime from '../img/bigs/book anytime.svg';

const BigPictures = () => {
  return (
    <section className="flex justify-center space-x-3 mt-32">
      <div className="flex flex-col space-y-4">
        <img 
          src={refundable} 
          alt="Refundable" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg cursor-pointer"
        />
        <img 
          src={smartDeals} 
          alt="Smart Deals" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg cursor-pointer"
        />
      </div>
      <div>
        <img 
          src={bookAnytime} 
          alt="Book Anytime" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg cursor-pointer"
        />
      </div>
    </section>
  );
};

export default BigPictures;