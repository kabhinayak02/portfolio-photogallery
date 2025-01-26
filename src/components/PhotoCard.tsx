'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoCardProps {
  src: string;
  alt: string;
  title?: string;
}

export default function PhotoCard({ src, alt, title }: PhotoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-lg overflow-hidden shadow-md"
    >
      <Image 
        src={src} 
        alt={alt} 
        width={500} 
        height={500} 
        className="w-full h-auto object-cover"
      />
      {/* {title && (
        <div className="p-4 bg-white">
          <p className="text-center text-gray-700">{title}</p>
        </div>
      )} */}
    </motion.div>
  );
}