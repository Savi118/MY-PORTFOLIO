import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full py-20 px-6 bg-green-50/40">
      <div className="max-w-5xl mx-auto">

        {/* Top Section - Profile + Intro */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl font-extrabold text-green-900">
              About <span className="text-green-700">Saksham</span>
            </h1>

            <p className="mt-4 text-lg text-green-800 leading-relaxed">
              I'm a <span className="font-semibold">Full Stack Developer</span> who
              loves building end-to-end digital experiences—clean frontends, scalable
              backends, and meaningful real-world solutions through technology.
            </p>

            <p className="mt-4 text-green-900 font-medium text-base leading-relaxed">
              I chose full-stack development because I enjoy the freedom of creating
              an idea from scratch—designing the UI, crafting the logic, building
              the API, and deploying a complete product. I like solving real problems
              with code and turning concepts into working digital experiences.
            </p>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-green-600 shadow-xl bg-green-200">
              <img
                src="/images/profile.png"
                alt="Saksham"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-green-900 text-center">My Journey</h2>

          <p className="mt-5 text-lg text-green-800 text-center leading-relaxed max-w-3xl mx-auto">
            I build things that work — scalable APIs, clean UI designs, and practical
            real-world applications.  
            Currently focused on:
            <span className="font-semibold text-green-900">
              {" "}
              React, Node, MongoDB, Tailwind, API Design, Deployment, Next.js,
              Express, SQL, and DSA.
            </span>
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-green-200/60 p-6 md:p-8 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl font-bold text-green-900">My Mission</h3>
          <p className="mt-3 text-green-800 text-lg leading-relaxed">
            “I create full-stack solutions that blend performance with user experience
            and aim to solve real-world problems through development.”
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* What I Do */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 transition"
          >
            <h4 className="text-xl font-bold text-green-900 mb-3">What I Do</h4>
            <p className="text-green-800 text-base leading-relaxed">
              I build full-stack applications with clean UI, structured logic,
              and scalable backend architecture using MERN, REST APIs,
              authentication, and responsive layouts.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 transition"
          >
            <h4 className="text-xl font-bold text-green-900 mb-3">
              My Development Philosophy
            </h4>
            <p className="text-green-800 text-base leading-relaxed">
              I believe in writing clean, reusable, and readable code.  
              Performance + User Experience = 🔥  
              Apps should be fast, intuitive, and enjoyable.
            </p>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 transition"
          >
            <h4 className="text-xl font-bold text-green-900 mb-3">
              What I’m Learning Next
            </h4>
            <p className="text-green-800 text-base leading-relaxed">
              I'm currently sharpening my Data Structures & Algorithms skills and
              learning Next.js to build faster, scalable, SEO-friendly applications.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
