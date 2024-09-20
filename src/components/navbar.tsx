import {useState} from 'react';
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = async () => {
        const response = await fetch('https://raw.githubusercontent.com/zstoimchev/cv-latest/main/Zhivko_Stoimchev_CV.pdf');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Zhivko_Stoimchev_CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };


    return (
        <nav className="bg-gray-800 p-4 absolute w-full z-10 content font-[family-name:var(--font-vt323-regular)]">
            <div className="container mx-auto flex justify-between items-center relative">
                <Link className="text-white text-2xl font-normal" href="/">Zhivko Stoimchev</Link>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`absolute top-16 right-0 w-full bg-gray-800 lg:static lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="lg:flex lg:space-x-4 text-white">
                        <Link className="block lg:inline-block hover:text-navColorHover px-4 py-2 text-xl text-navColor"
                              href={`/`}>_home</Link>
                        <hr/>
                        <Link className="block lg:inline-block hover:text-navColorHover px-4 py-2 text-xl text-navColor"
                              href={`/about`}>_about</Link>
                        <hr/>
                        <Link className="block lg:inline-block hover:text-navColorHover px-4 py-2 text-xl text-navColor"
                              href={`/portfolio`}>_portfolio</Link>
                        <hr/>
                        <Link className="block lg:inline-block hover:text-navColorHover px-4 py-2 text-xl text-navColor"
                              href={`/services`}>_services</Link>
                        <hr/>
                        <button
                            className="block lg:inline-block hover:text-navColorHover px-4 py-2 text-xl text-navColor"
                            onClick={handleDownload}>_resume
                        </button>
                        <hr/>
                        <Link className="block lg:inline-block hover:text-navColorHover px-4 py-2 text-xl text-navColor"
                              href={`/contact`}>_contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
