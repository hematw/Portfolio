
export default function Projects() {
    return (
        <div className="max-w-[1270px] m-auto p-10">
            <div>
                <h1 className="text-center md:text-left font-semibold text-3xl underline md:text-5xl">
                    Projects
                </h1>
            </div>
            <div className="grid grid-rows-3 grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-12">
                <a
                    href="https://food-recipe-react-rho.vercel.app/"
                    target="_blank"
                    className="rounded-xl overflow-hidden max-h-96 shadow-lg shadow-slate-800"
                >
                    <img
                        src="./atom_foods.jpg"
                        className="w-full h-full object-cover block"
                        alt=""
                    />
                </a>

                <a
                    href="https://hematw.github.io/Food-Ordering-app/"
                    target="_blank"
                    className="rounded-xl overflow-hidden  max-h-96 shadow-lg shadow-slate-800"
                >
                    <img
                        src="./atom_cafe.jpg"
                        className="w-full h-full object-cover block"
                        alt=""
                    />
                </a>

                <a
                    href="https://hematw.github.io/Typing-Game/"
                    target="_blank"
                    className="rounded-xl overflow-hidden col-span-2 max-h-96 shadow-lg shadow-slate-800"
                >
                    <img
                        src="./typing.jpg"
                        className="w-full h-full object-cover block"
                        alt=""
                    />
                </a>

                <a
                    href="https://news-app-tau-ten.vercel.app/"
                    target="_blank"
                    className=" rounded-xl overflow-hidden max-h-96 shadow-lg shadow-slate-800"
                >
                    <img
                        src="./news_app.jpg"
                        className="w-full h-full object-cover block"
                        alt=""
                    />
                </a>

                <a
                    href="https://quizzical-eta.vercel.app/"
                    target="_blank"
                    className="rounded-xl overflow-hidden max-h-96 shadow-lg shadow-slate-800"
                >
                    <img
                        src="./quizzical.jpg"
                        className="w-full h-full object-cover block"
                        alt=""
                    />
                </a>
            </div>

        </div>
    )
}