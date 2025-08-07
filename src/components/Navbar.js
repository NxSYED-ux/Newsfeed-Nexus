import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                    Global News
                </Link>
                
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full focus:outline-none"
                        aria-label="Toggle theme"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                    <Link to="/search" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                        Search
                    </Link>
                    <Link to="/profile" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;