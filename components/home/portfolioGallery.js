import classes from './portfolioGallery.module.scss';
// import Image from 'next/image';
import { useState } from 'react';
import projects from '../../data/projects.json';

const PortfolioGallery = () => {
  const [showProjects, setShowProjects] = useState(false);
  const nonFeaturedProjects = projects.filter((project) => !project.isFeatured);

  function showProjectsHandler() {
    const portfolioGallery = document.getElementById('portfolioGallery');
    const portfolio = document.getElementById('portfolio');

    if (showProjects) {
      setShowProjects(false);
      portfolioGallery.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      setShowProjects(true);
      portfolioGallery.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <section className={classes.portfolioGallery} id='portfolioGallery'>
      <div className={classes.container}>
        {!showProjects && (
          <div className={classes.buttonWrapper}>
            <button className='btn btn-outlined' onClick={showProjectsHandler}>
              More Projects
            </button>
          </div>
        )}
        {showProjects && (
          <>
            <h2>Other Projects</h2>

            <div className={classes.galleryWrap}>
              <div className={classes.gallery}>
                {nonFeaturedProjects.map((project) => (
                  <div key={project._id} className={classes.card}>
                    <div className={classes.cardContent}>
                      <h4>{project.title}</h4>
                      <small>{project.subtitle}</small>
                      <p>{project.description}</p>
                    </div>

                    <div className={classes.portfolioLinks}>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target='_blank'
                          rel='noreferrer'>
                          <i className='fab fa-github'></i>
                          Github
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target='_blank'
                          rel='noreferrer'>
                          <i className='fas fa-link'></i>
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.buttonWrapper}>
              <button
                className='btn btn-outlined'
                onClick={showProjectsHandler}>
                Close Projects
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default PortfolioGallery;
