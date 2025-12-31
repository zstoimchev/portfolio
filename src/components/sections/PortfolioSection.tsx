import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description?: string;
    image_url?: string;
    github_url?: string;
    technologies?: string;
}

interface PortfolioProps {
    visible: boolean;
}

export default function Portfolio({ visible }: PortfolioProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [offset, setOffset] = useState(0);
    const [enableTransition, setEnableTransition] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);

    /* =========================
       FETCH PROJECTS
    ========================= */
    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching projects:', err);
                setLoading(false);
            });
    }, []);

    /* =========================
       DUPLICATE PROJECTS
    ========================= */
    const infiniteProjects =
        projects.length > 0
            ? [...projects, ...projects, ...projects]
            : [];

    /* =========================
       START IN MIDDLE COPY
    ========================= */
    useEffect(() => {
        if (!containerRef.current || projects.length === 0) return;

        const cardWidth = containerRef.current.offsetWidth / 3;
        setEnableTransition(false);
        setOffset(-cardWidth * projects.length);
    }, [projects.length]);

    /* =========================
       AUTO SLIDE
    ========================= */
    useEffect(() => {
        if (projects.length === 0 || isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [projects.length, isPaused]);

    /* =========================
       HANDLERS
    ========================= */
    const handleNext = () => {
        if (!containerRef.current) return;

        const cardWidth = containerRef.current.offsetWidth / 3;
        setEnableTransition(true);
        setOffset(prev => prev - cardWidth);
    };

    const handlePrev = () => {
        if (!containerRef.current) return;

        const cardWidth = containerRef.current.offsetWidth / 3;
        setEnableTransition(true);
        setOffset(prev => prev + cardWidth);
    };

    /* =========================
       SILENT RESET
    ========================= */
    useEffect(() => {
        if (!containerRef.current || projects.length === 0) return;

        const cardWidth = containerRef.current.offsetWidth / 3;
        const maxOffset = -cardWidth * projects.length * 2;

        if (offset <= maxOffset) {
            setTimeout(() => {
                setEnableTransition(false);
                setOffset(-cardWidth * projects.length);
            }, 800);
        }

        if (offset >= 0) {
            setTimeout(() => {
                setEnableTransition(false);
                setOffset(-cardWidth * projects.length);
            }, 800);
        }
    }, [offset, projects.length]);

    /* =========================
       CURRENT INDEX
    ========================= */
    const getCurrentIndex = () => {
        if (!containerRef.current || projects.length === 0) return 0;

        const cardWidth = containerRef.current.offsetWidth / 3;
        const relativeOffset =
            Math.abs(offset + cardWidth * projects.length);

        return Math.round(relativeOffset / cardWidth) % projects.length;
    };

    /* =========================
       RENDER
    ========================= */
    return (
        <section
            id="portfolio"
            className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-emerald-400 text-center">
                    {'>'}_featured_projects
                </h2>

                {loading && (
                    <div className="text-center text-gray-400">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400 mb-4" />
                        <p>Loading projects...</p>
                    </div>
                )}

                {!loading && projects.length > 0 && (
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* NAV BUTTONS */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-900/90 hover:bg-emerald-600 p-4 rounded-full border border-gray-800 z-10"
                        >
                            <ChevronLeft className="text-emerald-400" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-900/90 hover:bg-emerald-600 p-4 rounded-full border border-gray-800 z-10"
                        >
                            <ChevronRight className="text-emerald-400" />
                        </button>

                        {/* CAROUSEL */}
                        <div className="overflow-hidden" ref={containerRef}>
                            <div
                                className="flex gap-6"
                                style={{
                                    transform: `translateX(${offset}px)`,
                                    transition: enableTransition
                                        ? 'transform 0.8s ease-in-out'
                                        : 'none'
                                }}
                            >
                                {infiniteProjects.map((project, idx) => (
                                    <div
                                        key={`${project.id}-${idx}`}
                                        className="flex-shrink-0"
                                        style={{ width: 'calc(33.333% - 1rem)' }}
                                    >
                                        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-600 transition-all hover:scale-105 h-full">
                                            <div className="h-48 bg-gray-800">
                                                {project.image_url ? (
                                                    <img
                                                        src={project.image_url}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center opacity-20">
                                                        {'</>'}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-6 flex flex-col h-full">
                                                <h3 className="text-xl font-bold text-emerald-400 mb-2">
                                                    {project.name}
                                                </h3>

                                                <p className="text-gray-400 flex-grow mb-4">
                                                    {project.description}
                                                </p>

                                                {project.technologies && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.technologies
                                                            .split(',')
                                                            .map((tech, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-xs bg-gray-800 px-2 py-1 rounded text-emerald-400"
                                                                >
                                                                    {tech.trim()}
                                                                </span>
                                                            ))}
                                                    </div>
                                                )}

                                                {project.github_url && (
                                                    <a
                                                        href={project.github_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-emerald-400 hover:text-cyan-400"
                                                    >
                                                        <Github size={16} />
                                                        View on GitHub →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* INDICATORS */}
                        <div className="flex justify-center gap-2 mt-8">
                            {projects.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 rounded-full transition-all ${
                                        i === getCurrentIndex()
                                            ? 'bg-emerald-400 w-8'
                                            : 'bg-gray-600 w-2'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
