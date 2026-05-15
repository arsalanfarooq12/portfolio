// src/ProjectsPage.js
import React from "react";
import ProjectCard from "../components/Projectcard";

// const projects = [
//   {
//     title: "Valley gym",
//     description:
//       "The first and only fitness club in the rural area of Kashmir. We are a family-owned and operated business that aims to provide you with a safe, comfortable and motivating environment to achieve your fitness goals..",
//     image:
//       "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
//     page: "https://arsalanfarooq12.github.io/GymApp/",
//   },
//   {
//     title: "Tasks App",
//     description:
//       "Add your tasks here and manage them with ease. You can add new tasks, mark them as completed, and delete them when they're done. Stay organized and boost your productivity with our simple and intuitive task management app.",
//     image: "/assets/Screenshot_20260206_231718.jpg",
//     page: "https://photocircle.vercel.app/",
//   },
// ];

const projects = [
  {
    title: "Skillsync Platform",
    description:
      "A full-stack skill-sharing platform where users can list skills they offer and request skills from others, enabling peer-to-peer knowledge exchange",
    tech: ["React.js", "PostgreSQL", "Node.js", "Express"],
    liveUrl: "https://skillsy.netlify.app/", // Hosted on Vercel
    githubUrl: "https://github.com/arsalanfarooq12/Skillsync",
    image: "/images/skillsync-preview.png",
    host: "Netlify",
  },
  {
    title: "Habit Tracker App",
    description:
      "A simple habit tracker application that allows users to track their habits visually using a contribution grid",
    tech: ["html", "css", "javascript"],
    liveUrl: "https://arsalanfarooq12.github.io/habit-tracker/", // Hosted on GitHub Pages
    githubUrl: "https://github.com/arsalanfarooq12/habit-tracker.git",
    image: "/images/habit-tracker-preview.png",
    host: "GitHub Pages",
  },
  {
    title: "Tasks App",
    description:
      "A cross-platform task management app with a shared Express.js REST API backend serving both web (React.js) and mobile (React Native/Expo) clients.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
      "Express",
    ],
    liveUrl: "https://photocircle.vercel.app/login",
    githubUrl: "https://github.com/arsalanfarooq12/photocircle",
    image: "/images/tasks-preview.png",
    host: "Vercel",
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-50 py-16 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-500 dark:text-slate-400 sm:mt-4">
            A showcase of my recent web development work across different
            hosting environments.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mx-auto mt-12 grid max-w-md gap-8 sm:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
