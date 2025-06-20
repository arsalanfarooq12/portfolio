// src/ProjectsPage.js
import React from "react";
import ProjectCard from "../components/Projectcard";
import { motion } from "motion/react";
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
  {
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    image: "https://via.placeholder.com/400",
  },
  // Add more projects as needed
];
// styles for motion box1
const box1 = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
};

const Projects = () => {
  return (
    <>
      <div className=" ">
        <div className=" h-screen Box1 flex flex-wrap justify-center min-h-96 bg-gray-600">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
        <motion.Box1
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          // style={box1}
        />
      </div>
    </>
  );
};

export default Projects;
