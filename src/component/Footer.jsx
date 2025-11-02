const Footer = () => {
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'Contact us', href: '#' },
    { text: 'About us', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ];


  const socialIcons = [
    { src: '/img/facebook.svg', alt: 'Facebook' },
    { src: '/img/inestagram.svg', alt: 'Instagram' },
    { src: '/img/linkdin.svg', alt: 'LinkedIn' },
    { src: '/img/youtube.svg', alt: 'YouTube' },
    { src: '/img/telegram.svg', alt: 'Telegram' },
  ];

  return (
    <footer className="">
      <div className="container mx-auto px-6">
      
        <div className="flex flex-col items-center">
        
          <div className="mb-6">
            <img src="/img/logo.svg" alt="Evenjo Logo" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{ color: '#999999', transition: 'color 0.3s', cursor: 'pointer' }}
                onMouseOver={(e) => (e.target.style.color = '#C14FE6')}
                onMouseOut={(e) => (e.target.style.color = '#999999')}
              >
                {link.text}
              </a>
            ))}
          </nav>

       
          <div className="flex space-x-4 mb-6">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className="flex items-center justify-center cursor-pointer">
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm flex justify-center">Copyright © Evenjo</p>
      </div>
    </footer>
  );
};

export default Footer;