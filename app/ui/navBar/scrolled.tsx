'use client';

import React, { useEffect, useState } from 'react';

export default function IsScrolled({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 125);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-10 fixed left-0 text-white transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-[2px] bg-[#f2f2f25d] shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-[#c1c1c1] transition-all duration-300 ${
          isScrolled ? 'w-1/2' : 'xl:w-1/3 w-1/4'
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 h-[2px] bg-[#c1c1c1] transition-all duration-300 ${
          isScrolled ? 'w-1/2' : 'xl:w-1/3 w-1/4'
        }`}
      ></div>

      {children}
    </nav>
  );
}
