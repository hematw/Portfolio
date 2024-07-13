import { TbDownload } from "react-icons/tb";

export default function Header() {
    return (
        <header className="flex justify-between p-4 md:p-8  relative">
            <nav class=" border-gray-200 w-full">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://flowbite.com/"
                        class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Hemat
                        </span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a
                            href="/ejs.pdf"
                            download type="button"
                            class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center  flex font-semibold items-center">
                            Resume
                            <span
                                className="ml-2"><TbDownload />
                            </span>

                        </a>
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white md:hidden focus:outline-none hover:bg-white-700"
                            aria-controls="navbar-cta"
                            aria-expanded="false">
                            <span
                                class="sr-only">
                                Open main menu
                            </span>
                            <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="w-full flex bg-[#131314] flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#home"
                                    class="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white  border-gray-700"
                                    aria-current="page">
                                    Home</a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    class="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white  border-gray-700">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    class="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white border-gray-700">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    class="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:scale-105 text-white hover:bg-gray-700 hover:text-white border-gray-700">
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