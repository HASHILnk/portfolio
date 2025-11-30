import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, ExternalLink, Trophy, Star } from "lucide-react";
import iHack from "../assets/i.Hack.jpg";
import nielitCert from "../assets/NIELIT_Certificate.pdf";
import vueCert from "../assets/vue.js Certificate.pdf";
import pythonCert from "../assets/python developer.png";
import fastapiCert from "../assets/Fastapi.pdf";
import dataAnalytics from "../assets/Data analytics- Deloitte.pdf";


interface Certificate {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  color: string;
  link: string;
}

const certificates = [
  {
    title: "Python Developer",
    issuer: "Sololearn",
    date: "March 2025",
    logo: "🐍",
    // color: "from-green-400 to-emerald-500",
    link: pythonCert,
  },
  {
    title: "FastAPI Certification",
    issuer: "FastAPI",
    date: "January 2025",
    logo: "⚡",
    // color: "from-cyan-400 to-teal-400",
    link: fastapiCert,
  },
  {
    title: "Data Analytics Virtual Internship",
    issuer: "Deloitte",
    date: "February 2025",
    logo: "📊",
    // color: "from-blue-400 to-indigo-400",
    link: dataAnalytics,
  },
  {
    title: "Vue.js Developer Certification",
    issuer: "Coursera",
    date: "December 2024",
    logo: "💚",
    // color: "from-emerald-400 to-lime-400",
    link: vueCert,
  },
  {
    title: "i.Hack 2025 Participation",
    issuer: "IEEE JECC & CSI JECC",
    date: "August 2025",
    logo: "💻",
    // color: "from-purple-400 to-pink-500",
    link: iHack,
  },
  {
    title: "Allied Technologies for UAS/Drone",
    issuer: "NIELIT Calicut",
    date: "February 2025",
    logo: "🚁",
    // color: "from-amber-400 to-orange-500",
    link: nielitCert,
  },
];


export function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const completedCertificates = certificates.length;
  const totalCertificates = 10;
  const progressPercentage = (completedCertificates / totalCertificates) * 100;

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-blue-50/20"
    >
      {/* Floating Background Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-1/4 opacity-10"
      >
        <Star className="w-12 h-12 text-purple-400" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-1/4 opacity-10"
      >
        <Award className="w-16 h-16 text-pink-400" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-full mb-4">
            <Trophy className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-800">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Continuous learning and professional development through recognized
            certifications
          </p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${progressPercentage}%` } : { width: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full relative"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              certificate={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Certificate Card Component */
function CertificateCard({
  certificate,
  index,
  isInView,
}: {
  certificate: Certificate;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Gradient Header */}
      <div className={`relative h-24 bg-gradient-to-r ${certificate.color} p-6`}>
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl text-3xl"
        >
          {certificate.logo}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
            {certificate.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Award className="w-4 h-4" />
            <span>{certificate.issuer}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{certificate.date}</p>
        </div>

        {/* View Button */}
        <motion.a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all group/button relative overflow-hidden"
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover/button:opacity-10 transition-opacity`}
          />
          <span className="relative z-10 text-sm text-gray-700 group-hover/button:text-purple-700 transition-colors">
            View Certificate
          </span>
          <ExternalLink className="relative z-10 w-4 h-4 text-gray-500 group-hover/button:text-purple-600 group-hover/button:translate-x-1 transition-all" />
        </motion.a>
      </div>
    </motion.div>
  );
}
