import { about, stringsOf } from "../content";

export default function About() {
  return (
    <div>
      <div className="absolute inset-x-0 overflow-hidden">
        <div className="relative text-nowrap font-semibold md:text-3xl py-2 md:py-4 shadow-eql shadow-white -rotate-3 my-20 slide">
          <div className="inline-block uppercase">
            {stringsOf(about.skills).map((skill) => (
              <span key={`a-${skill}`}>{skill}</span>
            ))}
          </div>
          <div className="inline-block uppercase">
            {stringsOf(about.skills).map((skill) => (
              <span key={`b-${skill}`}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div id="about" className="px-10 leading-snug pt-64">
        <h1 className="text-center md:text-left font-semibold text-3xl underline md:text-5xl">
          {about.title}
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center md:mt-10">
          <div className="w-1/3 m-auto md:mr-16">
            <img src={about.image} alt="" />
          </div>

          <p className="text-justify mt-8 md:text-2xl md:w-2/3">
            {about.body}
          </p>
        </div>
        <div className="flex justify-between gap-1 text-center ">
          {about.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`w-1/3 my-6 ${index === 1 ? "border-x-4 border-zinc-700" : ""}`}
            >
              <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent">
                {stat.value}
              </h1>
              <p className="text-sm mt-4 md:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
