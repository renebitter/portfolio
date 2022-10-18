import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = (props) => {
  const { theme } = props;

  return (
    <div>
      <motion.div layout className='handle'>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.i
            className={`fa ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}
            key={theme === 'light' ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0, rotate: 50 }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 360,
            }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
