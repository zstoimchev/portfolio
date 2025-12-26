interface AboutProps {
    visible: boolean;
}

const techStack = [
    'React',
    'Node.js',
    '.NET',
    'Python',
    'Rust',
    'Docker',
    'Kubernetes',
    'Linux',
    'MySQL',
    'Redis',
    'Git',
    'AWS',
];

export default function About({ visible }: AboutProps) {
    return (
        <section
            id="about"
            className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="max-w-4xl">
                <h2 className="text-5xl font-bold mb-12 text-emerald-400">
                    {'>'}_system_profile
                </h2>

                <div className="space-y-8">
                    {/* Background */}
                    <div className="border-l-4 border-emerald-600 pl-6 hover:border-cyan-400 transition-colors">
                        <h3 className="text-3xl mb-3 text-cyan-400">
                            {'//'} Background
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-xl">
                            I{"'"}m Zhivko, a Computer Science student building resilient systems
                            by day and probing their weaknesses by night. My journey began with
                            tearing apart Windows machines, evolved through Linux distro-hopping,
                            and now focuses on architecting secure infrastructure.
                        </p>
                    </div>

                    {/* Operations */}
                    <div className="border-l-4 border-emerald-600 pl-6 hover:border-cyan-400 transition-colors">
                        <h3 className="text-3xl mb-3 text-cyan-400">
                            {'//'} Operations
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-xl">
                            My homelab is a living lab where I deploy everything from Nextcloud
                            storage to intentionally vulnerable machines for security testing.
                            Through building .NET/Spring APIs and React frontends, I{"'"}ve
                            learned that simplicity beats cleverness.
                        </p>
                    </div>

                    {/* Security */}
                    <div className="border-l-4 border-emerald-600 pl-6 hover:border-cyan-400 transition-colors">
                        <h3 className="text-3xl mb-3 text-cyan-400">
                            {'//'} Security Focus
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-xl">
                            Cybersecurity isn{"'"}t just a career path — it{"'"}s a mindset. I
                            methodically study OWASP Top 10 vulnerabilities through controlled
                            environments, then apply those lessons to harden my systems.
                        </p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-16">
                    <h3 className="text-3xl mb-6 text-emerald-400">
                        {'//'} Tech Stack
                    </h3>

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {techStack.map(tech => (
                            <div
                                key={tech}
                                className="p-4 bg-gray-900 border border-gray-800 hover:border-emerald-600 rounded-lg text-center transition-all hover:scale-105"
                            >
                                <span className="text-lg text-gray-400">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
