import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import construction from "../assets/construction.webp";
import matchmycare from "../assets/matchmycare.jpeg";
import metafitcalc from "../assets/metafitcalc.webp";
import medilingo from "../assets/medilingo.png";
import civicsense from "../assets/civicsense.webp";

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
  };
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Construction Connect",
      shortDesc:
        "A Django-based platform connecting users with engineers, contractors, and brokers.",
      fullDesc: `Developed a fully functional, role-based web platform using Django, designed to connect users with trusted construction professionals including engineers, contractors, and brokers.

🎯 Key Features:
🔐 Role-Based Registration System – Users can sign up as engineers, contractors, or brokers, each with customized registration flows and approval statuses.
🔍 Searchable Professional Directory – Browse verified professionals based on category and location filters.
🛠 Admin Dashboard – Admin can review, approve, or reject registrations and manage listings.
💬 Contact & Inquiry Forms – Users can send inquiries or contact professionals directly.
📱 Responsive Design – Built with Bootstrap for full cross-device compatibility.
💾 SQLite Database – Data stored securely using Django ORM for efficiency.`,
      image: construction,
      tags: ["Python", "Django", "HTML5", "CSS3", "Bootstrap", "SQLite"],
      links: {
        github: "https://github.com/HASHILnk/Construction-connect.git",
      },
    },
    {
      title: "Match My Care",
      shortDesc:
        "Full-stack Node.js platform connecting clients with nurses and travel guides.",
      fullDesc: `Built a full-stack web application using Node.js and Tailwind CSS that helps clients hire home nurses or travel guides.

🔧 Key Features:
🧾 User & Service Provider Registration – Clients, nurses, and guides with separate registration flows.
🛠 Admin Dashboard – Approve or reject applications and manage service requests.
🔄 Real-Time Status Updates – Admin can manage approval and availability in real time.
🎯 Smart Success Handling – LocalStorage-based success messages after registration.
📱 Responsive Design – Built with Tailwind CSS & SCSS for smooth user experience.`,
      image: matchmycare,
      tags: ["HTML", "Tailwind CSS", "SCSS", "Node.js"],
      links: {
        github: "https://github.com/HASHILnk/Match-my-care.git",
      },
    },
    {
      title: "MetaFitCalc – AI Fitness Calculator",
      shortDesc:
        "AI-powered fitness platform with personalized diet & workout suggestions.",
      fullDesc: `Developed a full-stack AI fitness platform using React, Django, and Gemini API that provides personalized diet and workout recommendations.`,
      image: metafitcalc,
      tags: ["React", "Django", "Gemini API", "Python", "Tailwind"],
      links: {
        github:
          "https://github.com/HASHILnk/MetaFitCalc-AI-Powered-Fitness-Calculator-.git",
      },
    },
    {
      title: "MediLingo – AI Health Report Analyzer",
      shortDesc:
        "Flutter + Django app that converts medical reports into simple summaries.",
      fullDesc: `Built MediLingo, an AI-driven health app that analyzes uploaded medical reports and provides easy-to-understand summaries.`,
      image: medilingo,
      tags: ["Flutter", "Python", "Django", "Gemini API", "OCR"],
      links: {
        github: "https://github.com/HASHILnk/medilingo1.git",
      },
    },
    {
      title: "Civic Sense – Crowdsourced Issue Reporting",
      shortDesc:
        "Crowdsourced web platform for reporting public issues using React and FastAPI.",
      fullDesc: `Developed a full-stack civic engagement web app connecting citizens and municipal officials.`,
      image: civicsense,
      tags: ["React", "FastAPI", "JWT", "SQLite"],
      links: {
        github: "https://github.com/HASHILnk/civic_reporter_backend.git",
      },
    },
  ];

  return (
    <section
  id="projects"
  ref={ref}
  className="relative px-6 bg-white z-10"
  style={{
    paddingTop: "160px",
    paddingBottom: "160px",
    marginTop: "160px",
    marginBottom: "160px",
  }}
>


      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm text-blue-800">Selected Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-semibold">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in design and
            development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl max-w-2xl w-full mx-4 p-8 shadow-2xl relative overflow-y-auto max-h-[85vh]"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-semibold mb-3">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm mb-4">
              {selectedProject.fullDesc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {selectedProject.links.github && (
              <div className="flex justify-end mt-6">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-700 transition"
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}

/* --- Project Card --- */
function ProjectCard({
  project,
  index,
  isInView,
  onOpenModal,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onOpenModal: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
        >
          <button
            onClick={onOpenModal}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <ExternalLink className="w-5 h-5 text-gray-900" />
          </button>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
            >
              <Github className="w-5 h-5 text-gray-900" />
            </a>
          )}
        </motion.div>
      </div>

      {/* Bottom Gradient Section */}
      <div className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-white">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {project.shortDesc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white text-purple-700 text-xs rounded-full border border-purple-100 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
