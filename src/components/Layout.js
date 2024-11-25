import React from 'react';

// eslint-disable-next-line react/prop-types
const Layout = ({ children, className = '' }) => (
  <div
    className={`z-0 inline-block h-full w-full bg-light p-16 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 ${className}`}
  >
    {children}
  </div>
);

export default Layout;
