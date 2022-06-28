import classes from './modal.module.scss';
import Image from 'next/image';

const ProjectModal = (props) => {
  const { project } = props;

  return (
    <div className={classes.modal}>
      <div className={classes.projectModal}>
        <h2>{project.title}</h2>
        <div className={classes.main}>
          <div className={classes.projectRow}>
            <div className={classes.image}>
              {project.image && (
                <Image
                  src={`/portfolio/images/projects/${project.image}`}
                  width={500}
                  height={360}
                  alt=''
                />
              )}

              <div className={classes.modalLinks}>
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

            <div className={classes.description}>
              <p>{project.subtitle}</p>
              <p>{project.description}</p>
            </div>
          </div>
          <div className={classes.flowchart}>
            {project.image && (
              <Image
                src={`/portfolio/images/projects/${project.image}`}
                width={500}
                height={360}
                alt=''
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
