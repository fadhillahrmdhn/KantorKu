"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HamburgerButton from './ui/HamburgerButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
        <Link href="/">
          <Image width={165} height={36} src="/assets/images/logos/logo.svg" alt="logo" />
        </Link>
        <ul className="hidden md:flex items-center gap-[50px] w-fit">
          <li>
            <Link href="/">Browse</Link>
          </li>
          <li>
            <Link href="/">Popular</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">My Booking</Link>
          </li>
        </ul>
        <Link href="#" className="hidden md:flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5">
          <Image width={24} height={24} src="/assets/images/icons/call.svg" alt="icon" />
          <span className="font-semibold">Contact Us</span>
        </Link>
        <div className="md:hidden">
          {/* Hamburger button for mobile menu */}
          <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full left-0 shadow-lg py-4">
            <ul className="flex flex-col items-center gap-6">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Popular
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  My Booking
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
