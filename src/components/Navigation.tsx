import { motion } from "motion/react";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-xl tracking-tight">Portfolio</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Experience", "Certificates", "Contact"].map(
              (item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {item}
                </motion.button>
              )
            )}
          </div>

          {/* Download CV Button */}
          <a href="/mohammed_hashil_cv.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-black/90 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Download CV</span>
            </motion.button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
