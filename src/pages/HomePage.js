import { useState, useEffect } from 'react';
import { useGetTopHeadlinesQuery } from '../services/newsApi';
import NewsCard from '../components/NewsCard';
import CountrySelector from '../components/CountrySelector';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { motion } from 'framer-motion';

const HomePage = () => {
    const [country, setCountry] = useState('us');
    const { data, error, isLoading } = useGetTopHeadlinesQuery(country);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold mb-8 text-center"
            >
                Top Headlines
            </motion.h1>
            
            <CountrySelector country={country} setCountry={setCountry} />
            
            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage message="Failed to load news" />}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {data?.articles?.map((article, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <NewsCard article={article} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;