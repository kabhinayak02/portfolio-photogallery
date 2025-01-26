'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      // TODO: Animate image 
      <Image 
        src="/photos/photo2.jpg" 
        alt="Wandering Lens Hero" 
        fill
        priority
        className="object-cover"
      />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-30"
      >
        <h1 className="text-5xl font-bold mb-4">Wandering Lens</h1>
        <p className="text-xl max-w-2xl px-4">
          Exploring the world through moments, landscapes, and unexpected stories
        </p>
      </motion.div>
    </div>
  );
}


// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// export default function HeroSection() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;

//   return (
//     <div className="relative h-[70vh] w-full overflow-hidden">
//       <Image 
//         src="/images/hero-landscape.jpg" 
//         alt="Wandering Lens Hero" 
//         fill
//         priority
//         className="object-cover"
//       />
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-30"
//       >
//         <h1 className="text-5xl font-bold mb-4">Wandering Lens</h1>
//         <p className="text-xl max-w-2xl px-4">
//           Exploring the world through moments, landscapes, and unexpected stories
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// export default function HeroSection() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return (
//       <div className="relative h-[70vh] w-full bg-gray-100 overflow-hidden">
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-500 text-center">
//           <h1 className="text-5xl font-bold mb-4">Wandering Lens</h1>
//           <p className="text-xl max-w-2xl px-4">
//             Exploring the world through moments, landscapes, and unexpected stories
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-[70vh] w-full overflow-hidden">
//       <Image 
//         src="/images/hero-landscape.jpg" 
//         alt="Wandering Lens Hero" 
//         fill
//         priority
//         className="object-cover"
//       />
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-30"
//       >
//         <h1 className="text-5xl font-bold mb-4">Wandering Lens</h1>
//         <p className="text-xl max-w-2xl px-4">
//           Exploring the world through moments, landscapes, and unexpected stories
//         </p>
//       </motion.div>
//     </div>
//   );
// }