import classes from './modal.module.scss';
import ContactModal from './contactModal';
import ProjectModal from './projectModal';

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />

      {props.contact && <ContactModal {...props} />}

      {props.project && <ProjectModal {...props} />}
    </>
  );
};
export default Modal;
