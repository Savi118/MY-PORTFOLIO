import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const TimelineItem = ({ company, date, description, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='relative pl-10 mb-16'
    >
      {/* Teal glowing dot */}
      <div className='absolute -left-3 top-1 w-6 h-6 bg-teal-500 border-4 border-white rounded-full shadow-lg shadow-teal-500/70' />

      <h2 className='text-2xl font-bold text-green-900'>{company}</h2>

      {/* Date */}
      <p className='flex items-center gap-2 text-green-700 font-medium mt-1'>
        <Calendar size={18} />
        {date}
      </p>

      {/* Description */}
      <p className='mt-3 text-green-800 leading-relaxed max-w-2xl'>
        {description}
      </p>

      {/* Child projects */}
      <div className='mt-6 space-y-8'>{children}</div>
    </motion.div>
  );
};
export default TimelineItem;
