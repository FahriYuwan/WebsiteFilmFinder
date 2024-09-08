import React,{useState} from 'react';
import Sidebar from '../../../components/Sidebar';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import CMSTable from '../../../components/CMS/CMSTable';

function CMSAwards() {
    const [country, setCountry] = useState('');
    const [award, setAward] = useState('');
    const [year, setYear] = useState('');

    const [awards, setAwards] = useState([
        { id: 1, country: 'Indonesia', award: 'Best Film', year: '2021' },
        { id: 2, country: 'Malaysia', award: 'Best Director', year: '2021' },
        { id: 3, country: 'Singapore', award: 'Best Actor', year: '2021' },
        { id: 4, country: 'Thailand', award: 'Best Actress', year: '2021' },
    ]);

    // Array of awards
    const handleInputChange = (e) => {
        setCountry(e.target.value);
        setAward(e.target.value);
        setYear(e.target.value);
    };
    
    // Add new award to the list
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAward = {
            id: awards.length + 1,
            country: country,
            award: award,
            year: year,
        };
        setAwards([...awards, newAward]); // Add new award to the list
        setCountry(''); // Clear input after submission
        setAward(''); 
        setYear(''); 
    }
    // Delete award
    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this award?')) {
            return;
        }
        setAwards(awards.filter((award) => award.id !== id));
    };
    // Save award
    const handleSave = () => {
        //alert the user that the data has been saved
        alert('Data has been saved!');
    };

    const columns = [
        { Header: 'Country', accessor: 'country', editable: true },
        { Header: 'Award', accessor: 'award', editable: true },
        { Header: 'Year', accessor: 'year', editable: true },
    ];
  return (
    <>
    {/* Sidebar */}
    <Sidebar active_awards={true}/>
    {/* Main Content */}
    <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
        {/* FormSection */}
        <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
         <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Add Award</h2>
         <form id="award-form" className="space-y-6" onSubmit={handleSubmit}> {/*Tambahin onSubmit*/}
            <div>
                <label htmlFor="award-name" className="block text-sm font-medium text-dark-text">Country</label>
                <InputField type="text" id="country" name="country" placeholder="Enter country" value={country} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="award-name" className="block text-sm font-medium text-dark-text">Award</label>
                <InputField type="text" id="award" name="award" placeholder="Enter award" value={award} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="award-name" className="block text-sm font-medium text-dark-text">Year</label>
                <InputField type="text" id="year" name="year" placeholder="Enter year" value={year} onChange={handleInputChange}/>
            </div>
            <Button type="submit" className="w-full bg-dark-accent text-dark-text py-3 px-4 hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium"/>
            </form>
        </div>
        {/* Table Section */}
        <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-4xl">
            <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Awards List</h2>
            <CMSTable columns={columns} data={awards} handleDelete={handleDelete} handleSave={handleSave} />
        </div>
    </div>
    </>
  );
}
export default CMSAwards;