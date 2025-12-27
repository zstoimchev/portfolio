import {useEffect, useState} from 'react';
import {ChevronDown, Download} from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
    visible: boolean;
    onNavigate: (id: string) => void;
}

const roles = [
    'developer',
    'backend engineer',
    'system administrator',
    'junior network associate',
];

export default function Hero({visible, onNavigate}: HeroProps) {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        if (index === roles.length) return;

        if (subIndex === roles[index].length + 1 && !isDeleting) {
            const timeout = setTimeout(() => setIsDeleting(true), 1000);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(
            () => setSubIndex((prev) => prev + (isDeleting ? -1 : 1)),
            isDeleting ? 50 : 150
        );

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting]);

    useEffect(() => {
        setDisplayText(roles[index].substring(0, subIndex));
    }, [subIndex, index]);

    return (
        <section
            id="home"
            className={`min-h-screen flex flex-col justify-center items-center px-6 transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="text-center max-w-5xl">
                {/* Profile Image */}
                <div className="mb-8 flex justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg shadow-emerald-600/50 hover:scale-105 transition-transform">
                        <Image
                            src="/profile.jpg"
                            // src="/1.jpeg"
                            // src="/2.jpeg"
                            alt="Zhivko Stoimchev"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <p className="text-lg md:text-2xl text-emerald-400 mb-4 animate-pulse">
                    {'//'} Hello friend, glad you are here! My name is
                </p>

                <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap md:whitespace-nowrap text-center">
                    {'<'} Zhivko Stoimchev {'/>'}
                </h1>

                {/* Typing effect line */}
                <p className="text-xl md:text-3xl text-gray-400 mb-4">
                    {'{" _'}
                    {displayText}
                    <span className="blinking-cursor">|</span>
                    {' "}'}
                </p>

                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12">
                    Building resilient systems by day, probing their weaknesses by night.
                    From Windows machines to Kubernetes pods, I architect secure
                    infrastructure with a KISS principle mindset.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => onNavigate('contact')}
                        className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                    >
                        Get in Touch
                    </button>

                    <a
                        href="/cv.pdf"
                        download="Zhivko-Stoimchev-Resume.pdf"
                        className="px-8 py-3 border border-emerald-600 hover:bg-emerald-600/10 rounded-lg transition-colors inline-flex items-center"
                    >
                        <Download size={20} className="inline mr-2"/>
                        Resume
                    </a>
                </div>
            </div>

            <button
                onClick={() => onNavigate('about')}
                className="absolute bottom-10 animate-bounce text-emerald-400"
                aria-label="Scroll to About section"
            >
                <ChevronDown size={32}/>
            </button>
        </section>
    );
}