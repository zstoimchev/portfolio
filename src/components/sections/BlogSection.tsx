interface BlogProps {
    visible: boolean;
}

export default function Blog({ visible }: BlogProps) {
    return (
        <section
            id="blog"
            className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="max-w-4xl text-center">
                <h2 className="text-6xl font-bold mb-8 text-emerald-400">
                    {'>'}_blog
                </h2>

                <p className="text-gray-500 text-xl leading-relaxed">
                    {'//'} Coming soon... Stay tuned for insights on system architecture,
                    <br />
                    security practices, and homelab adventures.
                </p>
            </div>
        </section>
    );
}
