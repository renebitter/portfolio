import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ImageSlider from '../imageSlider/imageSlider';
import classes from './projectDetail.module.scss';

const ProjectDetail = (props) => {
  const { project } = props;
  const router = useRouter();

  return (
    <div className='container section'>
      <Link href='/#portfolio'>
        <button className='btn btn-outlined'>Go Back</button>
      </Link>

      <h2>{project.title}</h2>

      <div>
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

      {project.screenshots ? (
        <div>
          <h3>Screenshots & description</h3>
          <ImageSlider slides={project.screenshots} />
        </div>
      ) : (
        project.image && (
          <div>
            <Image
              src={`../../portfolio/images/projects/${project.image}`}
              width={500}
              height={360}
              alt=''
            />
          </div>
        )
      )}

      <div>
        <p>{project.subtitle}</p>
        <p>{project.description}</p>
      </div>
    </div>
  );
};
export default ProjectDetail;
