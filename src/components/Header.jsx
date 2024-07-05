import { TbDownload } from "react-icons/tb";

export default function Header() {
    return (
        <header className="flex justify-between p-8">
            <h1 className="font-semibold">Hematw</h1>

            <nav>
                <ul className="flex gap-10">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <a
                className="flex font-semibold items-center"
                href="/ejs.pdf"
                download>
                Resume
                <span className="ml-2"><TbDownload /></span>
            </a>
        </header>
    )
}