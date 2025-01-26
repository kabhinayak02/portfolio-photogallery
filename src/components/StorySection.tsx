'use client';

import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">My Photographic Journey</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          From bustling city streets to serene landscapes, I capture the essence of human connection 
          and natural beauty. Each photograph is a story waiting to be told, a moment frozen in time 
          that speaks to the diversity and wonder of our world.
        </p>
      </motion.div>
    </section>
  );
}