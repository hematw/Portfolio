import { TbDownload } from "react-icons/tb";
import { TbMenu2 } from "react-icons/tb";

export default function Header() {
    return (
        <header className="flex justify-between p-4 md:px-8  relative">
            <nav className=" border-gray-200 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Hemat
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a
                            href="/Hemat_resume.pdf"
                            download type="button"
                            className="text-white focus:bg-zinc-700 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center  flex font-semibold items-center">
                            Resume
                            <span
                                className="ml-2">
                                <TbDownload />
                            </span>
                        </a>
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white md:hidden focus:outline-none"
                            aria-controls="navbar-cta"
                            aria-expanded="false">
                            <span
                                className="sr-only">
                                Open main menu
                            </span>
                            Menu
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="w-full flex bg-[#131314] md:bg-transparent flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#home"
                                    className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white  border-gray-700"
                                    aria-current="page">
                                    Home</a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white  border-gray-700">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white border-gray-700">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white border-gray-700">
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </header>
    )
}