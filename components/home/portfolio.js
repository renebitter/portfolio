import classes from './portfolio.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/modal';

const Portfolio = () => {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <section className={classes.portfolio} id='portfolio'>
      <div className={classes.container}>
        <h2>Featured projects</h2>

        <div className={classes.project}>
          <div className={classes.row}>
            <div className={classes.columnLeft}>
              <h3>Fullstack eCommerce Website based on the MERN Stack</h3>
              <small>React, Redux, Mongo, Node, Express</small>
              <p className={classes.description}>
                Build with React and Redux for it&apos;s state management, this
                is a fully functional e-commerce website includiding payment,
                admin user, etc.
              </p>

              <div className={classes.portfolioLinks}>
                <a
                  href='https://mernshop-99.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fas fa-link'></i>
                  Live
                </a>
                <a
                  href='https://github.com/renebitter/mernshop'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-github'></i>
                  Github
                </a>
              </div>
            </div>

            <div className={classes.columnRight}>
              <div className={classes.card}>
                <a href='#!' onClick={showModalHandler}>
                  <Image
                    src='https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80'
                    width={500}
                    height={360}
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <div className={classes.row}>
            <div className={classes.columnLeft}>
              <h3>Bolg Website using Next.js</h3>
              <small>Next.js</small>
              <p className={classes.description}>
                Static website using Next.js&apos;s getStaticProps() &
                getStaticPaths().
              </p>

              <div className={classes.portfolioLinks}>
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

            <div className={classes.columnRight}>
              <div className={classes.card}>
                <Image
                  src='https://images.unsplash.com/photo-1642132652860-471b4228023e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80'
                  width={500}
                  height={360}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <div className={classes.row}>
            <div className={classes.columnLeft}>
              <h3>Fullstack Logger App using the MERN Stack</h3>
              <small>React, Redux, Mongo, Node, Express</small>
              <p className={classes.description}>CRUD functionality</p>

              <div className={classes.portfolioLinks}>
                <a
                  href='https://mernshop-99.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fas fa-link'></i>
                  Live
                </a>
                <a
                  href='https://github.com/renebitter/mernshop'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-github'></i>
                  Github
                </a>
              </div>
            </div>

            <div className={classes.columnRight}>
              <div className={classes.card}>
                <Image
                  src='https://images.unsplash.com/photo-1642132652809-8c6ab1971169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80'
                  width={500}
                  height={360}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal project onClose={closeModalHandler} />}
    </section>
  );
};
export default Portfolio;
