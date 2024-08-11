import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaHome, FaInfoCircle, FaEnvelope, FaBriefcase } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Komal &nbsp;
            <span className='hidden sm:block'> | My Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer flex items-center`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className='flex items-center'>
                {nav.title === "About" && <FaInfoCircle className='mr-2' />}
                {nav.title === "Contact" && <FaEnvelope className='mr-2' />}
                {nav.title === "Home" && <FaHome className='mr-2' />}
                {nav.title === "Work" && <FaBriefcase className='mr-2' />}
                {nav.title}
              </a>
            </li>
          ))}
          <li className='text-[18px] font-medium cursor-pointer'>
            <a href='https://www.linkedin.com/in/komal-pathak-073127289/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='inline-block mr-2' /> LinkedIn
            </a>
          </li>
          <li className='text-[18px] font-medium cursor-pointer'>
            <a href='https://github.com/Komalpathak2004' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='inline-block mr-2' /> GitHub
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } flex items-center`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className='flex items-center'>
                    {nav.title === "About" && <FaInfoCircle className='mr-2' />}
                    {nav.title === "Contact" && <FaEnvelope className='mr-2' />}
                    {nav.title === "Home" && <FaHome className='mr-2' />}
                    {nav.title === "Work" && <FaBriefcase className='mr-2' />}
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className='font-poppins font-medium cursor-pointer text-[16px] flex items-center'>
                <a href='https://www.linkedin.com/in/komal-pathak-073127289/' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className='inline-block mr-2' /> LinkedIn
                </a>
              </li>
              <li className='font-poppins font-medium cursor-pointer text-[16px] flex items-center'>
                <a href='https://github.com/Komalpathak2004' target='_blank' rel='noopener noreferrer'>
                  <FaGithub className='inline-block mr-2' /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
