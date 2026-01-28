
import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Zap, Github, Linkedin, Mail } from 'lucide-react';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';
import GlitchText from './components/GlitchText';
import { PROJECTS } from './constants';

// === CONFIGURATION - Update these with your actual links ===
const SOCIAL_LINKS = {
  github: 'https://github.com/githarshgit',
  linkedin: 'https://linkedin.com/in/harshkumar-ison-linked-in',
  email: 'mailto:connectwithharshkumar@gmail.com',
  resume: '/resume.pdf' // Put your resume in public folder
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link to="/" className="pointer-events-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-brutalist text-2xl font-black tracking-tighter"
          >
            <div className="w-12 h-12 bg-[#00FF41] flex items-center justify-center text-black uppercase">HK</div>
          </motion.div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto bg-black border border-[#00FF41] p-3 hover:bg-[#00FF41] hover:text-black transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center p-12 pointer-events-auto"
      >
        <div className="flex flex-col gap-8 text-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-brutalist text-6xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="font-brutalist text-6xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-brutalist text-6xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors"
          >
            CONTACT
          </button>
        </div>
        <div className="absolute bottom-12 flex gap-8 text-[#00FF41] font-terminal text-sm">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
            <Github size={16} /> GITHUB
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
            <Linkedin size={16} /> LINKEDIN
          </a>
          <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer" className="hover:underline">
            RESUME
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden pt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00FF41_0%,_transparent_70%)]"></div>
      </div>

      <div className="max-w-screen-xl w-full relative z-10 text-center space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-[#00FF41] text-[#00FF41] font-terminal text-xs tracking-widest uppercase mb-4"
        >
          <Zap size={14} className="animate-pulse" /> IoT and Software Developer
        </motion.div>

        <div className="relative w-full flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -top-20 -left-12 md:-top-24 md:-left-0 flex flex-col gap-2 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 font-brutalist text-2xl md:text-3xl font-black tracking-tighter text-left"
              >
                <div className="w-12 h-10 bg-[#00FF41] flex items-center justify-center text-black">Hi</div>
                <span className="text-[#00FF41]">There,</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 font-brutalist text-2xl md:text-3xl font-black tracking-tighter ml-6 md:ml-12 text-left"
              >
                <div className="w-10 h-10 bg-[#00FF41] flex items-center justify-center text-black">I</div>
                <span className="text-[#00FF41]">'m</span>
              </motion.div>
            </div>

            <h1 className="font-brutalist text-6xl md:text-[9.5rem] font-black leading-[0.85] tracking-tighter text-white text-center w-full">
              <GlitchText text="HARSH" className="block" />
              <span className="text-[#00FF41]">
                KUMA<span className="inline-block scale-x-[-1]">R</span>
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mt-12 font-ui text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
          >
            I build <span className="text-[#00FF41] font-bold">intelligent systems</span> where hardware meets AI — from embedded devices and IoT platforms to data-driven decision engines and modern mobile applications.
          </motion.p>
        </div>

        <div className="mt-12 text-center border-t border-[#00FF41]/20 pt-12 w-full max-w-2xl">
          <div className="space-y-6">
            <h4 className="font-terminal text-[#00FF41] text-sm uppercase tracking-widest">
              Tech Stack
            </h4>

            <ul className="font-terminal text-sm text-[#00FF41]/80 space-y-1">
              <li>{'>'} EMBEDDED SYSTEMS // FIRMWARE DEVELOPMENT</li>
              <li>{'>'} REAL-TIME SYSTEMS // SENSOR INTERFACING</li>
            </ul>

            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} ARDUINO // ESP32 // NODEMCU // RP2040</li>
              <li>{'>'} PCB DESIGN // CIRCUIT DESIGN // 3D PRINTING</li>
            </ul>

            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} C++ // PYTHON // DART // FLUTTER</li>
              <li>{'>'} BLE // MQTT // WIFI // AWS IOT // FIREBASE</li>
            </ul>

            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} EDGE AI // MACHINE LEARNING // COMPUTER VISION</li>
              <li>{'>'} FASTAPI // FLASK // REST APIS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-[#00FF41]/20">
      <div className="px-6 md:px-12 mb-24">
        <h2 className="font-brutalist text-6xl md:text-8xl font-black text-white mb-4">PROJECTS</h2>
      </div>

      <div className="border-t border-[#00FF41]/30">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-black border-t border-[#00FF41]/20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        <div className="space-y-8">
          <div className="font-brutalist text-4xl font-black text-white">
            LET'S <span className="text-[#00FF41]">CONNECT</span>
          </div>
          <p className="max-w-md font-ui text-gray-400 text-xl leading-relaxed">
            Actively seeking collaborations in Edge AI, IoT Systems Design, and Embedded Hardware. Feel free to reach out!
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={SOCIAL_LINKS.email}
              className="bg-[#00FF41] text-black font-terminal font-bold px-8 py-4 uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00FF41] text-[#00FF41] font-terminal font-bold px-8 py-4 uppercase tracking-widest hover:bg-[#00FF41]/10 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24 font-terminal text-sm">
          <div className="space-y-4">
            <h5 className="text-[#00FF41] font-bold">NAVIGATE</h5>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#hero" className="hover:text-white transition-colors">HOME</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">PROJECTS</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#00FF41] font-bold">CONNECT</h5>
            <ul className="space-y-2 text-gray-500">
              <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Github size={14} /> GitHub</a></li>
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.email} className="hover:text-white transition-colors flex items-center gap-2"><Mail size={14} /> Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-[#00FF41]/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-terminal text-[#00FF41]/40 uppercase tracking-widest">
        <span>© 2025 HARSH KUMAR // ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00FF41] z-[100] origin-left"
        style={{ scaleX }}
      />
      <Hero />
      <ProjectSection />
      <Footer />
      <Terminal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
