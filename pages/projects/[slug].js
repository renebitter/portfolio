import Head from 'next/head';
import projects from '../../data/projects.json';
import Image from 'next/image';
import ImageSlider from '../../components/imageSlider/imageSlider';
import { useRouter } from 'next/router';

const ProjectDetailPage = (props) => {
  const { project } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name='description' content={props.project.description} />
      </Head>

      <button type='button' onClick={() => router.back()}>
        Click here to go back
      </button>

      <h2>{project.title}</h2>
      <div>
        {project.screenshots && (
          <div>
            <h3>Screenshots & description</h3>
            <ImageSlider slides={project.screenshots} />
          </div>
        )}
        <div>
          <div>
            {project.image && (
              <Image
                src={`../../portfolio/images/projects/${project.image}`}
                width={500}
                height={360}
                alt=''
              />
            )}
          </div>
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
          <div>
            <p>{project.subtitle}</p>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const projectData = projects.find((project) => project._id === slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const slugs = projects.map((project) => ({ params: { slug: project._id } }));

  return {
    paths: slugs,
    fallback: false,
  };
};

export default ProjectDetailPage;
