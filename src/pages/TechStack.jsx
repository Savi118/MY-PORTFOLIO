import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Globe,
  Wrench,
  Terminal,
  Rocket,
  Boxes,
} from "lucide-react";
import StackSection from "../components/StackSection";

const TechStack = () => {
  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-6xl mx-auto'>
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          Tech <span className='text-green-700'>Stack</span>
        </motion.h1>

        <p className='text-center mt-3 text-green-800 max-w-xl mx-auto'>
          The technologies, tools, and languages I use to build scalable
          full-stack applications.
        </p>

        {/* Sections */}
        <div className='mt-16 space-y-16'>
          {/* FRONTEND */}
          <StackSection
            title='Frontend Stack'
            icon={<Layout size={28} />}
            items={[
              "React",
              "HTML",
              "CSS",
              "JavaScript",
              "TailwindCSS",
              "Vite",
              "EJS",
            ]}
          />

          {/* BACKEND */}
          <StackSection
            title='Backend Stack'
            icon={<Server size={28} />}
            items={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "Authentication",
              "MVC Structure",
            ]}
          />

          {/* DATABASE */}
          <StackSection
            title='Database Stack'
            icon={<Database size={28} />}
            items={["MongoDB", "Mongoose", "NoSQL Schema Design", "SQL"]}
          />

          {/* DEPLOYMENT */}
          <StackSection
            title='Deployment Stack'
            icon={<Globe size={28} />}
            items={[
              "Render",
              "Vercel",
              "Netlify",
              "Railway",
              "CORS + Axios Integration",
            ]}
          />

          {/* WORKFLOW TOOLS */}
          <StackSection
            title='Workflow Tools'
            icon={<Wrench size={28} />}
            items={[
              "Git",
              "GitHub",
              "Postman",
              "VS Code",
              "Browser DevTools",
              "API Testing Workflows",
              "React Hot Toast",
            ]}
          />

          {/* OTHER LANGUAGES */}
          <StackSection
            title='Other Languages'
            icon={<Terminal size={28} />}
            items={[
              "Java",
              "Python",
              "C (Basics)",
              "DSA Fundamentals",
              "AI / ML (Beginner Level)",
              "Generative AI",
              "Agentic AI",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
