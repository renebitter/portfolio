import Head from 'next/head';
import { getProjectData } from '../../util/projects-util';
import projects from '../../data/projects.json';

const ProjectDetailPage = (props) => {
  // console.log(props.project);
  return (
    <>
      <Head>
        <title>{props.project.title}</title>
        <meta name='description' content={props.project.description} />
      </Head>
      <div>{props.project.title}</div>
    </>
  );
};

export const getStaticProps = (context) => {
  console.log(context);
  const { params } = context;
  const { slug } = params;

  function convertToTitle(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, ' ')
      .replace(/ +/g, ' ');
  }

  const title = convertToTitle(slug);

  console.log(title);

  // const projectId = projects.map((project) => project._id);

  // const projectData = getProjectData(slug);
  const projectData = projects.find(
    (project) => project.title === 'eCommerce website - MERN Fullstack'
  );

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  const slugs = projects.map((project) => ({
    params: { slug: convertToSlug(project.title) },
  }));
  // const projectId = projects.map((project) => project._id);

  return {
    paths: slugs,
    fallback: false,
  };
};

export default ProjectDetailPage;
