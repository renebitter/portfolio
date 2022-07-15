import classes from './modal.module.scss';
import ContactModal from './contactModal';
import { motion, AnimatePresence } from 'framer-motion';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '50vh',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 1,
  },
};

const Modal = (props) => {
  return (
    <>
      {props.contact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
          className={classes.backdrop}
          onClick={props.onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            layout>
            <ContactModal {...props} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default Modal;
