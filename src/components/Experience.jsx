const jobs = [
    {
        company: "Green State Power",
        role: "Full Stack Developer",
        dates: "July 2025 - Present",
        summary: (
            <>
                Building <a href="https://connectub.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Connectub</a>, an all-in-one platform for jobs, tenders, marketplace, property, and investments. Designed microservices so each module can ship and scale on its own.
            </>
        ),
        tags: ["Next.js", "React", "Docker", "Microservices"],
    },
    {
        company: "AfghanPAY",
        role: "Full Stack Developer",
        dates: "November 2024 - July 2025",
        summary:
            "Worked on mobile top-up and digital payment systems. Built secure transaction APIs, authentication with role-based access, and background jobs for top-up requests.",
        tags: ["Next.js", "Nest.js", "PostgreSQL", "RabbitMQ", "Redis"],
    },
    {
        company: "SobhanSoft Afghanistan",
        role: "Frontend Developer",
        dates: "May 2024 - August 2024",
        summary:
            "Part of the Mowlana developer community. Shipped MERN stack projects, including Tech News, a site for sharing tech updates.",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        company: "MCIT Afghanistan",
        role: "Backend Developer Intern",
        dates: "January 2023 - March 2023",
        summary:
            "Built a typing test app that measures speed in real time, and worked with the team to get the project delivered.",
        tags: ["JavaScript", "Backend"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="px-10 pt-10">
            <h1 className="text-center text-3xl font-semibold underline md:text-left md:text-5xl">
                Experience
            </h1>
            <ol className="relative ml-1 mt-8 md:ml-2 md:mt-12">
                <div
                    className="absolute bottom-2 left-0 top-2 w-0.5 bg-gradient-to-b from-pink-600 to-amber-500"
                    aria-hidden="true"
                />
                {jobs.map((job) => (
                    <li
                        key={job.company}
                        className="relative pb-12 pl-8 last:pb-0 md:pl-12"
                    >
                        <span
                            className="absolute left-[-7px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-pink-600 to-amber-500 shadow-lg shadow-slate-800"
                            aria-hidden="true"
                        />
                        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                            <h2 className="text-2xl font-semibold md:text-3xl">
                                {job.company}
                            </h2>
                            <p className="text-neutral-300 md:text-lg">{job.dates}</p>
                        </div>
                        <p className="mt-1 text-lg font-light md:text-2xl">{job.role}</p>
                        <p className="mt-4 max-w-3xl text-neutral-200 md:text-xl">
                            {job.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {job.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-3xl border-2 border-gray-400 bg-gradient-to-t from-zinc-900 to-zinc-700 px-3 py-1 text-sm md:px-4 md:py-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
