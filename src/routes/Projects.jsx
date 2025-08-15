// src/ProjectsPage.js
import React from "react";
import ProjectCard from "../components/Projectcard";

const projects = [
  {
    title: "Valley gym",
    description:
      "The first and only fitness club in the rural area of Kashmir. We are a family-owned and operated business that aims to provide you with a safe, comfortable and motivating environment to achieve your fitness goals..",
    image:
      "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    page: "https://arsalanfarooq12.github.io/GymApp/",
  },
  // {
  //   title: "Project Two",
  //   description: "This is a brief description of Project Two.",
  //   image: "https://via.placeholder.com/400",
  // },
  // {
  //   title: "Project Three",
  //   description: "This is a brief description of Project Three.",
  //   image: "https://via.placeholder.com/400",
  // },
  // {
  //   title: "Project Four",
  //   description: "This is a brief description of Project Four.",
  //   image: "https://via.placeholder.com/400",
  // },
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
      <div className=" h-fit flex bg-gray-600">
        <div className="  flex-col flex-wrap justify-center align-top  min-h-96 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              page={project.page}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
