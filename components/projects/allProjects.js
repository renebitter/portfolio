import Link from 'next/link';
import classes from './allProjects.module.scss';

const allProjects = (props) => {
  const { projects } = props;

  return (
    <div className={classes.projectsGallery}>
      <div className='container'>
        <h1>Projects</h1>
        <div className={classes.galleryWrap}>
          <div className={classes.gallery}>
            {projects.map((project) => (
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
                    <a href={project.liveLink} target='_blank' rel='noreferrer'>
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
      </div>
    </div>
  );
};
export default allProjects;
