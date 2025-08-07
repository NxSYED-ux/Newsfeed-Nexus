const ErrorMessage = ({ message = 'An error occurred' }) => {
    return (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
            <span className="font-medium">Error!</span> {message}
        </div>
    );
};

export default ErrorMessage;