import classes from './contactModal.module.scss';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

function ContactModal(props) {
  const [state, handleSubmit] = useForm('123xyz'); //TODO: replaceWithYourOwn
  console.log(state);
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
              <a href='#' target='_blank' rel='noreferrer'>
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
              <a href='#' target='_blank' rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>

          <div className={classes.confirmationButton}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='btn btn-filled'
              onClick={props.onClose}>
              OK
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  if (state.errors.length > 0) {
    return (
      <div className={classes.modal}>
        <div
          className={`${classes.contactModal} ${classes.contactModalConfirmation}`}>
          <a href='#!' className={classes.close} onClick={props.onClose}>
            <i className='fa fa-xmark'></i>
          </a>
          <div>
            <h2>Error!</h2>
            <p>
              {state.errors[0].message}
              <br />
              <br />
              Also feel free to contact me via Linkedin:
            </p>
            <div className={classes.linkedinLink}>
              <a href='#' target='_blank' rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>

          <div className={classes.confirmationButton}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='btn btn-filled'
              onClick={props.onClose}>
              OK
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div div className={classes.modal}>
      <div className={classes.contactModal}>
        <a href='#!' className={classes.close} onClick={props.onClose}>
          <i className='fa fa-xmark'></i>
        </a>

        <h2>Contact me</h2>

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
              <a href='#' target='_blank' rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
            <div className={classes.sendLink}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type='submit'
                disabled={state.submitting}
                className='btn btn-filled'>
                Send Message
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactModal;
