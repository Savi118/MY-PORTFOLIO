import { motion } from "framer-motion";

const SkillCard = ({ title, icon, items }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className='
        bg-white/90
        border border-green-300
        rounded-2xl p-6
        shadow-lg backdrop-blur-sm
        hover:bg-teal-50/40
        transition
      '
    >
      <div className='flex items-center gap-3 mb-4 text-green-900'>
        {icon}
        <h3 className='text-2xl font-bold'>{title}</h3>
      </div>

      <ul className='space-y-2 mt-2 text-green-800 font-medium'>
        {items.map((skill, idx) => (
          <li
            key={idx}
            className='flex items-center gap-2 text-sm md:text-base'
          >
            <span className='w-2 h-2 bg-green-600 rounded-full'></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
