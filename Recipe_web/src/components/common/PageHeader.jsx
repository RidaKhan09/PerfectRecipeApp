import React from 'react';
import bgImage from '../../assets/bg.jpg'; // Adjust the path if needed

const PageHeader = ({ title }) => {
  return (
    <div className='pt-18'>
    <div
      className="w-full pt-20 h-50 sm:h-64 flex items-center justify-center text-white  sm:text-5xl font-bold"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     <h3 style={{ color: '#C46C5F' }}>{title}</h3>
    </div></div>
  );
};

export default PageHeader;
