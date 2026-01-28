
import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  // Use React.JSX namespace to fix "Cannot find namespace 'JSX'" error
  as?: keyof React.JSX.IntrinsicElements;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Tag = "span" }) => {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Tag className="relative z-10">{text}</Tag>
      <motion.span
        className="absolute top-0 left-0 w-full h-full text-red-500 opacity-50 z-0 pointer-events-none"
        animate={{
          x: [-1, 1, -1],
          opacity: [0, 0.5, 0],
        }}
        transition={{ repeat: Infinity, duration: 0.1, ease: "linear" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 w-full h-full text-blue-500 opacity-50 z-0 pointer-events-none"
        animate={{
          x: [1, -1, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{ repeat: Infinity, duration: 0.12, ease: "linear" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;
