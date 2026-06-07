const education = [
  {
    degree: "DevOps Certification",
    institution: "Coursera - IBM  DevOps Professional Certificate",
    duration: "currently enrolled",
    description:
      "Intensive 6-month program covering Python, Linux, Docker, Kubernetes, CI/CD ,Testing.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Kashmir",
    duration: "2023 — 2027",
    description: "Specialized in Software Engineering and Web Architecture.",
  },
];

import { motion } from "framer-motion";

const tools = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
  },

  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
];

// Duplicate the array so the track stays seamlessly populated during translation shifts
const scrollingTools = [...tools, ...tools];

export function TechMarquee() {
  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
      <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
        Technologies & Tools I Use Daily
      </h3>

      {/* Outer Mask Wrapper: Creates the gradient fade on the left and right edges */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* Animated Framer Motion Row Container */}
        <motion.div
          className="flex w-max gap-8 py-2"
          animate={{ x: [0, "-50%"] }} // Translates exactly half the width of the duplicated array
          transition={{
            ease: "linear",
            duration: 25, // Control horizontal scrolling speed (higher numbers make it slower)
            repeat: Infinity,
          }}
        >
          {scrollingTools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-shrink-0 items-center gap-2 rounded-xl border border-slate-200 t bg-white px-4 py-2 shadow-sm transition-transform duration-200 hover:scale-105 dark:border-slate-800 dark:bg-slate-900"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-slate-500 py-16 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Main Grid: Split Layout */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column: Core Overview & Education */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I am a full-stack developer who bridges the gap between frontend
                interfaces, backend services, and cloud infrastructure. I build
                performant web applications with clean component architectures,
                solid database patterns, and secure automated deployment
                pipelines.
              </p>
            </div>

            {/* Education Timeline Sub-Section */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="space-y-6 border-l-2 border-slate-200 dark:border-slate-800 pl-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Visual Node Accent Indicator */}
                    <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-400 ring-4 ring-white dark:ring-slate-950" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                      {edu.duration}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Pillar 1: Full-Stack Architecture */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <span className="text-base">💻</span>
                <h5 className="font-semibold text-slate-900 dark:text-white">
                  Full-Stack Architecture
                </h5>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Building responsive React frontends coupled with secure,
                type-safe REST APIs in Node.js (Express.js).
              </p>
            </div>

            {/* Pillar 2: Database & State */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <span className="text-base">🗄️</span>
                <h5 className="font-semibold text-slate-900 dark:text-white">
                  Database & Management
                </h5>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Designing structured relational schemas (PostgreSQL) and
                flexible document models (MongoDB) with efficient indexing.
              </p>
            </div>

            {/* Pillar 3: Containerisation & CI/CD */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <span className="text-base">📦</span>
                <h5 className="font-semibold text-slate-900 dark:text-white">
                  Containerisation
                </h5>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Dockerising multi-container setups and automating builds, tests,
                and deployments using Kubernetes.
              </p>
            </div>

            {/* Pillar 4: Cloud & Deployment
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <span className="text-base">☁️</span>
                <h5 className="font-semibold text-slate-900 dark:text-white">
                  Cloud Infrastructure
                </h5>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Deploying cloud services on AWS, configuring secure Nginx
                reverse proxies, and setting up Linux server environments.
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom Section: Infinite Horizontal Scrolling Tools Carousel */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
            Technologies & Tools I Use Daily
          </h3>

          {/* Masking Container (Fades out the edges for a clean look) */}
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max gap-8 animate-infinite-scroll py-2">
              {scrollingTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:scale-105 dark:border-slate-800 dark:bg-slate-900"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
