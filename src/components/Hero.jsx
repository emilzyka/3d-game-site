import React, { useRef } from 'react';

export const Hero = () => {
  return (
    <div className='flex justify-center items-center m-10'>
      <div className='flex flex-col'>
        <h2 className='text-4xl uppercase font-bold text-white'>Welcome.</h2>
        <h2 className='text-4xl  text-blue-400 uppercase font-bold'>
          an adventure awaits you
        </h2>
      </div>
    </div>
  );
};
