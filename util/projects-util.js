import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'data/projects');

export const getProjectsFiles = () => {
  return fs.readdirSync(projectsDirectory);
};

export const getProjectData = (projectIdentifier) => {
  const projectSlug = projectIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(projectsDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
};

export const getAllProjects = () => {
  const projectsFiles = getProjectsFiles();

  const allProjects = projectsFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });

  const sortedProjects = allProjects.sort((projectA, projectB) =>
    projectA.date > projectB.date ? -1 : 1
  );

  return sortedProjects;
};

export const getFeaturedProjects = () => {
  const allProjects = getAllProjects();

  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return featuredProjects;
};
