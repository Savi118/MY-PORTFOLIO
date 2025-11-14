import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass =
    "block px-3 py-2 text-sm font-medium hover:text-green-700 transition";

  const activeClass =
    "text-green-900 font-semibold bg-green-400/40 rounded-2xl";

  return (
    <header className='bg-green-200 w-full rounded-xl py-3 shadow-sm'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-green-900 hover:text-green-600'>
            SA<span className='text-green-600'>VI</span>
          </h1>

          {/* Mobile Hamburger */}
          <button className='sm:hidden' onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Menu */}
          <nav className='hidden sm:flex gap-6 items-center'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to='/skills'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to='/experience'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to='/tech-stack'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Tech Stack
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <nav className='sm:hidden mt-4 space-y-1 bg-green-100 rounded-lg p-3 transition-all'>
            <NavLink
              onClick={() => setOpen(false)}
              to='/'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to='/about'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to='/skills'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to='/experience'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Experience
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to='/projects'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to='/tech-stack'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Tech Stack
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to='/contact'
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
