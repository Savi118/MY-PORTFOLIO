import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px rgba(20, 184, 166, 0.35)",
      }}
      transition={{ type: "spring", stiffness: 180 }}
      className='bg-white border border-green-200 rounded-xl p-5 shadow-md'
    >
      {/* Image Placeholder */}
      <div className='w-full h-44 rounded-lg overflow-hidden bg-green-200 flex items-center justify-center'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>

      <h3 className='mt-4 text-xl font-bold text-green-900'>{title}</h3>
      <p className='mt-2 text-green-800 text-sm leading-relaxed'>
        {description}
      </p>

      {/* Link */}
      {link && (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-3 inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition'
        >
          Visit Project <ExternalLink size={16} />
        </a>
      )}
    </motion.div>
  );
};
export default ProjectCard;
