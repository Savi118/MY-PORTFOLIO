"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div
        className='
          backdrop-blur-xl bg-green-300/30
          border-b border-green-300/20
          shadow-lg
          px-6 py-3
          flex items-center justify-between
        '
      >
        {/* Logo */}
        <Link href='/' className='text-4xl font-bold text-green-900'>
          SA<span className='text-green-700'>VI</span>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className='text-green-900 font-medium relative'
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId='navbar-underline'
                    className='absolute left-0 right-0 -bottom-1 h-0.5 bg-green-600'
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden text-3xl text-green-900'
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className='
              md:hidden bg-white/80 backdrop-blur-xl 
              border-b border-green-200 shadow-lg
              w-full px-6 py-4 flex flex-col gap-4
            '
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='text-green-900 font-medium relative py-1'
                >
                  {link.name}

                  {active && (
                    <motion.div
                      layoutId='mobile-navbar-underline'
                      className='h-0.5 bg-green-600 mt-1'
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
