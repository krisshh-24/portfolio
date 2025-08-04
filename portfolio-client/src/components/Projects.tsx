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
    demoLink: "",
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
    <section id="projects" className="bg-gray-50 py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-900 montserrat">My Projects</h2>
        <p className="text-gray-500 mt-4 text-lg ">
          Here are some of the projects I've built recently.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-sm "
          >
            {/* Project Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 lekton-bold">{project.title}</h3>
              <p className="text-gray-500 mb-4 lekton-regular">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
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
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition"
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
