import {useEffect, useState} from 'react';

const roles = ["developer",
    "backend engineer",
    "system administrator",
    "junior network associate"];

function TerminalLine({text, delay = 0, blinking = false}: {
    text: string;
    delay?: number;
    blinking?: boolean;
}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!visible) return null;

    return (
        <p>
            &gt; {text}
            {blinking && <span className="animate-pulse"> ▌</span>}
        </p>
    );
}

export default function Home() {

    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (index === roles.length) return;

        if (subIndex === roles[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), 1000);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting]);

    useEffect(() => {
        setDisplayText(roles[index].substring(0, subIndex));
    }, [subIndex, index]);

    return (
        <div
            className="flex flex-col mt-10 gap-10 items-center sm:items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-vt323-regular)]">
            <div className="gap-0 items-center flex flex-col">
                <p>&#47;&#47; Hello friend, glad you are here! My name is</p>
                {/*<h1 className="text-8xl">&#123;&quot; Zhivko Stoimchev &quot;&#125;</h1>*/}
                <h1 className="text-8xl name-title">&lt; Zhivko Stoimchev &gt;</h1>
            </div>

            <div className="gap-0 items-center flex flex-col">
                <p>&#47;&#47; I am working as</p>
                <h1 className="text-6xl role-title">&#123;&quot; _{displayText} &quot;&#125;</h1>
            </div>

            <div className="w-full max-w-3xl mt-10 border border-gray-700 rounded-md bg-black text-green-400 p-6 text-xl">
                <p className="text-gray-500">// system boot sequence</p>

                <div className="mt-4 space-y-2">
                    <TerminalLine text="initializing full-stack environment..." delay={500} />
                    <TerminalLine text="loading Next.js modules" delay={1200} />
                    <TerminalLine text="connecting to PostgreSQL via Prisma" delay={2000} />
                    <TerminalLine text="deploying infrastructure on Vercel" delay={2800} />
                    <TerminalLine text="status: online" delay={3600} blinking />
                </div>
            </div>


        </div>
    );
}
