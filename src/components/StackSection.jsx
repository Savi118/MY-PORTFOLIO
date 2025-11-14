import { motion } from "framer-motion";

const StackSection = ({ title, icon, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='bg-white/90 border border-green-200 shadow-md rounded-2xl p-6'
    >
      {/* Header */}
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center shadow-md shadow-teal-400/40 text-teal-600'>
          {icon}
        </div>
        <h2 className='text-2xl font-bold text-green-900'>{title}</h2>
      </div>

      {/* Items Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 12px rgba(20,184,166,0.4)",
              borderColor: "rgb(20 184 166)",
            }}
            className='
              bg-green-100/40 border border-green-200
              text-green-900 font-medium text-sm
              p-3 rounded-xl text-center transition
            '
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StackSection;
