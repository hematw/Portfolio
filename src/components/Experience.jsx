import { experience, stringsOf } from "../content";

function JobSummary({ summary, linkLabel, linkHref }) {
    if (!linkLabel || !linkHref || !summary.includes(linkLabel)) {
        return summary;
    }

    const [before, ...rest] = summary.split(linkLabel);
    return (
        <>
            {before}
            <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
            >
                {linkLabel}
            </a>
            {rest.join(linkLabel)}
        </>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="px-10 pt-10">
            <h1 className="text-center text-3xl font-semibold underline md:text-left md:text-5xl">
                {experience.title}
            </h1>
            <ol className="relative ml-1 mt-8 md:ml-2 md:mt-12">
                <div
                    className="absolute bottom-2 left-0 top-2 w-0.5 bg-gradient-to-b from-pink-600 to-amber-500"
                    aria-hidden="true"
                />
                {experience.jobs.map((job) => (
                    <li
                        key={job.company}
                        className="group relative pb-12 pl-8 last:pb-0 md:pl-12"
                    >
                        <span
                            className="absolute left-[-7px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-pink-600 to-amber-500 shadow-lg shadow-slate-800"
                            aria-hidden="true"
                        />
                        <div className="flex items-start gap-4">
                            {/* Logo */}
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                                {job.logo ? (
                                    <img
                                        src={job.logo}
                                        alt={`${job.company} logo`}
                                        className="h-full w-full object-contain grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-xl font-bold text-neutral-500">
                                        {job.company.charAt(0)}
                                    </div>
                                )}
                            </div>
                            {/* Details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                    <h2 className="text-2xl font-semibold md:text-3xl">
                                        {job.company}
                                    </h2>
                                    <p className="text-neutral-300 md:text-lg">{job.dates}</p>
                                </div>
                                <p className="mt-1 text-lg font-light md:text-2xl">{job.role}</p>
                                <p className="mt-4 max-w-3xl text-neutral-200 md:text-xl">
                                    <JobSummary
                                        summary={job.summary}
                                        linkLabel={job.linkLabel}
                                        linkHref={job.linkHref}
                                    />
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stringsOf(job.tags).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-3xl border-2 border-gray-400 bg-gradient-to-t from-zinc-900 to-zinc-700 px-3 py-1 text-sm md:px-4 md:py-2"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
