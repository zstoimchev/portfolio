export default function About() {
    return (
        <div
            className="flex flex-col mt-10 gap-10 items-center sm:items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-vt323-regular)]">
            <h1 className="custom-title-page">&lt; About me &gt;</h1>

            <div className="widdd">
                <div className="pb-5">
                    <h1 className="text-2xl">&gt;_ short introduction</h1>
                    <p className="text-justify">Hello Human, it&apos;s me, Zhivko! My favorite data structure is Bloom
                        Filter, and you? Perfect. Nice
                        to meet you.
                    </p>
                </div>

                <div className="pb-5 ">
                    <h1 className="text-2xl">&gt;_ passion and dedication</h1>
                    <p className="text-justify">Since my early days in school, I have developed a passion for system
                        security and integrity.
                        This led me to explore different operating systems and their vulnerabilities, such as Windows,
                        alongside Linux and its many distributions. I like taking new challenges and learning from my
                        mistakes. Currently I am focused on networking, building mini HomeLab, with passion to continue
                        in the Cybersecurity field. Starting slowly but surely going for the top.
                    </p>
                </div>

                <div className="pb-5">
                    <h1 className="text-2xl">&gt;_ methods and efficiency</h1>
                    <p className="text-justify">I strive for simplicity and clarity in my programming endeavors,
                        adhering to the KISS principle,
                        therefore saving considerable time in debugging my applications. This principle guides me to
                        create solutions that are both efficient and easy to understand. All the projects are visible on
                        my GitHub profile.
                    </p>
                </div>

                <div>
                    <h1 className="text-2xl">&gt;_ contact and cooperation</h1>
                    <p className="text-justify">Have any questions? Not a problem at all, just send me an email, I tend
                        to respond as soon as I
                        read it. Enjoy the work I&apos;ve done so far. Cheers!
                    </p>
                </div>
            </div>
            {/*<div className="background">*/}
            {/*    <div className="line"></div>*/}
            {/*    <div className="line"></div>*/}
            {/*    <div className="line"></div>*/}
            {/*    <div className="line"></div>*/}
            {/*    <div className="curve"></div>*/}
            {/*    <div className="curve"></div>*/}
            {/*</div>*/}
        </div>)
}