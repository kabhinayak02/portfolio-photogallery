// 'use client';

// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-2xl mx-auto text-center"
//     >
//       <h1 className="text-3xl font-bold mb-6">About Me</h1>
//       <p className="text-gray-600 mb-4">
//         I'm a passionate photographer who loves capturing the beauty of moments.
//         My work focuses on landscapes, portraits, and storytelling through images.
//       </p>
//     </motion.div>
//   );
// }

'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About My Lens</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Photography Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            Photography is more than capturing images—it's about telling stories that often go unnoticed. 
            My work seeks to find beauty in the mundane, to highlight the extraordinary within the ordinary. 
            Whether it's a quiet street corner or a vast landscape, each frame is an invitation to pause, 
            observe, and connect with the world around us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-700 leading-relaxed">
            A wanderer with a camera, constantly exploring the intersection of human experience and natural beauty. 
            My journey has taken me through diverse landscapes and urban environments, each destination 
            adding a new layer to my visual narrative.
          </p>
        </section>
      </motion.div>
    </div>
  );
}