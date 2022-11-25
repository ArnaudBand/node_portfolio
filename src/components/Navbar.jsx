import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import routes from '../routes';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Arnaud</h1>
      </div>

      <ul className="hidden md:flex">
        {routes.map(({ id, path, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-blue-200"
          >
            <NavLink to={path} className="hover:text-base">
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      <button type="button" className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" onClick={() => setIsActive(!isActive)}>
        {isActive ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {isActive && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {routes.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <NavLink
              onClick={() => setIsActive(!isActive)}
              to={path}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Navbar;
