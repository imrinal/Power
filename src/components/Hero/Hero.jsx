import React from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the down arrow icon
import './Hero.css';

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('Plan').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='container'>
      <div className="button">
        <button className='Plan'>Plan Now</button>
        <button className='progress'>Check Progress</button>
      </div>

      {/* Down Arrow Button */}
      <div className="scroll-down" onClick={scrollToSection}>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Hero;
