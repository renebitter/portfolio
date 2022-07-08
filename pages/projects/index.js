import { getAllProjects } from '../../util/projects-util';
import AllProjects from '../../components/projects/allProjects';

const Projects = (props) => {
  const { projects } = props;

  return <AllProjects projects={projects} />;
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
