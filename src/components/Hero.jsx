export default function Hero() {
    return (
        <div className="flex items-center justify-between tracking-wide min-h-[90vh]">
            <div className="w-4/5">
                <h1 className="relative text-7xl font-bold leading-tight">
                    <span className="absolute -top-8 -left-9 im font-extralight text-yellow-600">I'm</span>
                    Hematullah<br /> Waziri
                </h1>
                <h3 className="text-3xl font-light leading-snug mt-10">An aspiring MERN Stack Developer. Bringing ideas to life through code, crafting dynamic and engaging applications that innovate and inspire.</h3>
                <div className="flex gap-4 mt-10">
                    <a
                        href="#"
                        className="text-3xl px-10 py-4 rounded-2xl relative hero-btn"
                    >
                        Hire Me
                    </a>
                    <a
                        href="#"
                        className="text-3xl px-10 py-4 rounded-2xl relative hero-btn"
                    >
                        My Story
                    </a>
                </div>
            </div>

            <div className="w-3/5">
                <img src="/hero_avatar.png" alt="" className="block" />
            </div>
        </div>
    )
}