import { useEffect, useState } from 'react';
import { Moon, Sun, ArrowRight } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#110515]/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-primary dark:text-accent">Xebia</span>
            <span className="text-gray-900 dark:text-white">LMS</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Portals', 'Features', 'About Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold transition-colors relative tracking-wide py-2 text-gray-900 hover:text-primary dark:text-gray-200 dark:hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button onClick={toggle} className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle dark mode">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <a href="#portals">
            <button className="bg-primary hover:bg-[#4A1E47] text-white rounded-md px-6 py-2 h-auto text-sm font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
