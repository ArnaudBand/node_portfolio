/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { GithubIcon } from './Icon';
import Layout from './Layout';
import { HireMe2 } from './HireMe2';

import craneCloud from '../assets/image.png';
import bloom from '../assets/bloom.png';
import banzik from '../assets/banzik.png';
import bitnorm from '../assets/bitnorm.png';
import loading from '../assets/GTA6-VICE.gif';

import TransitionEffect from './TransitionEffect';

const FramerImage = motion.img;

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        rel="noreferrer"
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          className="h-48 w-full object-cover rounded-lg"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
        />

      </a>
    </>
  );
};

const Article = ({
  img, title, date, link,
}) => (
  <motion.li
    initial={{ y: 200 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    viewport={{ once: true }}
    className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
  >
    <MovingImg img={img} title={title} link={link} />
    <span
      className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start
      sm:pl-0 xs:text-sm"
    >
      {date}
    </span>
  </motion.li>
);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => (
  <article
    className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border
      border-solid border-dark bg-light p-2 shadow-2xl dark:border-light dark:bg-dark
      flex-col sm:flex-row xs:rounded-2xl xs:rounded-br-3xl xs:p-4 shadow-slate-200"
  >
    <div
      className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
        dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem]"
    />

    <a
      href={link}
      className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
    >
      <FramerImage
        src={img}
        className="h-auto w-full object-cover"
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        priority
      />
    </a>
    <div className="flex w-full sm:w-1/2 flex-col items-start justify-between p-4 lg:w-full lg:px-8">
      <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
        {type}
      </span>
      <span className="lg:text-xl text-primaryDark dark:text-primaryDark text-base font-bold">
        {tools}
      </span>
      <a href={link} className="underline-offset-2 hover:underline">
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
      </a>
      <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
        {summary}
      </p>
      <div className="mt-2 flex items-center">
        <a
          href={github}
          target="_blank"
          className="w-10"
          aria-label="github link"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href={link}
          className="ml-4 rounded-lg
            bg-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base border-2 border-solid
            bg-dark capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
          aria-label="Project link"
        >
          View Project
        </a>
      </div>
    </div>
  </article>
);

const Project = ({
  title, type, img, link, tools,
}) => (
  <article
    className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark
      xs:p-4
      "
  >
    <div
      className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
    />

    <a
      href={link}
      className="w-full cursor-pointer overflow-hidden rounded-lg"
    >
      <FramerImage
        src={img}
        alt={title}
        className="h-auto w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </a>
    <div className="mt-4 flex w-full flex-col items-start justify-between">
      <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
        {type}
      </span>
      <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
        {tools}
      </span>

      <a href={link} className="underline-offset-2 hover:underline">
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
          {title}
        </h2>
      </a>
      <div className="flex w-full items-center  justify-between">
        <a
          href={link}
          className="
             bg-dark mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
          aria-label={title}
        >
          View Project
        </a>
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main
        className="mb-16  flex w-full flex-col dark:text-light bg-black text-white"
      >
        <Layout className="py-6">
          <AnimatedText
            text="Imagination Transforms the World ✨"
            className="text-6xl! font-bold! py-8"
          />
          <div className="flex flex-col gap-24 gap-y-6 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-8">
            <div className="w-full">
              <FeaturedProject
                type="Design & Development"
                tools="React | CSS | JavaScript | Docker"
                // title="Crane Cloud - Cloud Hosting Service"
                summary="This project is a cloud hosting service that allows users to deploy their applications to the cloud."
                img={craneCloud}
                date="2023"
                link="https://cranecloud.io/"
                github="https://github.com/crane-cloud/frontend"
              />
            </div>
            <div className="w-full">
              <FeaturedProject
                type="Development"
                tools="React | Nextjs | Typescipt | Tailwind | Stream | Shadcn-ui | Clerk-auth"
                // title="Bloom - Video Conferencing App"
                summary="This project is a clone of the popular video conferencing application Zoom. It allows users to create and join meetings, chat with other participants, and share their screens."
                img={bloom}
                date="2024"
                link="https://bloom-zoom.vercel.app/"
                github="https://github.com/ArnaudBand/zoom_clone"
              />
            </div>
            <div className="w-full">
              <FeaturedProject
                type="Design & Development"
                tools="Nextjs | React | Typescript | Tailwind | Shazam | Shadcn-ui | Clerk-auth"
                title="Vlc - Music Streaming App"
                summary="This project is a clone of the popular music streaming application Spotify. It allows users to search for and listen to their favorite songs, create playlists, and follow other users."
                img={banzik}
                date="2022"
                link="https://github.com/ArnaudBand/spotify"
                github="https://github.com/ArnaudBand/spotify"
              />
            </div>
            <div className="w-full">
              <FeaturedProject
                type="Design & Development"
                tools="Nextjs | React | Typescript | Tailwind | Metmask | Shadcn-ui | Clerk-auth | Web 3.0"
                // title="Vlc - Music Streaming App"
                summary="Platform that revolutionizes the social media by allowing users to be on the center of the platform and earn money by creating content. Empowered by blockchain technology.an AI-powered platform that revolutionizes the social media by allowing users to be on the center of the platform and earn money by creating content. Empowered by blockchain and AI technology."
                img={bitnorm}
                date="2022"
                link="https://github.com/Bitnorm"
                github="https://github.com/Bitnorm"
              />
            </div>
          </div>

          <div>
            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <a
                href="/about/"
                target="_self"
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </a>
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
