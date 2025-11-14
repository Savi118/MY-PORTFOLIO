import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        bg-[url('/images/home.jpg')] bg-cover bg-center
        flex items-center justify-center
        px-4 sm:px-6 md:px-10
      "
    >
      {/* Backdrop Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='absolute inset-0 backdrop-blur-md bg-green-200/40'
      />

      {/* Floating UI Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1 }}
        className='
          absolute 
          hidden sm:block 
          -top-10 left-6 md:left-16
          w-28 h-16 md:w-40 md:h-24
          bg-green-100/40 rounded-xl blur-sm
        '
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2 }}
        className='
          absolute 
          hidden sm:block 
          bottom-20 right-6 md:right-20
          w-32 h-20 md:w-48 md:h-28
          bg-green-300/30 rounded-xl blur-sm
        '
      />

      {/* Content */}
      <div className='relative z-10 text-center max-w-xl sm:max-w-2xl p-4 sm:p-10'>
        {/* Name Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='
            text-3xl sm:text-4xl md:text-5xl 
            font-extrabold text-green-900 leading-tight
          '
        >
          Hi, I’m{" "}
          <motion.span
            whileHover={{ scale: 1.1, color: "#15803d" }}
            transition={{ type: "spring", stiffness: 200 }}
            className='text-white'
          >
            SAKSHAM
          </motion.span>
        </motion.h2>

        {/* New Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className='
            mt-4 sm:mt-5 
            text-lg sm:text-xl 
            text-green-900 font-semibold
          '
        >
          Full Stack Developer crafting scalable, fast, and beautifully
          engineered web solutions.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className='mt-3 text-base sm:text-lg text-green-800'
        >
          I build complete applications — from clean frontend interfaces to
          robust backend systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='
            mt-8 flex flex-col sm:flex-row 
            justify-center items-center 
            gap-8
          '
        >
          {/* Explore Projects */}
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              to='projects'
              className='
                px-6 py-3 
                bg-green-700 text-white rounded-full 
                hover:bg-green-800 transition
                w-full sm:w-auto
              '
            >
              Explore Projects
            </Link>
          </motion.div>

          {/* Resume */}
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <a
              href='/resume.pdf'
              download
              className='
                px-6 py-3 
                border border-green-700 
                text-green-900 rounded-full 
                hover:bg-green-700 hover:text-white transition
                w-full sm:w-auto
              '
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className='
            mt-10 
            flex flex-col sm:flex-row 
            justify-center items-center 
            gap-6 sm:gap-10 
            text-green-900 font-semibold text-lg
          '
        >
          {/* Projects */}
          <motion.div whileHover={{ scale: 1.1 }} className='text-center'>
            <p className='text-3xl font-bold'>10+</p>
            <p className='text-sm text-green-700'>Full-Stack Projects</p>
          </motion.div>

          {/* Skills */}
          <motion.div whileHover={{ scale: 1.1 }} className='text-center'>
            <p className='text-3xl font-bold'>⚡</p>
            <p className='text-sm text-green-700'>MERN / REST / Auth / UI UX</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
