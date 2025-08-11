import { motion } from "framer-motion";

const projects = [
  {
    title: "Whispr",
    description: "An AI-powered anonymous chatting platform.",
    tech: ["NextJs", "Tailwind", "OpenAI"],
    image: "whispr.png",
    demoLink: "#",
    githubLink: "https://github.com/krisshh-24/WhisprApp",
  },
  {
    title: "SmartCut",
    description: "AI-driven SaaS App video clipping tool for content creators.",
    tech: ["Next.js", "Tailwind", "AI APIs"],
    image: "Smartcut.png",
    demoLink: "https://smartcut-inky.vercel.app/sign-in?redirect_url=https%3A%2F%2Fsmartcut-inky.vercel.app%2F",
    githubLink: "https://github.com/krisshh-24/image-edit-saas",
  },
  {
    title: "Real-time Video Broadcasting Platform",
    description: "Built a scalable live-streaming platform using FFmpeg, RTMP, and Node.js, enabling real-time video broadcasting.",
    tech: ["React", "Socket io", "NodeJs"],
    image: "orm.png",
    demoLink: "#",
    githubLink: "https://github.com/krisshh-24/LiveStreamApp",
  },
  {
    title: "Git Critic",
    description: "Built a Github roasting app where people can compare there github profile with other people",
    tech: ["NextJs", "Tailwind", "Gemini"],
    image: "git.webp",
    demoLink: "https://gitcritic.vercel.app/",
    githubLink: "https://github.com/krisshh-24/github-roaster",
  },
  {
    title: "E-Waste Rover",
    description: "Hackathon-winning IoT-based rover for e-waste detection.",
    tech: ["Raspberry Pi", "MQ Sensors", "Python"],
    image: "rover.png",
    demoLink: "#",
    githubLink: "#",
  },

];

const Projects = () => {
  return (
        <section id="projects" className="bg-gradient-to-br from-zinc-950 via-black to-zinc-950 py-20 px-6 relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,_119,_198,_0.05)_0%,_transparent_50%),_radial-gradient(circle_at_80%_20%,_rgba(120,_119,_198,_0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.005)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.005)_1px,_transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-semibold text-white montserrat">My Projects</h2>
        <p className="text-gray-400 mt-4 text-lg ">
          Here are some of the projects I've built recently.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800/30 overflow-hidden hover:border-zinc-700/50 transition-all duration-300 group"
          >
            {/* Project Image */}
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2 lekton-bold">{project.title}</h3>
              <p className="text-gray-400 mb-4 lekton-regular">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-800/50 border border-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
