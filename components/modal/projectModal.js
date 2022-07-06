import classes from './modal.module.scss';
import Image from 'next/image';
import ImageSlider from '../imageSlider/imageSlider';

const ProjectModal = (props) => {
  const { project } = props;

  return (
    <div className={classes.modal}>
      <div className={classes.projectModal}>
        <a href='#!' className={classes.close} onClick={props.onClose}>
          <i className='fa fa-xmark'></i>
        </a>
        <h2>{project.title}</h2>
        <div className={classes.main}>
          {project.screenshots ? (
            <div>
              <h3>Screenshots & description</h3>
              <ImageSlider slides={project.screenshots} />
            </div>
          ) : (
            <div className={classes.projectRow}>
              <div className={classes.image}>
                {project.image && (
                  <Image
                    src={`/portfolio/images/projects/${project.image}`}
                    width='100%'
                    height='100%'
                    alt=''
                  />
                )}
              </div>
              <div className={classes.modalLinks}>
                {project.githubLink && (
                  <a href={project.githubLink} target='_blank' rel='noreferrer'>
                    <i className='fab fa-github'></i>
                    Github
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target='_blank' rel='noreferrer'>
                    <i className='fas fa-link'></i>
                    Live
                  </a>
                )}
              </div>
              <div className={classes.description}>
                <p>{project.subtitle}</p>
                <p>{project.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
