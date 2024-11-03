import React, { useState,useEffect } from 'react';
import CMSTable from '../../../components/CMS/CMSTable';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import { usePage, useForm, router } from "@inertiajs/react";
import Pagination from '../../../components/Pagination';


const CMSCountries = () => {
  const { countries } = usePage().props;
  console.log(countries);
  const [countryName, setCountryName] = useState('');
  const [countriesList, setCountriesList] = useState(countries.data);
  const { post, delete: destroy, put} = useForm();

  const handleInputChange = (e) => {
    setCountryName(e.target.value);a
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('cms.countries.store',{
        country_name: countryName
    }), {
        onSuccess: () => {
            // Optional: Actions after success, like clearing fields
            setCountryName('');
            alert('Country has been added!');
            router.get(route('cms.countries.index'));
        },
        onError: (errors) => {
            // Handle errors here if needed
            console.log(errors);
        }
    });
};

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this country?')) {
      return;
    }
    else {
      destroy(route('cms.countries.destroy', { countries_id: id }), {
        onSuccess: () => {
          // Optional: Actions after success
          alert('Country has been deleted!');
          router.get(route('cms.countries.index'));
        },
        onError: (errors) => {
          // Handle errors here if needed
          console.log(errors);
        }
      });
    }
  };

  const handleSave = (id, data) => {
    alert('Save button clicked for row ID: ' + id);
    console.log('Data to be saved:', data.country_name);
    put(route('cms.countries.update', { countries_id: id, country_name: data.country_name}), {
      onSuccess: () => {
        // Optional: Actions after success
        alert('Country has been updated!');
        router.get(route('cms.countries.index'));
      },
      onError: (errors) => {
        // Handle errors here if needed
        console.log(errors);
      }
    });
  }

  const columns = [
    { Header: 'Country Name', accessor: 'country_name', editable: true },
  ];

  const handlePageChange = (page) => {
    router.get(route('cms.countries.index', { page }));
};

  return (
    //Sidebar
    <>
    <div className="flex">
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
        <CMSTable columns={columns} data={countriesList} handleSave={handleSave} handleDelete={handleDelete} idAccessor={'countries_id'}/>
      </div>
        {/* Pagination */}
        <div className="bg-dark-card-bg text-dark-text p-4 rounded-lg shadow-md w-full max-w-4xl mt-2">
        <Pagination
            currentPage={countries.current_page}
            lastPage={countries.last_page}
            onPageChange={handlePageChange}
        />
        </div>      
    </div>
  </div>
    </>
  );
}

export default CMSCountries;