import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import TimelineItem from "../components/TimelineItem";

const Experience = () => {
  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-5xl mx-auto'>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          Experience
        </motion.h1>

        <p className='text-center mt-3 text-green-800 max-w-xl mx-auto'>
          A timeline of my real-world development experience, projects, and the
          technologies I worked with.
        </p>

        {/* Timeline Container */}
        <div className='mt-14 relative border-l-4 border-teal-500 shadow-sm ml-4'>
          {/* EXPERIENCE 1 */}
          <TimelineItem
            company='Cognifyz Technologies'
            date='27 Oct 2025 - 27 Nov 2025  — Remote'
            description='Worked as a Full Stack Development Intern, building three end-to-end real-world projects from scratch with clean architecture, optimized logic, and professional deployment workflows.'
          >
            {/* PROJECTS UNDER COGNIFYZ */}
            <ProjectCard
              title='NextGen Studio'
              description='An AI-powered digital solutions studio offering UI/UX, full-stack development, and intelligent web services. I built a server-side rendered landing site using Express, Node.js, EJS, Tailwind CLI, and MVC architecture. Added form validations and secure contact submission handling.'
              link='https://nextgen-studio.onrender.com/'
              image='/images/experience/NG-S.png'
            />

            <ProjectCard
              title='QuizX'
              description='A full quiz platform where users can register, log in, attempt quizzes across Basic, Intermediate, and Advanced levels, and track rankings through a leaderboard. Built using Express, MongoDB (Mongoose), EJS, Tailwind, and MVC structure with full authentication and session handling.'
              link='https://quizx-ltkr.onrender.com/about'
              image='/images/experience/QX.png'
            />

            <ProjectCard
              title='BookVault'
              description='A MERN-stack book management platform where users can maintain a personal library, track reading status, add books, explore other users’ collections, and manage a wishlist. Built with MongoDB, Express, Node.js, React, Tailwind, Redux tools, hooks, Axios, and toast notifications.'
              link='https://book-vault-nlsf.vercel.app/about'
              image='/images/experience/BV.png'
            />
          </TimelineItem>

          {/* EXPERIENCE 2 */}
          <TimelineItem
            company='ShadowFox'
            date='Nov 2025 — Remote'
            description='Assigned to multiple UI-focused and full-stack projects, designing, structuring, and developing applications with attention to detail, animation, and modern frontend workflows.'
          >
            <ProjectCard
              title='Personal Portfolio (Ongoing)'
              description='A fully custom personal portfolio built using React, React Router, TailwindCSS, Framer Motion animations, and Vite for optimal performance — this very portfolio you’re viewing.'
              link=''
              image='/images/experience/PP.png'
            />

            <ProjectCard
              title='Team India Cricket Fan Page'
              description="A tribute platform showcasing India's cricket achievements, stats, and historical milestones. Designed and built using the same modern frontend stack for clean UI and smooth performance."
              link=''
              image='/images/experience/cricket-placeholder.png'
            />
          </TimelineItem>
        </div>
      </div>
    </section>
  );
};

export default Experience;
