export default function Services() {
    const services = ["Responsive Web Design", "Single Page Application", "API Integration", "Web Optimization", "RESTful Services", "Front-end Development", "Web Accessibility", "Back-end Development"];

    const servicesEls = services.map((service, index) => (
        <span key={index} className="border-2 border-gray-400 rounded-3xl py-2 px-4 m-2 bg-gradient-to-t from-zinc-900 to-zinc-700">
            {service}
        </span>
    ))

    function mixServicesEls(arr) {
        const array = [...arr]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    return (
        <div
            id="services"
            className="mt-24 px-10">
            <h1 className="text-center md:text-left font-semibold text-3xl underline md:text-5xl mb-10">
                Services
            </h1>
            <div
                className="relative -left-20 text-nowrap md:text-3xl py-2 md:py-4 my-2 slide font-thin">
                <div className="inline-block">
                    {mixServicesEls(servicesEls)}
                </div>
                <div className="inline-block">
                    {mixServicesEls(servicesEls)}
                </div>
            </div>
            <div
                className="relative -left-20 text-nowrap font-thin md:text-3xl py-2 md:py-4 my-2 slide">
                <div className="inline-block">
                    {mixServicesEls(servicesEls)}
                </div>
                <div className="inline-block">
                    {mixServicesEls(servicesEls)}
                </div>
            </div>
        </div>
    )
}