import projects from '../data/projects.json';

const featuredProjects = projects.filter((project) => project.isFeatured);
const nonFeaturedProjects = projects.filter((project) => !project.isFeatured);

const getProjectData = (projectIdentifier) => {
  const projectSlug = projectIdentifier;

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
};

export default getProjectData;
