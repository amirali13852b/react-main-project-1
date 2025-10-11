import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import TopSingers from './components/TopSingers';
import BigPictures from './components/BigPictures';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <EventSection type="concerts" />
      <EventSection type="shows" />
      <TopSingers />
      <EventSection type="sports" />
      <EventSection type="festivals" />
      <BigPictures />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App