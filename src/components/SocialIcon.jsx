import { motion } from "framer-motion";
const SocialIcon = ({ icon, link }) => (
  <motion.a
    href={link}
    target='_blank'
    whileHover={{
      scale: 1.2,
      boxShadow: "0 0 12px rgba(20,184,166,0.45)",
    }}
    className='w-11 h-11 rounded-full bg-green-200 flex items-center justify-center text-green-900 shadow-md border border-green-300'
  >
    {icon}
  </motion.a>
);

export default SocialIcon;
