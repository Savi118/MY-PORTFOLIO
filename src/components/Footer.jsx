import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='bg-green-200 py-10 rounded-t-2xl'
    >
      <div className='max-w-6xl mx-auto px-6 text-center'>
        {/* Logo */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className='text-4xl font-bold text-green-900'
        >
          SA<span className='text-green-600'>VI</span>
        </motion.h2>

        {/* Tagline */}
        <p className='mt-2 text-green-800 text-sm'>
          Full Stack Developer building modern & scalable web applications.
        </p>

        {/* Links */}
        <div className='mt-6 flex justify-center gap-6 flex-wrap text-green-900 font-medium'>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className='hover:text-green-700 transition'
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <div className='mt-6 flex justify-center gap-5'>
          {[
            { icon: Github, link: "https://github.com/Savi118" },
            {
              icon: Linkedin,
              link: "https://www.linkedin.com/in/saksham-viraj-188071285/",
            },
            {
              icon: Instagram,
              link: "https://www.instagram.com/core.hustler118/?igsh=NDJ5eGY0YTg5YXdz&utm_source=qr#",
            },
            { icon: Mail, link: "mailto:sakshamviraj2004@gmail.com" },
          ].map(({ icon, link }, idx) => {
            const Icon = icon; // <- Fix: explicitly using Icon inside a block
            return (
              <motion.a
                key={idx}
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className='text-green-900 hover:text-green-700'
              >
                <Icon size={22} />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-green-300 mt-8' />

        {/* Bottom */}
        <p className='mt-4 text-sm text-green-800'>
          © {new Date().getFullYear()} SAKSHAM — All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
