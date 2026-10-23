import { SiBuymeacoffee } from "react-icons/si";
import { site } from "../content";

export default function Footer() {
    return (
        <footer className="p-4 md:p-10 mt-10 max-w-7xl m-auto">
            <div className=" p-4 bg-gradient-to-t from-neutral-950 to-neutral-500 border-2 rounded-xl border-zinc-500 md:p-10 md:pb-0">
                <div className="flex gap-6 md:items-center flex-col md:flex-row justify-around">
                    <div className="flex items-center justify-around">
                        <div className="w-1/3 h-44">
                            <img src={site.footerImage} alt="" className="md:w-72 m-auto" />
                        </div>
                        <a
                            href={site.coffeeUrl}
                            target="_blank"
                            className="bg-yellow-400 text-black flex items-center rounded-xl px-4 py-2 text-lg font-semibold border">
                            <SiBuymeacoffee />
                            <span>Buy me a coffee</span>
                        </a>
                    </div>
                    <div className="flex gap-2 flex-grow md:text-right">
                        <div className="text-sm md:text-lg w-1/2">
                            <h3 className="font-semibold">Professional Links</h3>
                            <ul className="text-neutral-300 font-thin ">
                                {site.socials.map((link) => (
                                    <li key={link.href} className="mt-2 md:mt-6">
                                        <a href={link.href} target="_blank" rel="noreferrer">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li className="mt-2 md:mt-6">
                                    <a href={`mailto:${site.email}`}>Send Email</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm md:text-lg w-1/2">
                            <h3 className="font-semibold">Quick Menu</h3>
                            <ul className="text-neutral-300 font-thin ">
                                {site.navLinks.map((link) => (
                                  <li key={link.href} className="mt-2 md:mt-6">
                                    <a href={link.href}>{link.label}</a>
                                  </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-neutral-300 py-6 border-t-2 mt-8">
                    &copy;{new Date().getFullYear()} {site.fullName}. All Right Reserved
                </div>
            </div>
        </footer>
    )
}
