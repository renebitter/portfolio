import classes from './portfolioGallery.module.scss';
import { useState } from 'react';
import projects from '../../data/projects.json';

const PortfolioGallery = () => {
  const [showProjects, setShowProjects] = useState(false);

  function showProjectsHandler() {
    if (showProjects) {
      setShowProjects(false);
    } else {
      setShowProjects(true);
    }
  }

  return (
    <>
      {!showProjects && (
        <div className={classes.portfolioGallery}>
          <a
            href='#!'
            className='btn btn-outlined'
            onClick={showProjectsHandler}>
            More Projects
          </a>
        </div>
      )}
      {showProjects && (
        <section className={classes.portfolioGallery} id='portfolioGallery'>
          <div className={classes.container}>
            <h2>Other Projects</h2>

            <div className={classes.galleryWrap}>
              <h3 className={classes.galleryTitle}>Other projects</h3>
              <div className={classes.gallery}>
                {projects.map((project) => (
                  <div key={project._id} className={classes.card}>
                    <div className={classes.cardContent}>
                      <h4>{project.title}</h4>
                      <p>{project.excerpt}</p>
                    </div>
                    <div className={classes.cardAction}>
                      <a href='#!' onClick={() => showModalHandler(post)}>
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <a
                href='#!'
                className='btn btn-outlined'
                onClick={showProjectsHandler}>
                Close Projects
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default PortfolioGallery;
