import {useState} from 'react';
import {Menu, X} from 'lucide-react';

interface NavigationProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

const sections = ['home', 'about', 'portfolio', 'blog', 'contact'];

export default function Navigation({
                                       activeSection,
                                       onNavigate,
                                   }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (id: string) => {
        onNavigate(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="text-3xl font-bold text-emerald-400 cursor-pointer"
                    onClick={() => handleNavigate('home')}
                >
                    {'<'} Zhivko Stoimchev {' />'}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {sections.map(item => (
                        <button
                            key={item}
                            onClick={() => handleNavigate(item)}
                            className={`text-xl transition-colors ${
                                activeSection === item
                                    ? 'text-emerald-400'
                                    : 'text-gray-400 hover:text-emerald-300'
                            }`}
                        >
                            _{item}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-400"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="flex flex-col space-y-4 p-6">
                        {sections.map(item => (
                            <button
                                key={item}
                                onClick={() => handleNavigate(item)}
                                className="text-left text-gray-400 hover:text-emerald-300"
                            >
                                _{item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
