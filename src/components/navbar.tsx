import {useState} from 'react';
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                        <Link className="block lg:inline-block px-4 py-2 text-xl text-amber-200"
                              href={`/`}>_home</Link>
                        <hr/>
                        <Link className="block lg:inline-block px-4 py-2 text-xl text-amber-200"
                              href={`/about`}>_about</Link>
                        <hr/>
                        <Link className="block lg:inline-block px-4 py-2 text-xl text-amber-200"
                              href={`/portfolio`}>_portfolio</Link>
                        <hr/>
                        <Link className="block lg:inline-block px-4 py-2 text-xl text-amber-200"
                              href={`/services`}>_services</Link>
                        <hr/>
                        <Link className="block lg:inline-block px-4 py-2 text-xl text-amber-200"
                              href={`/resume`}>_resume</Link>
                        <hr/>
                        <Link className="block lg:inline-block px-4 py-2 text-xl text-amber-200"
                              href={`/contact`}>_contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
