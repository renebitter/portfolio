import Head from 'next/head';
import { getAllProjects } from '../../util/projects-util';
import AllProjects from '../../components/projects/allProjects';

const Projects = (props) => {
  const { projects } = props;

  return (
    <>
      <Head>
        <title>All Projects</title>
        <meta
          name='description'
          content='List of all of my projects. Tech-Stack: React, Next.js, Redux, Typescript, Node.js, Express, MongoDB, Bootstrap, Shopware.'
        />
      </Head>
      <AllProjects projects={projects} />
    </>
  );
};
export default Projects;

export const getStaticProps = (context) => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};
