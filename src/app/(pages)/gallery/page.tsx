'use client';

import PhotoCard from '../../../components/PhotoCard';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/photos/photo1.jpg', alt: 'Landscape', title: 'Mountain Sunrise' },
  { src: '/photos/photo2.jpg', alt: 'Portrait', title: 'Urban Portrait' },
  // Add more images
];

export default function Gallery() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">My Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((photo, index) => (
            <PhotoCard 
              key={index}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
            />
          ))}
        </div>
      </motion.div>
    );
  }