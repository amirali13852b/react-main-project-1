import React from 'react'

function Header() {
  return (
    <header className="absolute z-20 w-full">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        <img src="/img/logo.svg" alt="Logo" />

        <nav className="space-x-10 text-[#999999]">
          <a href="#" className="text-white hover:text-purple-400">Home</a>
          <a href="#" className="hover:text-purple-400">Shows</a>
          <a href="#" className="hover:text-purple-400">Concerts</a>
          <a href="#" className="hover:text-purple-400">Sports</a>
          <a href="#" className="hover:text-purple-400">Festivals</a>
        </nav>

        <div className="flex items-center space-x-5">
          <button className="text-white">Eng</button>
          <button className="bg-[#C14FE6] hover:bg-purple-600 text-white px-4 py-2 rounded-lg">Signup</button>
        </div>
      </div>
    </header>
  )
}

export default Header
