import classes from './portfolio.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/modal';
import projects from '../../data/projects.json';

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

        {projects.map((project) => (
          <div key={project._id} className={classes.project}>
            <div className={classes.row}>
              <div className={classes.columnLeft}>
                <h3>{project.title}</h3>
                <small>{project.subtitle}</small>
                <p className={classes.description}>{project.description}</p>

                <div className={classes.portfolioLinks}>
                  <a href={project.liveLink} target='_blank' rel='noreferrer'>
                    <i className='fas fa-link'></i>
                    Live
                  </a>
                  <a href={project.githubLink} target='_blank' rel='noreferrer'>
                    <i className='fab fa-github'></i>
                    Github
                  </a>
                </div>
              </div>

              <div className={classes.columnRight}>
                <div className={classes.card}>
                  <a href='#!' onClick={showModalHandler}>
                    <Image
                      src={project.image}
                      width={500}
                      height={360}
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && <Modal project onClose={closeModalHandler} />}
    </section>
  );
};
export default Portfolio;
