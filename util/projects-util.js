import projects from '../data/projects.json';

export const getProjects = () => {
  return projects;
};

export const getProjectSlugs = () => {
  return getProjects().map((project) => ({ params: { slug: project._id } }));
};
