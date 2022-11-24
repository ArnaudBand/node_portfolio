import React from 'react';
import options from '../contents/content_options';

const Portfolio = () => (
  <div
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {options.portfolios.map(({
          id, src, live, github,
        }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={live} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </a>
              <a href={github} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
