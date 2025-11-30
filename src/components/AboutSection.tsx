import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutSectionProps {
  imageUrl: string;
}

export function AboutSection({ imageUrl }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-transparent to-purple-50/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Image/Icon */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={imageUrl}
                alt="About"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Icons */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 flex items-center justify-center gap-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Code2 className="w-8 h-8 text-purple-600" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Palette className="w-8 h-8 text-pink-600" />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl blur-xl opacity-60"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full">
              <Sparkles className="w-30 h-33 text-purple-600" />
              <span className="text-sm text-purple-800">About Me</span>
            </div>

            

            <div className="space-y-4 text-gray-600">
              <p>
               I’m Mohammed Hashil, a passionate B.Tech Computer Science student at AWH Engineering College, driven by curiosity and creativity in building intelligent digital solutions.
              </p>
              <p>
               I love crafting experiences that combine AI, backend logic, and modern design — transforming ideas into functional, scalable, and user-focused applications. My journey in tech has led me through Python, FastAPI, Django, and machine learning, where I’ve developed projects ranging from AI-powered fitness platforms to smart data-driven tools.
              </p>
              <p>
                My approach combines technical expertise with creative design
                thinking, ensuring every project not only works flawlessly but also
                delivers an exceptional user experience.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "5+", label: "Projects" },
                
                
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg"
                >
                  <div className="text-3xl mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
