// components/Footer.js
import React from 'react';
import logo from '../img/logo.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/inestagram.svg';
import linkedin from '../img/linkdin.svg';
import youtube from '../img/youtube.svg';
import telegram from '../img/telegram.svg';

const Footer = () => {
  const navItems = ['Home', 'Contact us', 'About us', 'Privacy Policy'];
  const socialIcons = [
    { src: facebook, alt: 'Facebook' },
    { src: instagram, alt: 'Instagram' },
    { src: linkedin, alt: 'LinkedIn' },
    { src: youtube, alt: 'YouTube' },
    { src: telegram, alt: 'Telegram' }
  ];

  return (
    <footer className="">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo */}
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Evenjo Logo" />
          </div>

          {/* Middle - Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-[#999999] transition-colors duration-300 hover:text-[#C14FE6]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side - Social Icons */}
          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className="flex items-center justify-center cursor-pointer">
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm flex justify-center mt-3 mb-5">Copyright © Evenjo</p>
      </div>
    </footer>
  );
};

export default Footer;