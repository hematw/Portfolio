import { TbArrowUpRight } from "react-icons/tb";
import ColorfulBlurShapesTwo from "./ColorfulBlurShapeTwo";
import { projects, stringsOf } from "../content";

const blobThemes = {
    pink: ["bg-pink-600", "bg-blue-500", "bg-amber-400"],
    amber: ["bg-amber-400", "bg-red-500", "bg-blue-500"],
};

function TagList({ tags }) {
    return (
        <div className="mt-3 flex flex-wrap gap-2">
            {stringsOf(tags).map((tag) => (
                <span
                    key={tag}
                    className="rounded-3xl border-2 border-gray-400 bg-gradient-to-t from-zinc-900 to-zinc-700 px-3 py-1 text-xs md:text-sm"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

function ProjectCard({ title, description, image, href, tags, featured, theme }) {
    const blobs = blobThemes[theme] || blobThemes.pink;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block overflow-hidden rounded-xl shadow-lg shadow-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 ${
                featured ? "md:col-span-2" : ""
            }`}
        >
            {image ? (
                <>
                    <img
                        src={image}
                        alt={`${title} project preview`}
                        className="h-72 w-full object-cover transition-transform duration-500 md:h-96 md:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#131314] via-[#131314]/55 to-transparent p-5 md:p-8">
                        <TbArrowUpRight
                            aria-hidden="true"
                            className="absolute right-5 top-5 text-2xl opacity-90 transition-transform duration-300 md:right-8 md:top-8 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5"
                        />
                        <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
                        <p className="mt-2 max-w-xl text-pretty text-sm text-neutral-300 md:text-base">
                            {description}
                        </p>
                        <TagList tags={tags} />
                    </div>
                </>
            ) : (
                <div className="relative flex min-h-72 flex-col justify-end overflow-hidden border-2 border-zinc-500 bg-gradient-to-t from-zinc-900 to-zinc-700 p-5 md:min-h-96 md:p-8">
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                        <div className={`absolute -right-8 -top-10 h-40 w-40 rounded-full blur-3xl ${blobs[0]}`} />
                        <div className={`absolute bottom-6 left-8 h-32 w-32 rounded-full blur-3xl ${blobs[1]}`} />
                        <div className={`absolute right-16 top-16 h-24 w-24 rounded-full blur-3xl ${blobs[2]}`} />
                    </div>
                    <TbArrowUpRight
                        aria-hidden="true"
                        className="absolute right-5 top-5 text-2xl opacity-90 transition-transform duration-300 md:right-8 md:top-8 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5"
                    />
                    <h3 className="relative text-4xl font-bold leading-tight md:text-5xl">
                        <span className="bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent">
                            {title}
                        </span>
                    </h3>
                    <p className="relative mt-3 max-w-xl text-pretty text-sm text-neutral-200 md:text-base">
                        {description}
                    </p>
                    <div className="relative">
                        <TagList tags={tags} />
                    </div>
                </div>
            )}
        </a>
    );
}

export default function Projects() {
    return (
        <div id="projects" className="relative m-auto p-10">
            <div>
                <h1 className="text-center text-3xl font-semibold underline md:text-left md:text-5xl">
                    {projects.title}
                </h1>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-10">
                {projects.items.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
            <ColorfulBlurShapesTwo />
        </div>
    );
}
