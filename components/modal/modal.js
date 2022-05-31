import classes from './modal.module.scss';
import Image from 'next/image';

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        {props.contact && (
          <div className={classes.contactModal}>
            <h2>Contact</h2>
            <form id='contactForm' className={classes.contactForm} action=''>
              <div className={classes.row}>
                <div className={classes.inputField}>
                  <input id='name' type='text' className='validate' />
                  <label htmlFor='name'>Name</label>
                </div>
                <div className={classes.inputField}>
                  <input id='email' type='email' className='validate' />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>

              <div className={classes.inputField}>
                <textarea id='textArea' className={classes.textarea}></textarea>
                <label htmlFor='textArea'>Your message here...</label>
              </div>

              <div className={classes.action}>
                <a href='#!' className='btn btn-filled' onClick={props.onClose}>
                  Send
                </a>
              </div>
            </form>
          </div>
        )}

        {props.project && (
          <div className={classes.projectModal}>
            <h2>Project Name</h2>
            <div className='main'>
              <div className='project-row'>
                <div className='images'>
                  <div className='image'>
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
                </div>

                <div className='text'>
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
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur nostrum optio culpa enim! Natus nam fuga
                    architecto incidunt quo totam tempora iusto, modi labore,
                    maxime explicabo quisquam sequi harum necessitatibus?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil est quasi explicabo suscipit esse, iure officiis aut
                    voluptate repellendus quis quos hic eius natus eligendi
                    maxime, alias incidunt officia minima.
                  </p>
                </div>
              </div>
              <div className='flowchart'>
                <Image
                  src='https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80'
                  width={500}
                  height={360}
                  alt=''
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Modal;
