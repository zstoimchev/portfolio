import {useEffect, useState} from 'react';

const roles = ["developer",
    "backend engineer",
    "system administrator",
    "junior network associate"];

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
                <p>Hello friend, glad you are here! My name is</p>
                {/*<h1 className="text-8xl">&#123;&quot; Zhivko Stoimchev &quot;&#125;</h1>*/}
                <h1 className="text-8xl">&lt; Zhivko Stoimchev &gt;</h1>
            </div>

            <div className="gap-0 items-center flex flex-col">
                <p>I am working as</p>
                <h1 className="text-6xl">&#123;&quot; _{displayText} &quot;&#125;</h1>
            </div>

        </div>
    );
}
