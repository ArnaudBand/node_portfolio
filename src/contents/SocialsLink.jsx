import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
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
        Mail
        {' '}
        <HiOutlineMail size={30} />
      </>
    ),
    href: `mailto:${options.social.email}`,
  },
  {
    id: 5,
    child: (
      <>
        Resume
        {' '}
        <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '/resume.pdf',
    download: true,
  },
];

export default socialLinks;
