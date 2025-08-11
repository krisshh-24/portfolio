import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.02)_1px,_transparent_0)] bg-[size:50px_50px]" />
      
      {/* Elegant Accent Elements */}
      <div className="absolute top-1/3 left-[-100px] w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-[-100px] w-64 h-64 bg-gradient-to-l from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Left Section */}
      <div className='text-left md:flex-1 text-center font-secondary mt-30 z-10'>
        <motion.h1
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className='text-2xl font-bold leading-[0.8] lg:text-[110px] mb-4 text-white'
        >
          Hi! I'm <span className="text-white bg-clip-text">Krish</span>
        </motion.h1>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className='mb-6 text-4xl lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
        >
          <span className='text-gray-300 mr-4'>I:</span>
          <TypeAnimation
            sequence={[
              'Make Websites', 1500,
              'Create Designs', 1500,
              'Play Football', 1500,
              'Travel the World', 1500,
              'Build Cool Stuff', 1500
            ]}
            speed={50}
            className='bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text'
            wrapper='span'
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='mb-8 max-w-lg mx-auto text-gray-400 lg:mx-0 text-lg lekton-regular'
        >
          Currently a final-year student at BIT Mesra, also Secretary of Alumni Associations and a Senior Executive Member at UNESQUO.Passionate about tech, creativity, and innovation.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto w-[300px] lg:mx-0'
        >
<a
  href="#contact"
  className="relative bg-white text-black h-15 w-72 flex items-center justify-center border border-gray-300 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:text-black hover:border-gray-400 shadow-lg"
>
  Contact Me
</a>


<a
  href="#projects"
  className="relative bg-transparent text-white h-15 w-72 flex items-center justify-center border border-gray-600 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg"
>
  My Projects
</a>



        </motion.div>
      </div>

      {/* Right Section - Morphing Blobs */}
      <div className="hidden md:block relative w-[400px] h-[400px] mr-20">
        {/* Blob 1 */}
        <motion.div
          className="absolute top-0 left-0 w-80 h-80 overflow-hidden  shadow-2xl"
          style={{ borderRadius: "50%", boxShadow: "0 0 10px" }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 3, -3, 0],
            borderRadius: ["50%", "60% 40% 50% 50%", "45% 55% 60% 40%", "50%"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/photo.jpg" alt="Krish" className="w-full h-full object-cover" />
        </motion.div>

        {/* Blob 2 */}
        <motion.div
          className="relative top-70 left-30 w-72 h-72 overflow-hidden  shadow-xl opacity-90"
          style={{ borderRadius: "50%", boxShadow: "0 0 10px" }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0],
            borderRadius: ["50%", "60% 40% 50% 50%", "45% 55% 60% 40%", "50%"],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/photo2.jpg" alt="Second" className="w-full h-full object-cover" />
        </motion.div>

        {/* Blob 3 */}
        <motion.div
          className="absolute top-70 right-70 w-64 h-64 overflow-hidden  shadow-lg opacity-80"
          style={{ borderRadius: "50%", boxShadow: "0 0 10px" }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
            borderRadius: ["50%", "60% 40% 50% 50%", "45% 55% 60% 40%", "50%"],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/photo3.JPG" alt="Third" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
