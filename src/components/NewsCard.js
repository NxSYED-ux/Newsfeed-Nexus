import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
    const { mode } = useSelector((state) => state.theme);
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-lg overflow-hidden shadow-lg ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
            <img
                src={article.urlToImage || 'https://via.placeholder.com/400x200'}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-sm mb-4">{article.description?.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</span>
                    <Link
                        to={`/article/${encodeURIComponent(article.title)}`}
                        state={{ article }}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsCard;