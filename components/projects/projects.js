import classes from './projects.module.scss';
import { useState } from 'react';
import Link from 'next/link';

const Projects = (props) => {
  const [showProjects, setShowProjects] = useState(false);
  const { nonFeaturedProjects } = props;

  function showProjectsHandler() {
    const nonFeaturedProjects = document.getElementById('portfolioGallery');

    if (showProjects) {
      setShowProjects(false);
      nonFeaturedProjects.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      setShowProjects(true);
      nonFeaturedProjects.scrollIntoView({
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
                          Website
                        </a>
                      )}
                      <Link href={`/projects/${project._id}`}>
                        <a>
                          <i className='fa fa-circle-info'></i>
                          Project details
                        </a>
                      </Link>
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
export default Projects;
