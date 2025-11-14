import { motion } from "framer-motion";
import projectList from "../data/projectList";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-6xl mx-auto'>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          Projects
        </motion.h1>

        <p className='text-center mt-3 text-green-800 max-w-xl mx-auto'>
          A collection of real-world projects I built using modern full-stack
          technologies.
        </p>

        {/* Project Grid */}
        <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* PROJECTS */}
          {projectList.map((p, index) => (
            <ProjectCard key={index} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
