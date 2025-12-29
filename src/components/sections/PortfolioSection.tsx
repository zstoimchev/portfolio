import {useEffect, useState, useRef} from 'react';
import {ChevronLeft, ChevronRight, Github} from 'lucide-react';

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

export default function Portfolio({visible}: PortfolioProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [offset, setOffset] = useState(0);
    const animationRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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

    // Create infinite loop array (3 copies for seamless infinite scroll)
    const getInfiniteProjects = () => {
        if (projects.length === 0) return [];
        return [...projects, ...projects, ...projects];
    };

    const infiniteProjects = getInfiniteProjects();

    // Auto-slide animation - move one project every 3 seconds
    useEffect(() => {
        if (projects.length === 0 || isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Move every 3 seconds

        return () => clearInterval(interval);
    }, [projects.length, isPaused, offset]);

    const handleNext = () => {
        if (!containerRef.current) return;
        const cardWidth = containerRef.current.offsetWidth / 3;
        setOffset(prev => {
            const newOffset = prev - cardWidth;
            const resetPoint = -cardWidth * projects.length;
            return newOffset <= resetPoint ? 0 : newOffset;
        });
    };

    const handlePrev = () => {
        if (!containerRef.current) return;
        const cardWidth = containerRef.current.offsetWidth / 3;
        setOffset(prev => {
            const newOffset = prev + cardWidth;
            const resetPoint = -cardWidth * projects.length;
            return newOffset > 0 ? resetPoint : newOffset;
        });
    };

    const getCurrentIndex = () => {
        if (!containerRef.current || projects.length === 0) return 0;
        const cardWidth = containerRef.current.offsetWidth / 3;
        const index = Math.abs(Math.round(offset / cardWidth)) % projects.length;
        return index;
    };

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
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400 mb-4"/>
                        <p>Loading projects...</p>
                    </div>
                )}

                {!loading && projects.length === 0 && (
                    <div className="text-center text-gray-400">
                        <p>No projects found.</p>
                    </div>
                )}

                {!loading && projects.length > 0 && (
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Navigation Buttons - visible on hover */}
                        {!isPaused && (
                            <>
                                <button
                                    onMouseEnter={() => setIsPaused(false)}
                                    onMouseLeave={() => setIsPaused(true)}
                                    onClick={handlePrev}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-gray-900/90 hover:bg-emerald-600 p-3 md:p-4 rounded-full transition-all border border-gray-800 hover:border-emerald-600 z-10"
                                    aria-label="Previous projects"
                                >
                                    <ChevronLeft size={24} className="text-emerald-400"/>
                                </button>

                                <button
                                    onMouseEnter={() => setIsPaused(false)}
                                    onMouseLeave={() => setIsPaused(true)}
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-gray-900/90 hover:bg-emerald-600 p-3 md:p-4 rounded-full transition-all border border-gray-800 hover:border-emerald-600 z-10"
                                    aria-label="Next projects"
                                >
                                    <ChevronRight size={24} className="text-emerald-400"/>
                                </button>
                            </>
                        )}

                        {/* Carousel Container */}
                        <div className="overflow-hidden" ref={containerRef}>
                            <div
                                className="flex gap-6"
                                style={{
                                    transform: `translateX(${offset}px)`,
                                    transition: 'transform 0.8s ease-in-out'
                                }}
                            >
                                {infiniteProjects.map((project, idx) => (
                                    <div
                                        key={`${project.id}-${idx}`}
                                        className="flex-shrink-0"
                                        style={{width: 'calc(33.333% - 1rem)'}}
                                    >
                                        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-600 transition-all hover:scale-105 group flex flex-col h-full">
                                            {/* Image */}
                                            <div className="h-48 bg-gray-800 overflow-hidden flex-shrink-0">
                                                {project.image_url ? (
                                                    <img
                                                        src={project.image_url}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 flex items-center justify-center">
                                                        <span className="text-6xl opacity-20">{'</>'}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-emerald-400 group-hover:text-cyan-400 transition-colors">
                                                    {project.name}
                                                </h3>

                                                <p className="text-sm md:text-base text-gray-400 mb-4 flex-grow">
                                                    {project.description}
                                                </p>

                                                {project.technologies && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.technologies
                                                            .split(',')
                                                            .map((tech, techIdx) => (
                                                                <span
                                                                    key={techIdx}
                                                                    className="text-xs px-2 py-1 bg-gray-800 text-emerald-400 rounded"
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
                                                        className="text-sm md:text-base text-emerald-400 hover:text-cyan-400 flex items-center gap-2 mt-auto"
                                                    >
                                                        <Github size={16} className="inline"/>
                                                        View on GitHub →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                            {projects.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full transition-all ${
                                        index === getCurrentIndex()
                                            ? 'bg-emerald-400 w-8'
                                            : 'bg-gray-600 w-2'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Pause Indicator */}
                        {isPaused && (
                            <div className="absolute top-4 right-4 bg-gray-900/80 px-3 py-1 rounded-full text-emerald-400 text-sm border border-emerald-600">
                                Paused
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}