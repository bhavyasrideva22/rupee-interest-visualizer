
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark-green text-white py-4 shadow-md">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl md:text-2xl font-bold text-white">RupeeCalc</h1>
          <span className="bg-gold text-dark-green text-xs px-2 py-1 rounded-full font-semibold">Beta</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-mint-green transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-mint-green transition-colors">Calculators</a></li>
            <li><a href="#" className="hover:text-mint-green transition-colors">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
