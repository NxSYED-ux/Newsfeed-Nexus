import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCountry } from '../features/newsSlice';

const CountrySelector = () => {
    const [selectedCountry, setSelectedCountry] = useState('us');
    const dispatch = useDispatch();
    
    const countries = [
        { code: 'us', name: 'United States' },
        { code: 'gb', name: 'United Kingdom' },
        { code: 'in', name: 'India' },
        { code: 'ca', name: 'Canada' },
        { code: 'au', name: 'Australia' }
    ];
    
    const handleChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        dispatch(setCountry(country));
    };
    
    return (
        <select
            value={selectedCountry}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        >
            {countries.map((country) => (
                <option key={country.code} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
};

export default CountrySelector;