"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginClient() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setLoading(false);
      alert("Invalid credentials");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-green-50/40 px-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='
          w-full max-w-md 
          bg-white/80 backdrop-blur-xl 
          border border-green-200 
          shadow-xl rounded-2xl 
          p-8
        '
      >
        {/* Heading */}
        <h1 className='text-3xl font-extrabold text-green-900 text-center'>
          Admin <span className='text-green-700'>Login</span>
        </h1>
        <p className='text-green-700 text-center mt-2'>
          Authorized access only
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className='mt-8 flex flex-col gap-5'>
          <input
            type='email'
            name='email'
            placeholder='Admin Email'
            className='
              p-3 w-full rounded-xl 
              border border-green-300
              focus:ring-2 focus:ring-green-600
              outline-none
            '
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            className='
              p-3 w-full rounded-xl 
              border border-green-300
              focus:ring-2 focus:ring-green-600
              outline-none
            '
          />

          <button
            type='submit'
            className='
              w-full p-3 rounded-xl 
              bg-green-600 text-white font-semibold
              hover:bg-green-700 transition
              shadow-md
            '
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
