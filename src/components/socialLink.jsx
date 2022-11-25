import React from 'react';
import socialLinks from '../contents/SocialsLink';

const SocialLinks = () => (
  <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
    <ul>
      {socialLinks.map(({
        id, child, href, download, style,
      }) => (
        <li
          key={id}
          className={
            `${'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'
            + ' '}${
              style}`
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full text-white rounded-br-md"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
