import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import options from '../contents/content_options';

const Home = () => (
  <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <p className="text-xl sm:text-2xl font-bold text-white">
          {options.description}
        </p>

        <p className="text-4xl text-yellow-400 py-4 max-w-md">
          <Typewriter
            options={{
              strings: [
                options.animated.first,
                options.animated.second,
                options.animated.third,
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </p>
        <div>
          <Link
            to="/Portfolio"
            className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>

      <div>
        <img
          src={options.image}
          alt="my profile"
          className="rounded-full mx-auto w-2/3 md:w-30"
        />
      </div>
    </div>
  </div>
);

export default Home;
