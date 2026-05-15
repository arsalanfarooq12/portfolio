// src/ProjectCard.js
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [showLive, setShowLive] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Top Preview Area (Image or Live iFrame) */}
      <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800">
        {!showLive ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button
                onClick={() => setShowLive(true)}
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Live Preview 👀
              </button>
            </div>
          </>
        ) : (
          <div className="relative h-full w-full">
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="h-full w-full border-none"
              loading="lazy"
            />
            <button
              onClick={() => setShowLive(false)}
              className="absolute bottom-2 right-2 rounded bg-slate-900/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-slate-900"
            >
              Close Preview ✕
            </button>
          </div>
        )}

        {/* Host Platform Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
          {project.host}
        </span>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-auto flex items-center gap-4 pt-5 border-t border-slate-100 dark:border-slate-800">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Open Site
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
