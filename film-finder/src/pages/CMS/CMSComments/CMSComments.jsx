import React from 'react';
import Sidebar from '../../../components/Sidebar';
import CMSTable from '../../../components/CMS/CMSTable';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';


function CMSComments() {
    return (
        <>
        <Sidebar />
        <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
        <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Comments Management</h2>
        <div className="flex space-x-4 mb-6">
            <div>
                <label htmlFor='filter-rating' className="block text-sm font-medium text-dark-text">Filter by Rating</label>
                <select id='filter-rating' name='filter-rating' className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm">
                    <option value=''>All</option>
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Stars</option>
                    <option value='3'>3 Stars</option>
                    <option value='4'>4 Stars</option>
                    <option value='5'>5 Stars</option>
                </select>
            </div>
            <div>
                
            </div>
        </div>
        </>
        );
}

export default CMSComments;