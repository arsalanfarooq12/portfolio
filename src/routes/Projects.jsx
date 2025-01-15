// src/ProjectsPage.js
import React from "react";
import ProjectCard from "../components/Projectcard";

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "https://via.placeholder.com/400",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
