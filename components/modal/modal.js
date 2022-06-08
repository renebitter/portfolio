import classes from './modal.module.scss';
import ContactModal from './contactModal';
import ProjectModal from './projectModal';
import BlogModal from './blogModal';

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />

      {props.contact && <ContactModal {...props} />}

      {props.project && <ProjectModal {...props} />}

      {props.post && <BlogModal {...props} />}
    </>
  );
};
export default Modal;
