import {useEffect, useState} from 'react';
import Image from 'next/image';
import GitHub from '@/components/icons/GitHubIcon';

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

    return (
        <section
            id="portfolio"
            className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-emerald-400 text-center">
                    {'>'}_featured_projects
                </h2>

                {/* Loading */}
                {loading && (
                    <div className="text-center text-gray-400">
                        <div
                            className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400 mb-4"/>
                        <p>Loading projects...</p>
                    </div>
                )}

                {/* Empty */}
                {!loading && projects.length === 0 && (
                    <div className="text-center text-gray-400">
                        <p>No projects found.</p>
                    </div>
                )}

                {/* Projects */}
                {!loading && projects.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <div
                                key={project.id}
                                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-600 transition-all hover:scale-105 group"
                            >
                                {/* Image */}
                                <div className="h-48 bg-gray-800 overflow-hidden">
                                    {project.image_url ? (
                                        <Image
                                            src={project.image_url}
                                            alt={project.name}
                                            width={500}
                                            height={300}
                                            className="w-full h-full object-cover"
                                            style={{objectFit: 'cover'}}
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 flex items-center justify-center">
                                            <span className="text-6xl opacity-20">{'</>'}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-emerald-400 group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>

                                    <p className="text-md md:text-xltext-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    {project.technologies && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies
                                                .split(',')
                                                .map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs px-2 py-1 bg-gray-800 text-emerald-400 rounded"
                                                    >
                                                    {tech.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    )}

                                    {/* GitHub */}
                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg md:text-xl text-emerald-400 hover:text-cyan-400 flex items-center gap-2"
                                        >
                                            <GitHub size={16} className="inline"/>
                                            View on GitHub →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
