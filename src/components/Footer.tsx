
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-green text-white py-8 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">RupeeCalc</h3>
            <p className="text-sm text-mint-green mb-4">
              Your trusted companion for all financial calculations.
            </p>
            <p className="text-xs text-white/70">
              © {currentYear} RupeeCalc. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-mint-green transition-colors">Simple Interest</a></li>
              <li><a href="#" className="hover:text-mint-green transition-colors">Compound Interest</a></li>
              <li><a href="#" className="hover:text-mint-green transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-mint-green transition-colors">SIP Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-mint-green transition-colors">Financial Terms</a></li>
              <li><a href="#" className="hover:text-mint-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-mint-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-mint-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
