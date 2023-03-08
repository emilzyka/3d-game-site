import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const Dropdown = () => {
  const [isOpen, openSet] = useState(false);
  const MenuOptions = ['KEY FEATURES', 'MEDIA', 'NEWS', 'FAQ', 'PURCHASE'];
  //TODO: fix navigation in dropdown menu

  return (
    <div className='dropdown'>
      <button
        className='text-white duration-300 font-medium px-4 py-2 text-center inline-flex items-center'
        onClick={() => openSet(!isOpen)}>
        <AiOutlineMenu className='text-2xl cursor-pointer' />
      </button>
      <div
        id='dropdown'
        onMouseLeave={() => openSet(!isOpen)}
        className={`absolute z-10 w-44 rounded-lg divide-y ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <ul className='z-10 w-44 rounded-lg '>
          {MenuOptions.map((string, key) => (
            <li
              key={key}
              className='text-white block text-left w-44 py-2 px-4 bg-slate-900 hover:bg-slate-700 hover:text-amber-400'>
              {string}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
