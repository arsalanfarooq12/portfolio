import React from "react";
import SplitText from "../components/SplitText";
export default function About() {
  return (
    <div className="bg-zinc-950 min-h-screen flex justify-center items-center">
      <div className="bg-zinc-900 rounded-lg shadow-lg p-8  max-w-fit">
        {/* Brief Introduction */}
        <div className="mb-6 flex-col justify-center ">
          <h2 className="text-2xl font-bold  text-white mb-2">About</h2>

          <SplitText
            text=" A passionate developer interested in building frontend applications  
                    and -- exploring new technologies."
            className="text-xl font-semibold text-center text-gray-400"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        {/* Education Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Completed 12th from Govt. Higher Secondary School</li>
            <li>Currently pursuing B.Tech in Computer Science</li>
          </ul>
        </div>
        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-gray-700 text-gray-200 px-3 py-1 rounded">
              Front-end in React
            </li>
            <li className="bg-gray-700 text-gray-200 px-3 py-1 rounded">
              Version Control with Git
            </li>
            <li className="bg-gray-700 text-gray-200 px-3 py-1 rounded">
              Tailwind Styling
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
