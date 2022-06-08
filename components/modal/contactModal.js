import classes from './modal.module.scss';

const ContactModal = (props) => {
  //prop drilling

  return (
    <div className={classes.modal}>
      <div className={classes.contactModal}>
        <h2>Say hi!</h2>
        <form id='contactForm' className={classes.contactForm} action=''>
          <div className={classes.row}>
            <div className={classes.inputField}>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' required />
            </div>

            <div className={classes.inputField}>
              <label htmlFor='email'>E-mail</label>
              <input id='email' type='email' required />
            </div>
          </div>

          <div className={classes.inputField}>
            <label htmlFor='textArea'>Your message here:</label>
            <textarea
              id='textArea'
              className={classes.textarea}
              required></textarea>
          </div>

          <div className={classes.action}>
            <div className={classes.linkedinLink}>
              <a
                href='https://www.linkedin.com/in/rene-bitter/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
            <div className={classes.sendLink}>
              <a href='#!' className='btn btn-filled' onClick={props.onClose}>
                Send Message
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactModal;
