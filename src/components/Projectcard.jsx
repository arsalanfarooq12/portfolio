// src/ProjectCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, page }) => {
  return (
    <Link to={page} target="_blank">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-300 max-h-fit">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
