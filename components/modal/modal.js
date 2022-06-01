import classes from './modal.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />

      {props.contact && (
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
                <a href='#!' className='btn btn-filled' onClick={props.onClose}>
                  Send Message
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {props.project && (
        <div className={classes.modal}>
          <div className={classes.projectModal}>
            <h2>Project Name</h2>
            <div className={classes.main}>
              <div className={classes.projectRow}>
                <div className={classes.image}>
                  <Image
                    src='https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80'
                    width={500}
                    height={360}
                    alt=''
                  />
                  <div className={classes.modalLinks}>
                    <a
                      href='https://nextjs-blog-renebitter.vercel.app/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fas fa-link'></i>
                      Live
                    </a>
                    <a
                      href='https://github.com/renebitter/nextjs-blog'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fab fa-github'></i>
                      Github
                    </a>
                  </div>
                </div>

                <div className={classes.description}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, vitae suscipit distinctio labore aut sequi?
                    Dolores, placeat labore doloribus, dolor excepturi quam
                    consectetur vel illum quibusdam voluptas laudantium, debitis
                    sapiente!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem quo modi voluptatibus ratione, inventore iure atque
                    sapiente tempore velit quod. Ab perferendis aspernatur amet
                    porro aliquid officiis rerum maiores voluptates?
                  </p>
                </div>
              </div>
              <div className={classes.flowchart}>
                <Image
                  src='https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80'
                  width={500}
                  height={360}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
