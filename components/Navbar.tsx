
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
  {
    name: 'Education',
    children: [
      { name: 'Academic Qualification', href: '/education/academic-qualifications' },
      { name: 'Research Works', href: '/education/research-works' },
    ],
  },

  { name: 'Contact', href: '/contact' },
];


export default function Navbar({ variant = "light"}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {text, underline,position} = navbarStyles[variant];


  const [isEducationOpen, setIsEducationOpen] = useState(false);

  // Get the current pathname to conditionally render the Home link
  const pathname = usePathname();

     // Get the current route icon class
    const routeIconClass = useRouteIconClass();

  return (  
    <header className={`${position}`}>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 h-screen backdrop-blur-sm transition-opacity duration-700 md:hidden ${
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


          {navLinks.map((link) =>
  link.children ? (
    <div key={link.name} className="relative group">
      <span
        className={`cursor-pointer ${text} font-semibold text-xl py-2 px-4`}
      >
        {link.name}
      </span>

      {/* Hoverable Dropdown */}
      <div
        className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top"
      >
        {link.children.map((child) => (
          <Link
            key={child.name}
            href={child.href}
            className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-100"
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={link.name}
      href={link.href}
      className={`relative ${text} transition-all duration-300 font-semibold text-xl py-2 px-4 after:content-[''] after:absolute after:top-10 after:left-2 after:bottom-0 after:h-[2px] after:w-0 ${underline} after:transition-all after:duration-300 hover:after:w-[75%]`}
    >
      {link.name}
    </Link>
  )
)}

      </nav>

      {/* Mobile Nav */}

    {isOpen &&  <nav className="fixed top-0 left-0 w-full h-full bg-black/20 z-40 flex flex-col items-center justify-center text-white text-2xl md:hidden">
  <ul className="w-full text-center">
    
    {navLinks.map((link) =>
  link.children ? (
    <li key={link.name} className="w-full">
      <button
        onClick={() => setIsEducationOpen((prev) => !prev)}
        className="w-full py-4 mt-5 px-4 font-semibold text-white hover:bg-black/70 transition-all duration-300 flex justify-between items-center flex-col"
      >
        {link.name}
      </button>

        <ul
  className={`ml-4 transition-all duration-700 ease-in-out overflow-hidden ${
    isEducationOpen ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
  }`}
>
  {link.children.map((child) => (
    <li key={child.name}>
      <Link
        href={child.href}
        onClick={() => {
          setIsEducationOpen(false);
          setIsOpen(false);
        }}
        className="block w-full py-2 px-4 hover:bg-black/70"
      >
        {child.name}
      </Link>
    </li>
  ))}
</ul>

    </li>
  ) : (
    <li key={link.name} className="w-full">
      <Link
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block w-full py-4 mt-5 hover:bg-black/70 transition-all duration-300"
      >
        {link.name}
      </Link>
    </li>
  )
)}

  </ul>
</nav>}


      {/* Menu Toggle */}
      <div className="absolute top-6 right-6  m-5 z-50 md:hidden">
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
