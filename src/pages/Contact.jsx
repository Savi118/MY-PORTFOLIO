import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialIcon from "../components/SocialIcon";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();

  // EMAILJS — handle submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axie8vn",
        "template_88fgnkb",
        formRef.current,
        "MuiJUbFNuJjhKw3Hu"
      )
      .then(
        () => {
          toast.success("Email Sent ");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <section className='w-full py-20 px-4 sm:px-6 bg-green-50/40'>
        <div className='max-w-6xl mx-auto'>
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-3xl sm:text-4xl font-extrabold text-green-900 text-center'
          >
            Let’s Build Something{" "}
            <span className='text-green-700'>Meaningful.</span>
          </motion.h1>

          <p className='text-center mt-3 text-green-800 max-w-xl mx-auto text-sm sm:text-base'>
            Whether you're hiring, looking for a collaborator, or want to start
            a new full-stack project — I’d love to connect.
          </p>

          {/* Layout */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-6'
            >
              <h2 className='text-2xl font-bold text-green-900'>
                Why Reach Out?
              </h2>

              <p className='text-green-800 leading-relaxed text-sm sm:text-base'>
                I’m currently open to opportunities in:
                <br />
                <span className='font-semibold text-green-900'>
                  • Full-Stack Development • Freelance Projects • Long-term
                  Collaboration • Startup MVP Building
                </span>
              </p>

              <p className='text-green-800 leading-relaxed text-sm sm:text-base'>
                With experience in{" "}
                <strong>MERN stack, REST APIs, Auth, UI/UX,</strong> and
                deploying complete apps, I’m excited to work on projects that
                make a real impact.
              </p>

              {/* Social Icons */}
              <div className='flex gap-4 mt-4'>
                <SocialIcon
                  icon={<Github size={22} />}
                  link='https://github.com/Savi118'
                />
                <SocialIcon
                  icon={<Linkedin size={22} />}
                  link='https://www.linkedin.com/in/saksham-viraj-188071285/'
                />
              </div>
            </motion.div>

            {/* RIGHT: CONTACT FORM */}
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='
              bg-white shadow-lg border border-green-200 rounded-2xl 
              p-5 sm:p-6 space-y-4 
              w-full max-w-full
            '
            >
              {/* Name */}
              <div className='flex flex-col'>
                <label className='font-semibold text-green-900 text-sm sm:text-base'>
                  Name
                </label>
                <input
                  type='text'
                  name='user_name'
                  required
                  className='
                  mt-1 p-3 rounded-lg border border-green-200 bg-green-50/40 
                  focus:outline-green-600 text-sm sm:text-base
                '
                />
              </div>

              {/* Email */}
              <div className='flex flex-col'>
                <label className='font-semibold text-green-900 text-sm sm:text-base'>
                  Email
                </label>
                <input
                  type='email'
                  name='user_email'
                  required
                  className='
                  mt-1 p-3 rounded-lg border border-green-200 bg-green-50/40 
                  focus:outline-green-600 text-sm sm:text-base
                '
                />
              </div>

              {/* Message */}
              <div className='flex flex-col'>
                <label className='font-semibold text-green-900 text-sm sm:text-base'>
                  Message
                </label>
                <textarea
                  name='message'
                  rows='5'
                  required
                  className='
                  mt-1 p-3 rounded-lg border border-green-200 bg-green-50/40 
                  focus:outline-green-600 text-sm sm:text-base
                '
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className='
                w-full py-3 bg-green-700 text-white font-semibold rounded-lg 
                hover:bg-green-800 transition text-sm sm:text-base
              '
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
