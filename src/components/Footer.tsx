import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-hashil-nk-datascientist", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative py-12 px-6 bg-gradient-to-t from-gray-50 to-transparent border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center items-center gap-8"  // increased spacing
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] group"
            >
              <social.icon className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="mt-8 flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
        >
          <span>Back to top</span>
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↑
          </motion.span>
        </motion.button>
      </div>
    </footer>
  );
}
