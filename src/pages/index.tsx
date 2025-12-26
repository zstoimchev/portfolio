import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import Hero from '@/components/sections/HeroSection';
import About from '@/components/sections/AboutSection';
import Portfolio from '@/components/sections/PortfolioSection';
import Blog from '@/components/sections/BlogSection';
import Contact from '@/components/sections/ContactSection';

export default function HomePage() {
    const [activeSection, setActiveSection] = useState('home');
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        setVisibleSections(prev => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll('section[id]').forEach(section =>
            observer.observe(section)
        );

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-950 text-gray-100">
            <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

            <Hero visible={visibleSections.has('home')} onNavigate={scrollToSection} />
            <About visible={visibleSections.has('about')} />
            <Portfolio visible={visibleSections.has('portfolio')} />
            <Blog visible={visibleSections.has('blog')} />
            <Contact visible={visibleSections.has('contact')} />

            <Footer />
        </div>
    );
}
