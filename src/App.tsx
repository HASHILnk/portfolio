import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1695634184046-93d24e779ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjQyNDA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "Stripe"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjQyMzc0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["TypeScript", "Firebase", "Tailwind"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Design System",
    description:
      "Comprehensive UI component library with documentation and accessibility features.",
    image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MjUzMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Storybook", "CSS"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio site with smooth animations and interactive elements.",
    image: "https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NDMyNjczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Motion", "WebGL"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard with data visualization and social media integration.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0Mjk1OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Chart.js", "API"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure mobile banking interface with biometric authentication.",
    image: "https://images.unsplash.com/photo-1695634184046-93d24e779ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjQyNDA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Security", "UX"],
    links: { live: "#" },
  },
];

import profileImg from "./assets/profile3.jpg";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      {/* using local profile asset - replace src/assets/profile-photo.svg with your photo */}
      <HeroSection imageUrl={profileImg} />
      <AboutSection imageUrl="https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NDMyNjczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      <ProjectsSection projects={projects} />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
