import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

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
    href: 'https://linkedin.com/ArnaudBandonkeye',
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
    href: 'https://github.com/ArnaudBand',
  },
  {
    id: 2,
    child: (
      <>
        Twitter
        {' '}
        <FaTwitter size={30} />
      </>
    ),
    href: 'https://twitter.com/@ba104781',
  },
  {
    id: 3,
    child: (
      <>
        Mail
        {' '}
        <HiOutlineMail size={30} />
      </>
    ),
    href: 'bandonkeyea@gmail.com',
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
    href: '/resume.pdf',
    download: true,
  },
];

export default socialLinks;
