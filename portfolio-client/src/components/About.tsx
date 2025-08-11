import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Minimal Accent Lines */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl w-full text-center relative z-10"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 text-white montserrat">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        {/* Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 mb-12"
        >
          {/* Intro */}
          <div className="bg-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed lekton-regular ">
              I'm Krish Sagar, a passionate
             full-stack web developer and
              final-year B.Tech student at BIT Mesra. My expertise lies in
             MERN stack, Next.js, TypeScript, and building
              modern web applications.
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Excellence */}
            <div className="bg-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 montserrat">
                Technical Excellence
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed lekton-regular ">
                Hands-on experience with real-world projects including
               AI-integrated solutions, an
               E-Waste Rover, and unique products like
               Whispr and
               SmartCut.
              </p>
            </div>

            {/* Beyond Code */}
            <div className="bg-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 montserrat">
                Beyond Code
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed lekton-regular ">
                Passionate about
               traveling,
               football, and
               sports, which keep me creative and disciplined.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed lekton-regular ">
              My ultimate goal is to combine
             technology,
             design, and
             innovation to build
              products that make life easier and more meaningful.
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          {/* Button 1: Dark */}
          <a
            href="#contact"
            className="relative h-20 w-72 flex items-center justify-center bg-white text-black font-bold rounded-lg text-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl"
          >
            Contact Me
          </a>

          {/* Button 2: Light Opposite */}
          <a
            href="/Krish_Sagar_Resume.pdf"
            download="Krish_Sagar_Resume.pdf"
            className="relative h-20 w-72 flex items-center justify-center bg-transparent text-white font-bold rounded-lg text-lg border border-gray-600 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'Next.js',
              'Express',
              'Tailwind CSS',
              'AI Integration',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-zinc-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-zinc-700/50 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
