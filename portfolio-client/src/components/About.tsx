import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
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
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 text-gray-900 montserrat">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition ">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed lekton-regular ">
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
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition ">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 montserrat">
                Technical Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed lekton-regular ">
                Hands-on experience with real-world projects including
               AI-integrated solutions, an
               E-Waste Rover, and unique products like
               Whispr and
               SmartCut.
              </p>
            </div>

            {/* Beyond Code */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition ">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 montserrat">
                Beyond Code
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed lekton-regular ">
                Passionate about
               traveling,
               football, and
               sports, which keep me creative and disciplined.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition ">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed lekton-regular ">
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
            className="relative h-20 w-72 flex items-center justify-center bg-neutral-900 text-white font-bold rounded-lg text-lg border border-transparent hover:border-gray-700 hover:bg-gray-800 transition-all shadow-lg hover:shadow-2xl"
          >
            Contact Me
          </a>

          {/* Button 2: Light Opposite */}
          <a
            href="/Krish_Sagar_Resume.pdf"
            download="Krish_Sagar_Resume.pdf"
            className="relative h-20 w-72 flex items-center justify-center bg-white text-gray-900 font-bold rounded-lg text-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
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
            ].map((skill, index) => (
              <span
                key={skill}
                className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
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
