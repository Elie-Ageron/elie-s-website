import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: 'word' | 'letter';
}

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const TextReveal = ({
  text,
  className = '',
  delay = 0,
  splitBy = 'word',
}: TextRevealProps) => {
  const items = splitBy === 'word' ? text.split(' ') : text.split('');
  const separator = splitBy === 'word' ? '\u00A0' : '';

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitBy === 'word' ? 0.07 : 0.025,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
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
