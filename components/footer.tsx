'use client'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa6'
import { IoIosArrowUp } from 'react-icons/io'
import { motion } from 'framer-motion'
import { footerVariant, footerStyle } from './navbar.config';



 type footerStyle = {
      variant?: footerVariant;
    };

export default function Footer({variant="altitude"}: footerStyle) {
      const {aboutFooter} = footerStyle[variant];

  return (
    <footer className={`bg-[#0a0a02] text-white py-10 -mx-0.5 relative bottom-0 z-10 ${aboutFooter}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left - Copyright */}
        <div className="text-sm">
      Professor Emmanuel Ohene Afoakwa &copy; {new Date().getFullYear()}. All rights reserved.
        </div>

        {/* Center - Name */}
        <div className="text-lg font-semibold leading-tight">
          <p>Professor</p>
          <p>Emmanuel Ohene</p>
          <p>Afoakwa</p>
        </div>

        {/* Right - Social Icons with Tooltips */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Tooltip text="Facebook">
            <Link href="https://web.facebook.com/emmanuel.oheneafoakwa" target="_blank">
              <div className="icon-btn">
                <FaFacebookF size={18} />
              </div>
            </Link>
          </Tooltip>

          <Tooltip text="LinkedIn">
            <Link href="https://www.linkedin.com/in/professor-emmanuel-ohene-afoakwa-75a81919/" target="_blank">
              <div className="icon-btn">
                <FaLinkedinIn size={18} />
              </div>
            </Link>
          </Tooltip>

          <Tooltip text="Instagram">
            <Link href="https://www.instagram.com/profoheneafoakwa/" target="_blank">
              <div className="icon-btn">
                <FaInstagram size={18} />
              </div>
            </Link>
          </Tooltip>

          {/* Scroll to Top with Animation */}
          <motion.button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  whileHover={{ scale: 1.2, rotate: 180 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
  className="icon-btn"
>
  <Tooltip text="Back to top">
    <IoIosArrowUp size={20} />
  </Tooltip>
</motion.button>
        </div>
      </div>
    </footer>
  )
}

// Tooltip component
const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => (
  <div>
    {children}
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-white text-black text-xs px-2 py-1 rounded transition-all duration-200 whitespace-nowrap z-20">
      {text}
    </div>
  </div>
)
