import projects from '../data/projects.json';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export const getProjectMarkdown = () => {};
