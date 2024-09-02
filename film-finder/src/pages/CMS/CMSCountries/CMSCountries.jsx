import CMSInput from '../../../components/CMS/CMSInput.jsx';
import CMSTable from '../../../components/CMS/CMSTable.jsx';
import { useState } from 'react';

function CMSCountries() {
    const [countryName, setCountryName] = useState('');
    const [countries, setCountries] = useState([
      { id: 1, name: 'Indonesia', age: 75 },
      { id: 2, name: 'Malaysia', age: 63 },
      { id: 3, name: 'Singapore', age: 55 },
      { id: 4, name: 'Thailand', age: 70 },
    ]);

    const handleInputChange = (e) => {
        setCountryName(e.target.value);
      };
    
      const handleSubmit = () => {
        // Example of adding a new country
        const newCountry = {
          id: countries.length + 1,
          name: countryName,
          age: Math.floor(Math.random() * 100),
        };
        setCountries([...countries, newCountry]);
        setCountryName(''); // Clear input after submission
      };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Countries</h1>
            <CMSInput type={'text'} label={'Country Name'} value={''} onChange={() => {}} />
            {/* <CMSInput
                type="text"
                label="Country Name"
                value={countryName}
                onChange={handleInputChange}
                onSubmit={handleSubmit}
            />
            <CMSTable data={countries} /> */}
        </div>
    );
}

export default CMSCountries;