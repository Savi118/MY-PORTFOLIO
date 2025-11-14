import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass =
    "block px-3 py-2 text-sm font-medium hover:text-green-700 transition";

  const activeClass =
    "text-green-900 font-semibold bg-green-400/40 rounded-2xl";

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-200 w-full rounded-xl py-3 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-green-900 hover:text-green-600"
          >
            SA<span className="text-green-600">VI</span>
          </motion.h1>

          {/* Mobile Hamburger */}
          <button className="sm:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex gap-6 items-center">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Tech Stack",
              "Contact",
            ].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }}>
                <NavLink
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className={({ isActive }) =>
                    `${navLinkClass} ${isActive ? activeClass : ""}`
                  }
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="sm:hidden mt-4 space-y-1 bg-green-100 rounded-lg p-3"
            >
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Tech Stack",
                "Contact",
              ].map((item) => (
                <motion.div key={item} whileTap={{ scale: 0.97 }}>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClass : ""}`
                    }
                  >
                    {item}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
