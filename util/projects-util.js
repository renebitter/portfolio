import projects from '../data/projects.json';

export const getAllProjects = () => {
  return projects;
};

export const getFeaturedProjects = () => {
  return getAllProjects().filter((project) => project.isFeatured);
};
export const getNonFeaturedProjects = () => {
  return getAllProjects().filter((project) => !project.isFeatured);
};

export const getProjectSlugs = () => {
  return getAllProjects().map((project) => ({ params: { slug: project._id } }));
};
