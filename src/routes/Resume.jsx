import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className=" bg-gray-800 text-gray-100 h-screen ">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 dark:text-gray-100">
          Resume
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 dark:text-gray-100">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-black">
        <dl className="divide-y divide-black">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-100">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-100 sm:col-span-2 sm:mt-0">
              Arsalan Farooq
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-100">
              Education
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-100 sm:col-span-2 sm:mt-0">
              B.Tech in Computer Science <br />
              SSM.Engineering College 2023-2027
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-100">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-100 sm:col-span-2 sm:mt-0">
              arsalanadna2@gmail.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-100">
              Skills
            </dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-100 sm:col-span-2 sm:mt-0">
              Programming Languages: JavaScript, HTML, CSS <br />
              Libraries: React.js <br />
              Tools: Git,
              <br /> Concepts: Responsive Design, Performance Optimization,
              Testing/Debugging
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-100">
              <Link to="/projects">
                <button className=" bg-gray-900 rounded-xl p-1 text-white">
                  Projects
                </button>
              </Link>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
}
