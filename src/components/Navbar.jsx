import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import routes from '../routes';
import options from '../content_options';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <Link to="/" className="text-xl font-signature ml-2 hover:text-2xl">{options.title}</Link>
      </div>

      <ul className="hidden md:flex">
        {routes.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isActive ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {isActive && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {routes.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setIsActive(!isActive)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
