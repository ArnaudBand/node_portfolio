import React from 'react';

const About = () => (
  <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About Me:
        </p>
      </div>

      <p className="text-xl mt-20">
        I am a full stack web developer with a passion for creating beautiful
        and functional websites. I have a background in graphic design and
        marketing, which has given me a unique perspective on how to create
        websites that are both visually appealing and easy to use.
      </p>

      <br />

      <p className="text-xl">
        I am currently working as a freelance web developer, and am always
        looking for new projects to work on. If you have a project that you
        would like to discuss, please feel free to contact me.
      </p>
    </div>
  </div>
);

export default About;
