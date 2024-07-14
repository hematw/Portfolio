
export default function About() {
    return (
        <div>
            <div
                className="relative -left-5 md:-left-20 text-nowrap font-semibold md:text-3xl py-2 md:py-4 shadow-eql shadow-white -rotate-3 my-20 slide overflow-hidden">
                <div className="inline-block uppercase">
                    <span>ReactJS</span>
                    <span>TailwindCSS</span>
                    <span>Bootstrap</span>
                    <span>NodeJS</span>
                    <span>ExpressJS</span>
                    <span>Javascript</span>
                    <span>Mongo DB</span>
                    <span>Mysql</span>
                    <span>RESTful API</span>
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <div className="inline-block uppercase">
                    <span>ReactJS</span>
                    <span>TailwindCSS</span>
                    <span>Bootstrap</span>
                    <span>NodeJS</span>
                    <span>ExpressJS</span>
                    <span>RESTful API</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>Mongo DB</span>
                    <span>Mysql</span>
                </div>
            </div>

            <div
                id="about"
                className="px-10 leading-snug">
                <h1 className="text-center md:text-left font-semibold text-3xl underline md:text-5xl">
                    About Me
                </h1>
                <div className="flex flex-col-reverse md:flex-row items-center md:mt-10">
                    <div className="w-1/3 m-auto md:mr-16">
                        <img
                            src="./3.png"
                            alt=""
                        />
                    </div>

                    <p className="text-justify mt-8 md:text-2xl md:w-2/3">
                        Hello! I'm Hematullah Waziri, an aspiring MERN Stack Developer with a passion for creating dynamic and engaging web applications. Currently, I'm in my 6th semester of Computer Science at Kabul Polytechnic University, where I'm honing my skills and expanding my knowledge in various aspects of web development.
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
                        <p className="text-sm mt-4 md:text-xl">
                            Overall Customers
                        </p>
                    </div>

                    <div className="w-1/3 my-6">
                        <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent">
                            20+
                        </h1>
                        <p className="text-sm mt-4 md:text-xl">
                            Projects I Have Worked on
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}