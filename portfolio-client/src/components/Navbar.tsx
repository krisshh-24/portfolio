import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white h-20 z-50 flex items-center justify-between px-6 shadow-md">
      
      {/* Left Links */}
      <div className="hidden md:flex gap-6 audiowide-regular">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={800}
          offset={-50}
          spy={true}
          activeClass="active-link"
          className="cursor-pointer hover:text-gray-500 transition-colors duration-300"
        >
          Contact
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          offset={-50}
          spy={true}
          activeClass="active-link"
          className="cursor-pointer hover:text-gray-500 transition-colors duration-300"
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={800}
          offset={-50}
          spy={true}
          activeClass="active-link"
          className="cursor-pointer hover:text-gray-500 transition-colors duration-300"
        >
          Projects
        </ScrollLink>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
        <video
          src="/logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-20 w-auto"
        />
      </div>

      {/* Social Icons (Desktop) */}
      <div className="hidden md:flex items-center gap-4 z-40">
        <a href="https://github.com/krisshh-24" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-gray-600 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/krish-sagar-8b182a25b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://x.com/krisshh_24" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} className="hover:text-sky-400 transition-colors" />
        </a>
        <a href="https://www.instagram.com/krisshh_24/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-red-400 transition-colors" />
        </a>
      </div>

      {/* Hamburger (Mobile Only) */}
      <button
        className="text-3xl md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Fullscreen Menu (Mobile) */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-8 text-2xl audiowide-regular z-50"
        >
          <ScrollLink to="home" smooth duration={800} offset={-50} spy activeClass="active-link" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
          <ScrollLink to="about" smooth duration={800} offset={-50} spy activeClass="active-link" onClick={() => setMenuOpen(false)}>About</ScrollLink>
          <ScrollLink to="projects" smooth duration={800} offset={-50} spy activeClass="active-link" onClick={() => setMenuOpen(false)}>Projects</ScrollLink>
          <ScrollLink to="contact" smooth duration={800} offset={-50} spy activeClass="active-link" onClick={() => setMenuOpen(false)}>Contact</ScrollLink>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://github.com/krisshh-24" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/krish-sagar-8b182a25b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/krisshh_24" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/krisshh_24/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
