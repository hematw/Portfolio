import { services, stringsOf } from "../content";

export default function Services() {
    const servicesEls = stringsOf(services.items).map((service) => (
        <span key={service} className="border-2 border-gray-400 rounded-3xl py-2 px-4 m-2 bg-gradient-to-t from-zinc-900 to-zinc-700">
            {service}
        </span>
    ))

    function mixServicesEls(arr) {
        const array = [...arr]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div
            id="services"
            className="mt-24">
            <h1 className="px-10 text-center md:text-left font-semibold text-3xl underline md:text-5xl mb-10">
                {services.title}
            </h1>
            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
                <div className="relative text-nowrap md:text-3xl py-2 md:py-4 my-2 slide font-thin">
                    <div className="inline-block">
                        {mixServicesEls(servicesEls)}
                    </div>
                    <div className="inline-block">
                        {mixServicesEls(servicesEls)}
                    </div>
                </div>
                <div className="relative text-nowrap font-thin md:text-3xl py-2 md:py-4 my-2 slide">
                    <div className="inline-block">
                        {mixServicesEls(servicesEls)}
                    </div>
                    <div className="inline-block">
                        {mixServicesEls(servicesEls)}
                    </div>
                </div>
            </div>
        </div>
    )
}
