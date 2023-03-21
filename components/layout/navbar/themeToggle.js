import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = (props) => {
  const { theme } = props;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.i
        className={`fa ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}
        key={theme === 'light' ? 'moon' : 'sun'}
        initial={{ x: -25, y: 5, opacity: 1 }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        exit={{ x: 25, y: 5, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.4 }}
      />
    </AnimatePresence>
  );
};

export default ThemeToggle;
