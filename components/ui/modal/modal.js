import classes from './modal.module.scss';
import ContactModal from './contactModal';
import { motion } from 'framer-motion';

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: '50vh',
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '150vh',
  },
};

const Modal = (props) => {
  return (
    <>
      {props.contact && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.backdrop}
          onClick={props.onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'>
            <ContactModal {...props} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default Modal;
