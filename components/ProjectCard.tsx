
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { FileText, ChevronRight, ChevronLeft, Eye, X } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  const closeLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(false);
  };

  return (
    <>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-2 md:p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 md:top-4 md:right-4 p-2 md:p-3 bg-black border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all z-10"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(e); }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(e); }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all z-10"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Full Size Image - No Effects */}
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 md:px-4 md:py-2 bg-black border border-[#00FF41] font-terminal text-xs md:text-sm text-[#00FF41]">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className={`border-b border-[#00FF41]/30 group transition-all duration-500 overflow-hidden ${isExpanded ? 'bg-[#00FF41]/5' : ''}`}
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 md:p-6 cursor-pointer flex items-center justify-between gap-3 md:gap-4"
        >
          <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
            <span className="font-terminal text-[#00FF41]/50 text-xs md:text-sm shrink-0">#{project.id}</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1 md:mb-2">
                <span className={`text-[8px] md:text-[10px] font-terminal border px-1.5 md:px-2 py-0.5 shrink-0 ${project.status === 'IN_PROGRESS' ? 'border-yellow-500 text-yellow-500' :
                  'border-[#00FF41] text-[#00FF41]'
                  }`}>
                  {project.status}
                </span>
                <span className="text-[8px] md:text-[10px] font-terminal text-[#00FF41]/50 uppercase tracking-wider truncate">{project.category}</span>
              </div>
              <h3 className="font-brutalist text-sm md:text-2xl font-black group-hover:text-white transition-colors duration-300 break-words">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <span className="hidden md:block font-terminal text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {isExpanded ? 'CLOSE' : 'VIEW'}
            </span>
            <div className={`p-2 md:p-3 border border-[#00FF41] rounded-full transition-transform duration-500 ${isExpanded ? 'rotate-90 bg-[#00FF41] text-black' : ''}`}>
              <Eye size={14} />
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
              className="px-3 md:px-6 pb-4 md:pb-6"
            >
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="space-y-3 md:space-y-4">
                  {/* Image Carousel - Click to open lightbox */}
                  <div
                    className="relative group/img overflow-hidden border border-[#00FF41]/20 cursor-zoom-in"
                    onClick={openLightbox}
                  >
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full aspect-video object-cover"
                    />

                    {/* Tap to expand hint - only on desktop */}
                    <div className="hidden md:flex absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity items-center justify-center">
                      <span className="font-terminal text-white text-sm bg-black/70 px-3 py-1 border border-white/30">
                        TAP TO EXPAND
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-black/70 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-black/70 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all"
                        >
                          <ChevronRight size={16} />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 md:px-3 md:py-1 bg-black/70 border border-[#00FF41]/50 font-terminal text-[10px] md:text-xs text-[#00FF41]">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Image Dots */}
                  {project.images.length > 1 && (
                    <div className="flex justify-center gap-1.5 md:gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#00FF41] w-3 md:w-4' : 'bg-[#00FF41]/30'}`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-terminal text-[10px] md:text-xs bg-[#00FF41]/10 px-2 md:px-3 py-0.5 md:py-1 text-[#00FF41]">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 md:space-y-6">
                  <div className="flex items-center gap-2 text-[#00FF41] font-terminal text-[10px] md:text-xs uppercase tracking-tighter">
                    <FileText size={12} />
                    <span>Description</span>
                  </div>
                  <p className="font-ui text-sm md:text-lg text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectCard;
