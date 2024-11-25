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
        I am a full-stack web developer with a passion for crafting visually
        stunning and highly functional websites. With a background in graphic
        design and marketing, I bring a unique perspective to web development,
        creating user-friendly websites that balance aesthetics and usability
        seamlessly.
      </p>

      <br />

      <p className="text-xl">
        Currently working as a freelance web developer, I am always excited to
        collaborate on new projects. If you have a vision you&apos;d like to bring to
        life, don&apos;t hesitate to reach out—I&apos;d love to discuss how we can make it
        happen!
      </p>
    </div>
  </div>
);

export default About;
