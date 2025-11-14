import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Rocket,
  BrainCog,
} from "lucide-react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-6xl mx-auto'>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          My <span className='text-green-700'>Skills</span>
        </motion.h1>

        <p className='text-center mt-3 text-green-800 max-w-xl mx-auto'>
          A complete stack of tools & technologies I use to build interactive,
          scalable & production-ready applications.
        </p>

        {/* Grid Layout */}
        <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* FRONTEND */}
          <SkillCard
            title='Frontend'
            icon={<Layout size={30} />}
            items={[
              "React",
              "TailwindCSS",
              "JavaScript",
              "Vite",
              "EJS",
              "HTML",
              "CSS",
            ]}
          />

          {/* BACKEND */}
          <SkillCard
            title='Backend'
            icon={<Server size={30} />}
            items={["Node.js", "Express.js", "REST APIs", "Authentication"]}
          />

          {/* DATABASE */}
          <SkillCard
            title='Database'
            icon={<Database size={30} />}
            items={["MongoDB", "Mongoose", "NoSQL Schema Design", "SQL"]}
          />

          {/* TOOLS & DEVOPS */}
          <SkillCard
            title='Tools & DevOps'
            icon={<Wrench size={30} />}
            items={[
              "Git",
              "GitHub",
              "Postman",
              "Render",
              "Vercel",
              "Netlify",
              "Docker",
              "API Testing Workflows",
            ]}
          />

          {/* CURRENTLY LEARNING */}
          <SkillCard
            title='Learning'
            icon={<BrainCog size={30} />}
            items={[
              "Next.js",
              "Java",
              "Python",
              "DSA",
              "AI & ML",
              "Generative AI",
              "Agentic AI",
            ]}
          />

          {/* EXTRA / OPTIONAL */}
          <SkillCard
            title='Other Skills'
            icon={<Rocket size={30} />}
            items={[
              "System Architecture Thinking",
              "Problem Solving",
              "Debugging & Optimization",
              "Clean Code + Best Practices",
              "Project Management",
              "Leadership",
              "English Communication",
              "Japanese N5 Level"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
