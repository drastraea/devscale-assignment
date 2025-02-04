'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Samuel Sitorus
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I am a devscale (batch 8) student. Learning Fullstack Next.js and this is my assignment.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link href="/home">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 text-lg font-semibold bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Explore
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
