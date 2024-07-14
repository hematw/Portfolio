import ColorfulBlurShapes from "./ColorfulBlurShapes"

export default function Hero() {
    return (
        <div
            id="home"
            className="flex flex-col-reverse md:flex-row md:text-left items-center justify-between tracking-wide text-center min-h-[600px] px-10">
            <div className="w-4/5  z-100">
                <h1 className="relative text-5xl md:text-7xl font-bold leading-tight">
                    <span
                        className="name">
                        Hematullah
                    </span>
                    <br /> Waziri
                </h1>

                <h3 className="text-xl md:text-3xl font-light leading-snug mt-4 md:mt-10">
                    An aspiring MERN Stack Developer. Bringing ideas to life through code, crafting dynamic and engaging applications that innovate and inspire.
                </h3>

                <div className="flex flex-col md:flex-row gap-4 mt-10 text-lg md:text-2xl">
                    <a
                        href="mailto:hematking12@gmail.com"
                        className="px-10 py-4 rounded-2xl relative hero-btn">
                        Hire Me
                    </a>

                    <a
                        href="#"
                        className="px-10 py-4 rounded-2xl relative hero-btn">
                        My Story
                    </a>
                </div>
            </div>

            <div className="w-3/5 relative">
                <img src="/hero_avatar.png" alt="" className="block" />
                <ColorfulBlurShapes />
            </div>
        </div>
    )
}