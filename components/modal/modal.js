import classes from './modal.module.scss';
import ContactModal from './contactModal';

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />

      {props.contact && <ContactModal {...props} />}
    </>
  );
};
export default Modal;
