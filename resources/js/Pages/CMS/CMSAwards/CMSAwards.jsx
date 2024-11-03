import React, { useState,useEffect } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import Sidebar from '../../../components/Sidebar';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import CMSTable from '../../../components/CMS/CMSTable';
import Pagination from '../../../components/Pagination';

function CMSAwards() {
    const { awards } = usePage().props;
    const [AwardList, setAwards] = useState(awards.data);
    const [awardName, setAwardName] = useState('');
    const [year, setYear] = useState('');
    const { post, delete: destroy, put} = useForm();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'award') {
            alert(value);
            setAwardName(value);
        } else if (name === 'year') {
            alert(value);
            setYear(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('cms.awards.store',{
            award : awardName,
            year : year
        }), {
            onSuccess: () => {
                setAwardName('');
                setYear('');
                alert('Award has been added!');

                router.get(route('cms.awards.index'));
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
          destroy(route('cms.awards.destroy', { award_id: id }), {
            onSuccess: () => {
              // Optional: Actions after success
              alert('Award has been deleted!');
              router.get(route('cms.awards.index'));
            },
            onError: (errors) => {
              // Handle errors here if needed
              console.log(errors);
            }
          });
        }
      };

    const handleSave = (id, updatedData) => {
        console.log(updatedData.award_name);
        put(route('cms.awards.update', { award_id: id, award: updatedData.award_name, year: updatedData.year }),{
            onSuccess: () => {
                setAwardName('');
                setYear('');
                alert('Award has been updated!');
                router.get(route('cms.awards.index'));
            },
            onError: () => alert('Error updating award.'),
        });
    };

    const columns = [
        { Header: 'Award', accessor: 'award_name', editable: true },
        { Header: 'Year', accessor: 'year', editable: true },
    ];

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= 2000; i--) {
            years.push(<option key={i} value={i}>{i}</option>);
        }
        return years;
    };

    const handlePageChange = (page) => {
        router.get(route('cms.awards.index', { page }));
    };

    return (
        <>
            <div className="flex">
                <Sidebar active_awards={true} />
                <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
                    <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
                        <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Add Award</h2>
                        <form id="award-form" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="award" className="block text-sm font-medium text-dark-text">Award</label>
                                <InputField
                                    type="text"
                                    id="award"
                                    name="award"
                                    placeholder="Enter award"
                                    value={awardName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="year" className="block text-sm font-medium text-dark-text">Year</label>
                                <select
                                    id="year"
                                    name="year"
                                    value={year}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full bg-dark-card-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-accent focus:border-dark-accent sm:text-sm px-3 py-2"
                                >
                                    <option value="">Pilih Tahun</option>
                                    {generateYearOptions()}
                                </select>
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-dark-accent text-dark-text py-3 px-4 hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium"
                                text="Submit"
                            />
                        </form>
                    </div>
                    <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-4xl">
                        <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Awards List</h2>
                        <CMSTable
                            columns={columns}
                            data={AwardList}
                            handleDelete={handleDelete}
                            handleSave={handleSave}
                            idAccessor={'award_id'}
                        />
                    </div>
                    {/* Pagination */}
                    <div className="bg-dark-card-bg text-dark-text p-4 rounded-lg shadow-md w-full max-w-4xl mt-2">
                        <Pagination
                            currentPage={awards.current_page}
                            lastPage={awards.last_page}
                            onPageChange={handlePageChange}
                        />
        </div>
                </div>
            </div>
        </>
    );
}

export default CMSAwards;
