import classes from './modal.module.scss';
import { useForm, ValidationError } from '@formspree/react';

function ContactModal(props) {
  const [state, handleSubmit] = useForm('mdobjbdw');

  if (state.submitting) {
    return (
      <div className={classes.modal}>
        <div
          className={`${classes.contactModal} ${classes.contactModalConfirmation}`}>
          <div>
            <h2>Sending Message</h2>
            <p>
              Just a sec...
              <br />
              Also feel free to contact me via Linkedin:
            </p>
            <div className={classes.linkedinLink}>
              <a
                href='https://www.linkedin.com/in/rene-bitter/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className={classes.modal}>
        <div
          className={`${classes.contactModal} ${classes.contactModalConfirmation}`}>
          <a href='#!' className={classes.close} onClick={props.onClose}>
            <i className='fa fa-xmark'></i>
          </a>
          <div>
            <h2>Thanks for your contact!</h2>
            <p>
              Your message was sent!
              <br />
              Also feel free to contact me via Linkedin:
            </p>
            <div className={classes.linkedinLink}>
              <a
                href='https://www.linkedin.com/in/rene-bitter/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>

          <div className={classes.confirmationButton}>
            <button className='btn btn-outlined' onClick={props.onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.modal}>
      <div className={classes.contactModal}>
        <a href='#!' className={classes.close} onClick={props.onClose}>
          <i className='fa fa-xmark'></i>
        </a>

        <h2>Say hi!</h2>

        <form
          id='contactForm'
          className={classes.contactForm}
          onSubmit={handleSubmit}>
          <div className={classes.row}>
            <div className={classes.inputField}>
              <label htmlFor='email'>Email Address</label>
              <input id='email' type='email' name='email' required />

              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>
          </div>
          <div className={classes.inputField}>
            <textarea id='message' name='message' required />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
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
              <button
                type='submit'
                disabled={state.submitting}
                className='btn btn-filled'>
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactModal;
