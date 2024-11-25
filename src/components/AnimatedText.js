/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const quote = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// eslint-disable-next-line react/prop-types
const AnimatedText = ({ text, className = '' }) => (
  <div
    className="py-12 w-full flex flex-col text-center
    overflow-hidden sm:py-0"
  >
    <motion.h1
      className={`inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize  ${className} xl:text-6xl`}
      variants={quote}
      initial="hidden"
      animate="visible"
    >
      {text.split(' ').map((char, index) => (
        <motion.span
          // className="inline-block"
          key={`${char}-${index}`}
          variants={singleWord}
        >
          {char}
&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  </div>
);
AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AnimatedText;
