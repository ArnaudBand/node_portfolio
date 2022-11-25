import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import { DiGithubFull } from 'react-icons/di';
import options from '../contents/content_options';

const Portfolio = () => (
  <div className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-20">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl py-11 font-bold inline underline underline-offset-8 border-gray-500">
          Portfolio
        </p>
        <p className="py-5">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {options.portfolios.map(({
          id, src, live, github,
        }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt="portfolio"
              className="rounded-md duration-200 hover:scale-105 h-48"
            />
            <div className="flex items-center justify-center">
              <a href={live} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <FcGlobe className="text-2xl" />
              </a>
              <a href={github} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <DiGithubFull className="text-4xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
