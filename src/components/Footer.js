const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-8">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
                <p>© {new Date().getFullYear()} Global News Explorer. All rights reserved.</p>
                <p className="mt-2 text-sm">
                    Data provided by NewsAPI.org
                </p>
            </div>
        </footer>
    );
};

export default Footer;