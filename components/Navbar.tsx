
  "use client";
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import { NavbarVariant, navbarStyles } from './navbar.config';
import { usePathname } from 'next/navigation';
import { useRouteIconClass } from './lib';

type NavbarProps = {
  variant?: NavbarVariant;
};


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ variant = "light"}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {text, underline} = navbarStyles[variant];

  // Get the current pathname to conditionally render the Home link
  const pathname = usePathname();


     // Get the current route icon class
    const routeIconClass = useRouteIconClass();

  return (  
    <header className="absolute z-50 w-full -mt-5">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 h-full backdrop-blur-sm transition-opacity duration-700 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      ></div>

      {/* Desktop Nav */}
      <nav className="mx-auto justify-center space-x-6 mt-10 hidden md:flex md:text-4xl">
         {/* Show only on Home page */}
      {pathname === '/' && (
        <Link
          href="/"
          className={`relative ${text} transition-all duration-300 font-semibold text-xl py-2 px-4 after:content-[''] after:absolute after:left-2 after:bottom-0 after:h-[2px] after:w-0 ${underline} after:transition-all after:duration-300 hover:after:w-[75%]`}
        >
          Professor Ohene Afoakwa
        </Link>
      )}

        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`relative ${text} transition-all duration-300 font-semibold text-xl py-2 px-4 after:content-[''] after:absolute after:top-10 after:left-2 after:bottom-0 after:h-[2px] after:w-0 ${underline} after:transition-all after:duration-300 hover:after:w-[75%]`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Nav */}

    {isOpen &&  <nav className="fixed top-0 left-0 w-full h-full bg-black/20 z-40 flex flex-col items-center justify-center text-white text-2xl md:hidden">
  <ul className="w-full text-center">
    {navLinks.map((link) => (
      <li key={link.name} className="w-full">
        <Link
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="block w-full py-4 mt-5 hover:bg-black/70 transition-all duration-300"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</nav>}


      {/* Menu Toggle */}
      <div className="absolute top-5 right-6  m-5 z-50 md:hidden">
        {!isOpen ? (
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <FiMenu size={40} className={routeIconClass} />
          </button>
        ) : (
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <TfiClose size={40} className={routeIconClass} />
          </button>
        )}
      </div>
    </header>
  );
}
