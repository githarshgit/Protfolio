
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { FileText, ChevronRight, Lock, Eye } from 'lucide-react';
import GlitchText from './GlitchText';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`border-b border-[#00FF41]/30 group transition-all duration-500 overflow-hidden ${isExpanded ? 'bg-[#00FF41]/5' : ''}`}
    >
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-8 md:p-12 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <span className="font-terminal text-[#00FF41]/50 text-sm">{project.id}</span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-[10px] font-terminal border px-2 py-0.5 ${
                project.status === 'CLASSIFIED' ? 'border-red-500 text-red-500' : 
                project.status === 'RESTRICTED' ? 'border-yellow-500 text-yellow-500' : 
                'border-[#00FF41] text-[#00FF41]'
              }`}>
                {project.status}
              </span>
              <span className="text-[10px] font-terminal text-[#00FF41]/50 uppercase tracking-widest">{project.client}</span>
            </div>
            <h3 className="font-brutalist text-4xl md:text-6xl font-black group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-terminal text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {isExpanded ? 'CLOSE_FILE' : 'VIEW_DOSSIER'}
          </span>
          <div className={`p-4 border border-[#00FF41] rounded-full transition-transform duration-500 ${isExpanded ? 'rotate-90 bg-[#00FF41] text-black' : ''}`}>
            {project.status === 'CLASSIFIED' && !isExpanded ? <Lock size={20} /> : <Eye size={20} />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 md:px-12 pb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="relative group/img overflow-hidden border border-[#00FF41]/20">
                  <img src={project.image} alt={project.title} className="w-full grayscale group-hover/img:grayscale-0 transition-all duration-700 scale-110 group-hover/img:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-terminal text-xs bg-[#00FF41]/10 px-3 py-1 text-[#00FF41]">#{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between py-4">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[#00FF41] font-terminal text-xs uppercase tracking-tighter">
                    <FileText size={14} />
                    <span>Executive Summary</span>
                  </div>
                  <p className="font-ui text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-12">
                   <button className="group/btn flex items-center gap-4 font-terminal text-sm border-2 border-[#00FF41] px-8 py-4 hover:bg-[#00FF41] hover:text-black transition-all">
                      REQUEST_FULL_ACCESS <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
