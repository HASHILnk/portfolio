import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Zap,
  Cpu,
  Database,
  BarChart,
  Users,
  Lightbulb,
  Puzzle,
  Brain,
  Repeat,
} from "lucide-react";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Junior Data Scientist Intern",
    company: "Codeme Hub International · Kozhikode",
    period: "Jun 2025 – Aug 2025",
    description:
      "Visualized and analyzed business data using Power BI and Excel. Delivered actionable insights using Python, pandas, and SQL for decision-making.",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "AWH Engineering College, Kuttikattoor (KTU)",
    period: "Nov 2022 – May 2026 (Expected)",
    description:
      "Focused on software development, backend systems, and AI integration. Built multiple academic and personal projects using Django, FastAPI, and Flutter.",
  },
];

const technicalSkills = [
  { name: "Python", icon: Code, color: "from-yellow-500 to-orange-500" },
  { name: "Django", icon: Cpu, color: "from-green-600 to-emerald-500" },
  { name: "FastAPI", icon: Zap, color: "from-teal-500 to-cyan-500" },
  { name: "Odoo", icon: Database, color: "from-purple-600 to-pink-500" },
  { name: "React", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Flutter", icon: Palette, color: "from-blue-400 to-indigo-500" },
  { name: "Tailwind CSS", icon: Code, color: "from-cyan-500 to-blue-500" },
  { name: "Power BI", icon: BarChart, color: "from-yellow-400 to-orange-400" },
  { name: "SQL & SQLite", icon: Database, color: "from-indigo-500 to-violet-500" },
  { name: "Git & Version Control", icon: Cpu, color: "from-gray-600 to-gray-400" },
];

const softSkills = [
  { name: "Collaboration", icon: Users, color: "from-green-400 to-emerald-400" },
  { name: "Problem Solving", icon: Puzzle, color: "from-blue-400 to-indigo-400" },
  { name: "Analytical Thinking", icon: Brain, color: "from-purple-400 to-pink-400" },
  { name: "Adaptability", icon: Repeat, color: "from-orange-400 to-yellow-400" },
  { name: "Continuous Learning", icon: Lightbulb, color: "from-cyan-400 to-teal-400" },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 px-6 bg-gradient-to-b from-purple-50/30 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm text-purple-800">Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Experience & Skills
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Journey (Left) */}
          <div className="space-y-8">
            <h3 className="text-2xl mb-8">Journey</h3>
            <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  experience={exp}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Skills (Right) */}
          <div className="space-y-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <SkillBadge
                    key={index}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <SkillBadge
                    key={index}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Timeline Card - Unchanged */
function TimelineItem({
  experience,
  index,
  isInView,
}: {
  experience: ExperienceItem;
  index: number;
  isInView: boolean;
}) {
  const Icon = experience.type === "work" ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Dot Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all group cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="mb-1 text-lg">{experience.title}</h4>
            <p className="text-sm text-gray-600">{experience.company}</p>
            <p className="text-xs text-purple-600 mb-2">{experience.period}</p>
            <p className="text-sm text-gray-600">{experience.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Modern Skill Badge */
function SkillBadge({
  skill,
  index,
  isInView,
}: {
  skill: { name: string; icon: any; color: string };
  index: number;
  isInView: boolean;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -2, scale: 1.05 }}
      className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-transparent hover:shadow-md transition-all cursor-pointer"
    >
      <div
        className={`w-6 h-6 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}
      >
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}
