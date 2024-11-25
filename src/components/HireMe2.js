import React from 'react';
import CText from '../assets/CircularText.png';

// eslint-disable-next-line import/prefer-default-export
export const HireMe2 = () => (
  <div
    className="fixed left-2 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute"
  >
    <div className="HireMe max-w-sm h-full flex items-center justify-center md:w-24">
      <img
        src={CText}
        alt="Circular Text"
        height={160}
        width={110}
        className="fill-dark dark:fill-light animate-spin-slow duration-200"
      />

      <a
        href="/contact"
        className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border border-solid
bg-dark rounded-full text-white text-[10px] w-12 h-12 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
dark:hover:text-light dark:hover:border-light
"
      >
        Let&apos;s Go
      </a>
    </div>
  </div>
);
