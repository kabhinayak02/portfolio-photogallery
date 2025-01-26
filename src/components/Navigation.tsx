'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// TODO: Improve navigation bar and try to add some logo and name 

export default function Navigation() {
  return (
    <nav className="bg-white shadow-light py-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-semibold">
            PhotoFolio
          </Link>
        </motion.div> 
        {/* <motion.div>
          <h2>Abhinay kumar</h2>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-600">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}