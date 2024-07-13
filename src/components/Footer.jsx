export default function Footer() {
    return (
        <footer className="p-4 md:p-10 mt-10">
            <div className=" p-4 bg-gradient-to-t from-neutral-950 to-neutral-500 border-2 rounded-xl border-zinc-500 md:p-10 md:pb-0">
                <div className="flex gap-6 md:items-center flex-col md:flex-row justify-around">
                    <div className="w-1/3 flex-grow">
                        <img src="/hero_avatar.png" alt="" className="md:w-72 m-auto" />
                    </div>
                    <div className="flex gap-2 flex-grow md:text-right">
                        <div className="text-sm md:text-lg w-1/2">
                            <h3 className="font-semibold">Professional Links</h3>
                            <ul className="text-neutral-300 font-thin ">
                                <li className="mt-2 md:mt-6"><a href="https://www.linkedin.com/in/hematw" target="_blank">LinkedIn</a></li>
                                <li className="mt-2 md:mt-6"><a href="https://www.x.com/_hematw" target="_blank">Twitter</a></li>
                                <li className="mt-2 md:mt-6"><a href="https://www.github.com/hematw" target="_blank">Github</a></li>
                                <li className="mt-2 md:mt-6"><a href="mailto:hematking12@gmail.com" target="_blank">Send Email</a></li>
                            </ul>
                        </div>
                        <div className="text-sm md:text-lg w-1/2">
                            <h3 className="font-semibold">Quick Menu</h3>
                            <ul className="text-neutral-300 font-thin ">
                                <li className="mt-2 md:mt-6"><a href="#home">Home</a></li>
                                <li className="mt-2 md:mt-6"><a href="#about">About</a></li>
                                <li className="mt-2 md:mt-6"><a href="#projects">Projects</a></li>
                                <li className="mt-2 md:mt-6"><a href="#services">Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-neutral-300 py-6 border-t-2 mt-8">
                    &copy;{new Date().getFullYear()} Hematullah Waziri. All Right Reserved
                </div>
            </div>
        </footer>
    )
}