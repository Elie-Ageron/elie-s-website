import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: 'word' | 'letter';
}

const TextReveal = ({ 
  text, 
  className = '', 
  delay = 0,
  splitBy = 'word'
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const items = splitBy === 'word' ? text.split(' ') : text.split('');
  const separator = splitBy === 'word' ? '\u00A0' : '';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitBy === 'word' ? 0.08 : 0.03,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {items.map((item, index) => (
        <motion.span key={index} variants={itemVariants} style={{ display: 'inline-block' }}>
          {item}{separator}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
