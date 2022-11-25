import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import options from './content_options';

const socialLinks = [
  {
    id: 1,
    child: (
      <>
        LinkedIn
        {' '}
        <FaLinkedin size={30} />
      </>
    ),
    href: options.social.linkedin,
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        GitHub
        {' '}
        <FaGithub size={30} />
      </>
    ),
    href: options.social.github,
  },
  {
    id: 3,
    child: (
      <>
        Twitter
        {' '}
        <FaTwitter size={30} />
      </>
    ),
    href: options.social.twitter,
  },
  {
    id: 4,
    child: (
      <>
        Resume
        {' '}
        <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: 'https://docs.google.com/document/d/1bkUSBnhtxvkfi8vlYJ6BoizFlyDFsK4yHdbeXhjntnc/edit?usp=sharing',
    download: true,
    style: 'rounded-br-md',
  },
];

export default socialLinks;
