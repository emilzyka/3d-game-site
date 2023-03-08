import React from 'react';
import { SiNintendogamecube } from 'react-icons/si';
import { Dropdown } from './Dropdown';

export const Navbar = () => {
  const MenuOptions = ['KEY FEATURES', 'MEDIA', 'NEWS', 'FAQ', 'PURCHASE'];
  //TODO: fix navigation in dropdown menu

  return (
    <nav className='flex sm:justify-start justify-center py-4 bg-slate-900 sticky top-0 z-50'>
      <div className='flex items-center gap-10 sm:gap-2'>
        <SiNintendogamecube
          className='text-blue-500 w-9 h-9 object-contain sm:ml-5 hover:scale-110'
          onClick={() => window.scrollTo(0, 0)}
        />
        {MenuOptions.map((string, key) => (
          <p
            key={key}
            className='text-white sm:hidden hover:text-amber-400 hover:cursor-pointer hover:scale-105'>
            {string}
          </p>
        ))}

        {/* Mobile friendly navigation bar*/}
        <div className='smm:hidden'>
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};
