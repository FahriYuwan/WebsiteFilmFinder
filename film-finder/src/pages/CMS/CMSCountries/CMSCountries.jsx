import React, { useState } from 'react';
import CMSTable from '../../../components/CMS/CMSTable';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
const CMSCountries = () => {
  const [countryName, setCountryName] = useState('');
  const [countries, setCountries] = useState([
    { id: 1, name: 'Indonesia' },
    { id: 2, name: 'Malaysia' },
    { id: 3, name: 'Singapore' },
    { id: 4, name: 'Thailand' },
  ]);

  const handleInputChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCountry = {
      id: countries.length + 1,
      name: countryName,
    };
    setCountries([...countries, newCountry]); // Add new country to the list
    setCountryName(''); // Clear input after submission
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this country?')) {
      return;
    }
    setCountries(countries.filter((country) => country.id !== id));
  };

  const handleSave = () => {
    //alert the user that the data has been saved
    alert('Data has been saved!');
  };

  const columns = [
    { Header: 'Country Name', accessor: 'name', editable: true },
  ];

  return (
    //Sidebar
    <>
    <Sidebar active_country ={true}/>
    <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
      {/* Form Section */}
      <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Add New Country</h2>
        <form id="country-form" className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            id="country-name"
            name="Country Name"
            type="text"
            placeholder="Enter a country name"
            value={countryName}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="w-full bg-dark-accent text-dark-text py-3 px-4 rounded-md hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium"
            text="Submit"
            />
        </form>
      </div>

      {/* Countries Table */}
      <div className="bg-dark-card-bg p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Countries List</h2>
        <CMSTable columns={columns} data={countries} handleSave={handleSave} handleDelete={handleDelete} />
      </div>
    </div>
    </>
  );
}

export default CMSCountries;