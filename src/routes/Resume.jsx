import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="  bg-gradient-to-r from-green-700 from-30% via-yellow-800 via-20% to-emerald-800 to-80% ">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 dark:text-white">
          Resume
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 dark:text-white">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-white">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-slate-300 sm:col-span-2 sm:mt-0">
              Arsalan Farooq
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-white">
              Education
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-slate-300 sm:col-span-2 sm:mt-0">
              B.Tech in Computer Science <br />
              SSM.Engineering College 2023-2026
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-white">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-slate-300 sm:col-span-2 sm:mt-0">
              arsalanadna2@gmail.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-white">
              Skills
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-slate-300 sm:col-span-2 sm:mt-0">
              Programming Languages: JavaScript, HTML, CSS <br />
              Libraries: React.js <br />
              Tools: Git,
              <br /> Concepts: Responsive Design, Performance Optimization,
              Testing/Debugging
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-white">
              <Link to="/projects">
                <button className=" ">Projects</button>
              </Link>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
}
