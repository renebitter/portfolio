import Head from 'next/head';
import {
  getAllProjects,
  getProjectSlugs,
  getProjectMarkdown,
} from '../../util/projects-util';
import ProjectDetail from '../../components/projects/projectDetail';

const ProjectDetailPage = (props) => {
  const { project } = props;

  return (
    <>
      <Head>
        <title>Project - {project.title}</title>
        <meta name='description' content={props.project.description} />
      </Head>

      <ProjectDetail project={props.project} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  //JSON file
  const project = getAllProjects().find((project) => project._id === slug);

  //Markdown file
  const projectMarkdown = getProjectMarkdown(slug);

  return {
    props: {
      project: project,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const slugs = getProjectSlugs();

  return {
    paths: slugs,
    fallback: false,
  };
};

export default ProjectDetailPage;
