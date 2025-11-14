import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  month,
  img,
  problem,
  features,
  learnings,
  demo,
  github,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 18px rgba(20, 184, 166, 0.35)",
        borderColor: "rgb(20 184 166)",
      }}
      transition={{ type: "spring", stiffness: 180 }}
      className='bg-white border border-green-200 rounded-xl p-5 shadow-md transition'
    >
      {/* Image Placeholder */}
      <div className='w-full h-40 rounded-lg overflow-hidden bg-green-200'>
        <img src={img} alt={title} className='w-full h-full object-cover' />
      </div>

      {/* Month */}
      <p className='text-green-700 font-medium mt-3 text-sm'>{month}</p>

      {/* Title */}
      <h3 className='mt-1 text-xl font-bold text-green-900'>{title}</h3>

      {/* Problem */}
      <p className='mt-2 text-green-800 text-sm leading-relaxed'>
        <span className='font-semibold text-green-900'>Problem Solved:</span>{" "}
        {problem}
      </p>

      {/* Tech Stack */}
      <div className='mt-3 space-y-2 text-sm'>
        <p>
          <strong className='text-green-900'>Frontend:</strong>{" "}
          {features.frontend}
        </p>
        <p>
          <strong className='text-green-900'>Backend:</strong>{" "}
          {features.backend}
        </p>
        <p>
          <strong className='text-green-900'>Database:</strong>{" "}
          {features.database}
        </p>
        <p>
          <strong className='text-green-900'>Features:</strong> {features.extra}
        </p>
      </div>

      {/* What I Learned */}
      <div className='mt-4'>
        <h4 className='font-semibold text-green-900 mb-1'>What I Learned:</h4>
        <p className='text-green-800 text-sm leading-relaxed'>{learnings}</p>
      </div>

      {/* Buttons */}
      <div className='mt-4 flex gap-3'>
        {demo && (
          <a
            href={demo}
            target='_blank'
            className='flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition text-sm'
          >
            Live Demo <ExternalLink size={16} />
          </a>
        )}
        {github && (
          <a
            href={github}
            target='_blank'
            className='flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-green-700 text-green-900 hover:bg-green-700 hover:text-white transition text-sm'
          >
            GitHub <Github size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
