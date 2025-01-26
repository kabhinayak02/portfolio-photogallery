'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const collections = [
  {
    title: 'Landscapes',
    image: '/photos/photo1.jpg',
    slug: 'landscapes'
  },
  {
    title: 'Street Photography',
    image: '/images/street-preview.jpg',
    slug: 'street'
  },
  {
    title: 'Travel Moments',
    image: '/images/travel-preview.jpg',
    slug: 'travel'
  }
];

export default function CollectionPreview() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">My Collections</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <motion.div
            key={collection.slug}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link href={`/gallery/${collection.slug}`}>
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src={collection.image} 
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-bold">
                    {collection.title}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

