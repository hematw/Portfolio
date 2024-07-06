
export default function About() {
    return (
        <div className="max-w-[1270px] m-auto">
            <div
                className="relative -left-20 text-nowrap font-semibold md:text-2xl py-2 md:py-4 shadow-eql shadow-white -rotate-3 my-20 slide">
                <div className="inline-block">
                    <span>Responsive Web Design</span>
                    <span>Single Page Application (SPA) Development</span>
                    <span>API Integration</span>
                    <span>RESTful Services</span>
                    <span>Modern Front-end Frameworks & Libraries</span>
                    <span>Web Accessibility & Optimization</span>
                </div>
                <div className="inline-block">
                    <span>Responsive Web Design</span>
                    <span>Single Page Application (SPA) Development</span>
                    <span>API Integration</span>
                    <span>RESTful Services</span>
                    <span>Modern Front-end Frameworks & Libraries</span>
                    <span>Web Accessibility & Optimization</span>
                </div>
            </div>

            <div className="px-10 leading-snug">
                <h1 className="text-center md:text-left font-semibold text-3xl underline md:text-5xl">
                    About Me
                </h1>
                <div className="flex flex-col-reverse md:flex-row items-center mt-10">
                    <div className="w-1/3 m-auto md:mr-16">
                        <img
                            src="./about-avatar.png"
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