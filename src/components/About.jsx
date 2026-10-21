export default function About() {
  return (
    <div>
      <div className="absolute inset-x-0 overflow-hidden">
        <div className="relative text-nowrap font-semibold md:text-3xl py-2 md:py-4 shadow-eql shadow-white -rotate-3 my-20 slide">
          <div className="inline-block uppercase">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Nest.js</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>RabbitMQ</span>
            <span>Docker</span>
            <span>Tailwind CSS</span>
          </div>
          <div className="inline-block uppercase">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Nest.js</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>RabbitMQ</span>
            <span>Docker</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
      <div id="about" className="px-10 leading-snug pt-64">
        <h1 className="text-center md:text-left font-semibold text-3xl underline md:text-5xl">
          About Me
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center md:mt-10">
          <div className="w-1/3 m-auto md:mr-16">
            <img src="./3.png" alt="" />
          </div>

          <p className="text-justify mt-8 md:text-2xl md:w-2/3">
            Hello! I am Hematullah Waziri, a full stack developer with
            experience building payment systems and complex web platforms. I
            previously worked at AfghanPAY on mobile top-up and digital
            payments, and I currently work at Green State Power on Connectub.
            I am finishing a Computer Science degree at Kabul Polytechnic
            University.
          </p>
        </div>
        <div className="flex justify-between gap-1 text-center ">
          <div className="w-1/3 my-6">
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent">
              2+
            </h1>
            <p className="text-sm mt-4 md:text-xl">
              Years of Development Experience
            </p>
          </div>

          <div className="w-1/3 my-6 border-x-4 border-zinc-700">
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent ">
              10+
            </h1>
            <p className="text-sm mt-4 md:text-xl">Overall Customers</p>
          </div>

          <div className="w-1/3 my-6">
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent">
              20+
            </h1>
            <p className="text-sm mt-4 md:text-xl">Projects I Have Worked on</p>
          </div>
        </div>
      </div>
    </div>
  );
}
