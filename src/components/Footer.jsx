export default function Footer() {
    return (
        <footer className="px-4 md:px-10 mt-10">
            <div className="flex gap-6 bg-gradient-to-t from-neutral-950 to-neutral-500 border-2 rounded-t-xl border-zinc-500 p-4 md:items-center flex-col md:flex-row">
                <div className="w-1/3">
                    <img src="/hero_avatar.png" alt="" />
                </div>
                <div className="flex gap-2">
                    <div className="text-sm w-1/2">
                        <h3 className="font-semibold">Professional Links</h3>
                        <ul className="text-neutral-300 font-thin ">
                            <li className="mt-2"><a href="www.linkedin.com/hematw">LinkedIn</a></li>
                            <li className="mt-2"><a href="www.x.com/_hematw">Twitter</a></li>
                            <li className="mt-2"><a href="www.github.com/hematw">Github</a></li>
                            <li className="mt-2"><a href="www.linkedin.com/hematw">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div  className="text-sm w-1/2">
                        <h3 className="font-semibold">Quick Menu</h3>
                        <ul className="text-neutral-300 font-thin ">
                            <li className="mt-2"><a href="www.linkedin.com/hematw">Home</a></li>
                            <li className="mt-2"><a href="www.x.com/_hematw">About</a></li>
                            <li className="mt-2"><a href="www.github.com/hematw">Projects</a></li>
                            <li className="mt-2"><a href="www.linkedin.com/hematw">Services</a></li>
                        </ul>
                    </div>
                </div>
            <div className="text-sm text-neutral-300 py-2 border-t-2">
                &copy;{new Date().getFullYear()} Hematullah Waziri. All Right Reserved
            </div>
            </div>
        </footer>
    )
}