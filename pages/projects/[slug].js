import Head from 'next/head';
import ProjectContent from '../../components/projects/projectContent';
import { getProjectData, getProjectsFiles } from '../../util/projects-util';

const ProjectDetailPage = (props) => {
  const { project, currentTheme } = props;

  return (
    <>
      <Head>
        <title>Project - {project.title}</title>
        <meta name='description' content={project.description} />
      </Head>
      <ProjectContent project={project} currentTheme={currentTheme} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const projectsFilenames = getProjectsFiles();
  const slugs = projectsFilenames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default ProjectDetailPage;
