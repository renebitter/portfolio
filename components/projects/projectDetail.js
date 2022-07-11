import Image from 'next/image';
import ImageSlider from '../ui/imageSlider/imageSlider';
import classes from './projectDetail.module.scss';

const ProjectDetail = (props) => {
  const { project } = props;

  return (
    <div className={classes.projectDetail}>
      <div className='container section'>
        <h1>{project.title}</h1>

        <div>
          <small>
            {Array.isArray(project.tech)
              ? project.tech.join(', ')
              : project.tech}
          </small>
          <p>{project.description}</p>
        </div>

        <div className={classes.projectLinks}>
          {project.githubLink && (
            <a href={project.githubLink} target='_blank' rel='noreferrer'>
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
        </div>

        {project.screenshots ? (
          <div>
            <h2>Screenshots & description</h2>
            <ImageSlider slides={project.screenshots} />
          </div>
        ) : (
          project.image && (
            <div className={classes.projectImage}>
              <Image
                src={`../../portfolio/images/projects/${project.image}`}
                width={500}
                height={360}
                alt=''
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default ProjectDetail;
