import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../../components/Sidebar';
import FilterSelect from '../../../components/FilterSelect';
import CMSTableComments from '../../../components/CMS/CMSTableComments';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

const CMSComments = () => {
    const [comments, setComments] = useState([
        { id: 1, user: 'John Doe', comment: 'Great movie!', rating: 5, film: 'Avatar', status: 'Pending' },
        { id: 2, user: 'Jane Smith', comment: 'Not bad.', rating: 3, film: 'Snowdrop', status: 'Pending' },
        { id: 3, user: 'Alice Johnson', comment: 'I loved it!', rating: 5, film: 'Transformer', status: 'Approved' },
        { id: 4, user: 'Bob Brown', comment: 'Could be better.', rating: 2, film: 'Spiderman', status: 'Pending' },
        { id: 5, user: 'Charlie Davis', comment: 'I hated it.', rating: 1, film: 'The Avengers', status: 'Pending' },
        { id: 6, user: 'Eve Wilson', comment: 'It was okay.', rating: 3, film: 'The Dark Knight', status: 'Pending' },
        { id: 7, user: 'Grace Lee', comment: 'I want my money back.', rating: 1, film: 'The Matrix', status: 'Pending' },
        { id: 8, user: 'Henry Clark', comment: 'I fell asleep.', rating: 1, film: 'The Lord of the Rings', status: 'Pending'},
        { id: 9, user: 'Ivy Rodriguez', comment: 'I want more!', rating: 4, film: 'The Hobbit', status: 'Pending'},
        { id: 10, user: 'Jack White', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 11, user: 'Katie Green', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 12, user: 'Liam Hall', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 13, user : 'Mia Young', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 14, user : 'Noah King', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 15, user : 'Olivia Baker', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 16, user : 'Peter Hill', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'},
        { id: 17, user : 'Qu inn Young', comment: 'I want to watch it again!', rating: 5, film: 'The Lion King', status: 'Pending'}
    ]);
    const [filteredComments, setFilteredComments] = useState(comments);
    const [filterRating, setFilterRating] = useState('');
    const [filterComments, setFilterComments] = useState('10');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const applyFilters = () => {
            let filtered = comments;
    
            if (filterRating) {
                filtered = filtered.filter(comment => comment.rating == filterRating);
            }
    
            if (searchTerm) {
                filtered = filtered.filter(comment => comment.comment.toLowerCase().includes(searchTerm.toLowerCase()));
            }
    
            setFilteredComments(filtered.slice(0, parseInt(filterComments, 10)));
        };
    
        applyFilters();
    }, [filterRating, filterComments, searchTerm, comments]);

    const handleRatingChange = (e) => {
        setFilterRating(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setFilterComments(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const approveSelected = () => {
        const checkboxes = document.querySelectorAll('#comments-table-body input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            const row = checkbox.parentElement.parentElement;
            const user = row.children[1].textContent;
            setComments(prevComments => prevComments.map(comment => 
                comment.user === user ? { ...comment, status: 'Approved' } : comment
            ));
        });
    };

    const deleteSelected = () => {
        const checkboxes = document.querySelectorAll('#comments-table-body input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            const row = checkbox.parentElement.parentElement;
            const user = row.children[1].textContent;
            if (window.confirm(`Are you sure you want to delete the comment by ${user}?`)) {
                setComments(prevComments => prevComments.filter(comment => comment.user !== user));
            }
        });
    };

    const handleSelectAll = (e) => {
        const checkboxes = document.querySelectorAll('#comments-table-body input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = e.target.checked);
    };

    const columns = [
        { Header: '', accessor: 'select', width: '50px', editable: false },
        { Header: 'Username', accessor: 'user', width: '150px', editable: false },
        { Header: 'Rate', accessor: 'rating', width: '100px', editable: false },
        { Header: 'Film', accessor: 'film', width: '150px', editable: false },
        { Header: 'Comments', accessor: 'comment', width: '300px', editable: false },
        { Header: 'Status', accessor: 'status', width: '100px', editable: false },
    ];

    const data = filteredComments.map(comment => ({
        ...comment,
        select: <input type="checkbox" />
    }));

    return (
        <>
            <Sidebar active_comments={true} />
            <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
                <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
                    <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Comments Management</h2>
                    <div className="flex space-x-4 mb-6">
                    <FilterSelect label="Filter by Rating" value={filterRating} options={[
                        { value: '', label: 'All' },
                        { value: '1', label: '1 Star' },
                        { value: '2', label: '2 Stars' },
                        { value: '3', label: '3 Stars' },
                        { value: '4', label: '4 Stars' },
                        { value: '5', label: '5 Stars' },
                    ]} onChange={handleRatingChange} />
                    <FilterSelect label="Show Comments" value={filterComments} options={[
                        { value: '10', label: '10' },
                        { value: '20', label: '20' },
                        { value: '50', label: '50' },
                        { value: '100', label: '100' },
                    ]} onChange={handleCommentsChange} />
                    <div>
                    <label htmlFor="search-comments" className="block text-sm font-medium">Search Comments</label>
                    <input
                        type="text"
                        id="search-comments"
                        placeholder="Search comments"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
                    />
                    </div>
                </div>

                    <CMSTableComments
                        columns={columns}
                        data={data}
                    />
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <InputField type="checkbox" id="select-all-top" className="form-checkbox h-4 w-4 text-custom-blue-dark" onChange={handleSelectAll} />
                            <label htmlFor="select-all-top" className="ml-2 text-sm font-medium">Select All</label>
                        </div>
                        <div className="flex space-x-4">
                            <Button text="Approve" className="bg-custom-blue-light text-dark-text py-1 px-3 hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue-dark" onClick={approveSelected} />
                            <Button text="Delete" className="bg-red-500 text-dark-text py-1 px-3 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={deleteSelected} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

CMSComments.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            film: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ),
    filteredComments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            film: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ),
    filterRating: PropTypes.string,
    filterComments: PropTypes.string,
    searchTerm: PropTypes.string,
};

export default CMSComments;