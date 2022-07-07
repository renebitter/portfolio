import projects from '../data/projects.json';

export const getProjects = () => {
  return projects;
};

export const getFeaturedProjects = () => {
  return getProjects().filter((project) => project.isFeatured);
};
export const getNonFeaturedProjects = () => {
  return getProjects().filter((project) => !project.isFeatured);
};

export const getProjectSlugs = () => {
  return getProjects().map((project) => ({ params: { slug: project._id } }));
};
