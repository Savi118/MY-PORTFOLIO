"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function ContactClient({ settings }) {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const socials = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: `mailto:${settings.email}`,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: settings.github,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: settings.linkedin,
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: settings.instagram,
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message Sent Successfully 🎉");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Try again.");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-5xl mx-auto'>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          Get in <span className='text-green-700'>Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mt-4 text-green-800 text-center max-w-2xl mx-auto text-lg'
        >
          Drop me a message. I reply within 24 hours 📩
        </motion.p>

        {/* Grid */}
        <div className='mt-12 grid md:grid-cols-2 gap-12'>
          {/* LEFT: Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-white/80 backdrop-blur-xl border border-green-200 shadow-lg p-8 rounded-2xl flex flex-col gap-5'
          >
            <h2 className='text-2xl font-bold text-green-900'>
              Send a Message
            </h2>

            <input
              type='text'
              name='name'
              required
              placeholder='Your Name'
              className='p-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none'
            />

            <input
              type='email'
              name='email'
              required
              placeholder='Your Email'
              className='p-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none'
            />

            <textarea
              name='message'
              required
              placeholder='Your Message'
              className='p-3 rounded-xl border border-green-300 h-32 focus:ring-2 focus:ring-green-500 outline-none'
            />

            <button
              type='submit'
              className='px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold'
            >
              Send Message
            </button>

            {status && (
              <p className='text-green-800 font-medium text-sm mt-2'>
                {status}
              </p>
            )}
          </motion.form>

          {/* RIGHT: Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-2 gap-6'
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target='_blank'
                whileHover={{ scale: 1.05 }}
                className='
                  group bg-white/80 backdrop-blur-lg 
                  border border-green-200 rounded-xl
                  shadow-md p-6 flex flex-col 
                  justify-center items-center gap-3
                  text-green-900 hover:bg-green-100/50
                '
              >
                <div className='text-3xl text-green-700 group-hover:scale-125 transition'>
                  {social.icon}
                </div>
                <p className='font-semibold'>{social.name}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Resume BTN */}
        <div className='mt-14 flex justify-center'>
          <motion.a
            href='/files/resume.pdf'
            download
            whileHover={{ scale: 1.05 }}
            className='
              px-6 py-3 bg-green-600 text-white 
              rounded-full flex items-center gap-2
              shadow-md hover:bg-green-700 transition
            '
          >
            <FiLink className='text-xl' />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
