import { GitHubCalendar } from "react-github-calendar";

export default function ContributionSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 py-12 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-4xl mx-auto">
        {/* Modernized Heading with Stats Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              Open Source Contributions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              My recent activity and code contributions on GitHub
            </p>
          </div>
          <a
            href="https://github.com/arsalanfarooq12"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-slate-600 dark:text-slate-950 hover:opacity-90 transition"
          >
            @arsalanfarooq12
          </a>
        </div>

        {/* Responsive Scrolling Wrapper */}
        <div className="w-full p-4 overflow-x-auto rounded-xl border border-slate-300 bg-slate-500 dark:border-slate-800 dark:bg-slate-900 shadow-sm scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
          <div className="min-w-[720px] md:min-w-0">
            <GitHubCalendar
              username="arsalanfarooq12"
              colorScheme="dark"
              fontSize={14}
              blockSize={12}
              blockMargin={4}
              theme={{
                dark: ["#1e293b", "#0e7490", "#06b6d4", "#22d3ee", "#67e8f9"], // Tailwind Slate-800 to Cyan-300
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
