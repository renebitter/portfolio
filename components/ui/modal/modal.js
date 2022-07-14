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
    opacity: 0,
  },
};

const Modal = (props) => {
  return (
    <>
      {/* <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        // initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}> */}
      {props.contact && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
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
        </AnimatePresence>
      )}
      {/* </AnimatePresence> */}
    </>
  );
};
export default Modal;
