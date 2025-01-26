'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center space-x-4 my-8"
    >
      <Link 
        href="https://www.instagram.com/04aug23" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <Instagram size={24} />
          <span className="text-lg">@04aug23</span>
        </div>
      </Link>
    </motion.div>
  );
}