import React, {useState, useEffect} from 'react';
import {ChevronDown, Github, Linkedin, Mail, Download, Menu, X} from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description?: string;
    image_url?: string;
    github_url?: string;
    technologies?: string;
}

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [projects, setProjects] = useState<Project[]>([]);
    const [projectsLoading, setProjectsLoading] = useState(true);

    // Fetch projects from API
    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setProjectsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setProjectsLoading(false);
            });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.3}
        );

        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-gray-950 text-gray-100 font-mono">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-emerald-400">
                        {'<'} Zhivko Stoimchev {' />'}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'portfolio', 'blog', 'contact'].map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`text-sm transition-colors ${
                                    activeSection === item
                                        ? 'text-emerald-400'
                                        : 'text-gray-400 hover:text-emerald-300'
                                }`}
                            >
                                _{item}
                            </button>
                        ))}
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-emerald-300 transition-colors"
                        >
                            _resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900 border-t border-gray-800">
                        <div className="flex flex-col space-y-4 p-6">
                            {['home', 'about', 'portfolio', 'blog', 'contact'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-left text-gray-400 hover:text-emerald-300"
                                >
                                    _{item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className={`min-h-screen flex flex-col justify-center items-center px-6 transition-all duration-1000 ${
                    visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="text-center max-w-5xl">
                    <p className="text-emerald-400 text-sm mb-4 animate-pulse">
                        {'//'} Hello friend, glad you are here! My name is
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                        {'<'} Zhivko Stoimchev {'/>'}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-4">
                        {'{" _backend engineer "'}
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                        Building resilient systems by day, probing their weaknesses by night.
                        From Windows machines to Kubernetes pods, I architect secure infrastructure
                        with a KISS principle mindset.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                        >
                            Get in Touch
                        </button>
                        <button
                            className="px-8 py-3 border border-emerald-600 hover:bg-emerald-600/10 rounded-lg transition-colors">
                            <Download size={20} className="inline mr-2"/>
                            Resume
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => scrollToSection('about')}
                    className="absolute bottom-10 animate-bounce text-emerald-400"
                >
                    <ChevronDown size={32}/>
                </button>
            </section>

            {/* About Section */}
            <section
                id="about"
                className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-200 ${
                    visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold mb-12 text-emerald-400">
                        {'>'}_system_profile
                    </h2>

                    <div className="space-y-8">
                        <div className="border-l-4 border-emerald-600 pl-6 hover:border-cyan-400 transition-colors">
                            <h3 className="text-xl mb-3 text-cyan-400">{'//'} Background</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I{"'"}m Zhivko, a Computer Science student building resilient systems by day and
                                probing their weaknesses by night. My journey began with tearing apart Windows
                                machines, evolved through Linux distro-hopping, and now focuses on architecting
                                secure infrastructure.
                            </p>
                        </div>

                        <div className="border-l-4 border-emerald-600 pl-6 hover:border-cyan-400 transition-colors">
                            <h3 className="text-xl mb-3 text-cyan-400">{'//'} Operations</h3>
                            <p className="text-gray-400 leading-relaxed">
                                My homelab is a living lab where I deploy everything from Nextcloud storage to
                                intentionally vulnerable machines for security testing. Through building .NET/Spring
                                APIs and React frontends, I{"'"}ve learned that simplicity beats cleverness.
                            </p>
                        </div>

                        <div className="border-l-4 border-emerald-600 pl-6 hover:border-cyan-400 transition-colors">
                            <h3 className="text-xl mb-3 text-cyan-400">{'//'} Security Focus</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Cybersecurity isn{"'"}t just a career path - it{"'"}s a mindset. I methodically study
                                OWASP Top 10 vulnerabilities through controlled environments, then apply those
                                lessons to harden my systems.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="mt-16">
                        <h3 className="text-2xl mb-6 text-emerald-400">{'//'} Tech Stack</h3>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {['React', 'Node.js', '.NET', 'Python', 'Rust', 'Docker', 'Kubernetes', 'Linux', 'MySQL', 'Redis', 'Git', 'AWS'].map(tech => (
                                <div
                                    key={tech}
                                    className="p-4 bg-gray-900 border border-gray-800 hover:border-emerald-600 rounded-lg text-center transition-all hover:scale-105"
                                >
                                    <span className="text-sm text-gray-400">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section
                id="portfolio"
                className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-300 ${
                    visibleSections.has('portfolio') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="max-w-6xl w-full">
                    <h2 className="text-4xl font-bold mb-12 text-emerald-400 text-center">
                        {'>'}_featured_projects
                    </h2>

                    {projectsLoading ? (
                        <div className="text-center text-gray-400">
                            <div
                                className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400 mb-4"></div>
                            <p>Loading projects...</p>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-center text-gray-400">
                            <p>No projects found.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, idx) => (
                                <div
                                    key={project.id || idx}
                                    className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-600 transition-all hover:scale-105 group"
                                >
                                    <div className="h-48 bg-gray-800 overflow-hidden">
                                        {project.image_url ? (
                                            <img
                                                src={project.image_url}
                                                alt={project.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 flex items-center justify-center">
                                                <span className="text-6xl opacity-20">{'</>'}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-emerald-400 group-hover:text-cyan-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.split(',').map((tech: string, i: React.Key | null | undefined) => (
                                                    <span
                                                        key={i}
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
                                                className="text-emerald-400 hover:text-cyan-400 text-sm flex items-center gap-2"
                                            >
                                                <Github size={16}/>
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

            {/* Blog Section */}
            <section
                id="blog"
                className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-400 ${
                    visibleSections.has('blog') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-8 text-emerald-400">
                        {'>'}_blog
                    </h2>
                    <p className="text-gray-500 text-xl">
                        {'//'} Coming soon... Stay tuned for insights on system architecture,
                        <br/>
                        security practices, and homelab adventures.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 delay-500 ${
                    visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="max-w-4xl w-full">
                    <h2 className="text-4xl font-bold mb-12 text-emerald-400 text-center">
                        {'>'}_get_in_touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl mb-4 text-cyan-400">{'//'} Let{"'"}s Connect</h3>
                                <p className="text-gray-400 mb-6">
                                    Want to debate Rust{"'"}s borrow checker versus Java{"'"}s GC? Need help with
                                    security configurations? Just appreciate good tech discussions? Let{"'"}s talk!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:zstoimchev@outlook.com"
                                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <Mail size={20}/>
                                    zstoimchev@outlook.com
                                </a>
                                <a
                                    href="https://github.com/zstoimchev"
                                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <Github size={20}/>
                                    github.com/zstoimchev
                                </a>
                                <a
                                    href="https://linkedin.com/in/zstoimchev"
                                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <Linkedin size={20}/>
                                    linkedin.com/in/zstoimchev
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-600 transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-600 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-600 transition-colors"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-600 transition-colors"
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert('Message sent!');
                                    }}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6 text-center">
                <p className="text-gray-500 mb-4">
                    © 2025 Zhivko Stoimchev. All rights reserved.
                </p>
                {/*<div className="flex justify-center gap-6 text-sm">*/}
                {/*    <a href="#" className="text-emerald-400 hover:text-cyan-400">Privacy Policy</a>*/}
                {/*    <a href="#" className="text-emerald-400 hover:text-cyan-400">Terms of Service</a>*/}
                {/*</div>*/}
            </footer>
        </div>
    );
};

export default Portfolio;