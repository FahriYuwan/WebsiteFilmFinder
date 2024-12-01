import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Sidebar';
import FilterSelect from '../../../components/FilterSelect';
import SearchInput from '../../../components/SearchInput';
import CMSTableDrama from '../../../components/CMS/CMSTableDrama';
import Popup from '../../../components/CMS/Popup';

function CMSDrama() {
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFilm, setFilterFilm] = useState('10'); // Tambahkan state untuk filter film
  const [dramas, setDramas] = useState([
    { id: 1, title: 'The Queen of the South', genre: 'Romance', synopsis: 'This is a synopsis of Film 1.', status: 'Pending' },
    { id: 2, title: 'The King of the North', genre: 'Action', synopsis: 'This is a synopsis of Film 2.', status: 'Approved' },
    { id: 3, title: 'The Princess of the East', genre: 'Drama', synopsis: 'This is a synopsis of Film 3.', status: 'Unapproved' },
    { id: 4, title: 'The Prince of the West', genre: 'Comedy', synopsis: 'This is a synopsis of Film 4.', status: 'Pending' },
    { id: 5, title: 'The Queen of the South', genre: 'Romance', synopsis: 'This is a synopsis of Film 1.', status: 'Pending' },
    { id: 6, title: 'The King of the North', genre: 'Action', synopsis: 'This is a synopsis of Film 2.', status: 'Approved' },
    { id: 7, title: 'The Princess of the East', genre: 'Drama', synopsis: 'This is a synopsis of Film 3.', status: 'Unapproved' },
    { id: 8, title: 'The Prince of the West', genre: 'Comedy', synopsis: 'This is a synopsis of Film 4.', status: 'Pending' },
    { id: 9, title: 'The Queen of the South', genre: 'Romance', synopsis: 'This is a synopsis of Film 1.', status: 'Pending' },
    { id: 10, title: 'The King of the North', genre: 'Action', synopsis: 'This is a synopsis of Film 2.', status: 'Approved' },
    { id: 11, title: 'The Princess of the East', genre: 'Drama', synopsis: 'This is a synopsis of Film 3.', status: 'Unapproved' },
    { id: 12, title: 'The Prince of the West', genre: 'Comedy', synopsis: 'This is a synopsis of Film 4.', status: 'Pending' },
    { id: 13, title: 'The Queen of the South', genre: 'Romance', synopsis: 'This is a synopsis of Film 1.', status: 'Pending' },
    { id: 14, title: 'The King of the North', genre: 'Action', synopsis: 'This is a synopsis of Film 2.', status: 'Approved' },
    { id: 15, title: 'The Princess of the East', genre: 'Drama', synopsis: 'This is a synopsis of Film 3.', status: 'Unapproved' },
    { id: 16, title: 'The Prince of the West', genre: 'Comedy', synopsis: 'This is a synopsis of Film 4.', status: 'Pending' },
    { id: 17, title: 'The Queen of the South', genre: 'Romance', synopsis: 'This is a synopsis of Film 1.', status: 'Pending' }
  ]);
  const [filteredDramas, setFilteredDramas] = useState(dramas);
  const [currentFilm, setCurrentFilm] = useState(null);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = dramas;
      if (filterStatus) {
        filtered = filtered.filter(drama => drama.status === filterStatus);
      }
      if (searchTerm) {
        filtered = filtered.filter(drama => drama.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      setFilteredDramas(filtered.slice(0, parseInt(filterFilm, 10))); // Terapkan filter film
    };
    applyFilters();
  }, [filterStatus, searchTerm, filterFilm, dramas]);

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilmChange = (e) => {
    setFilterFilm(e.target.value);
  };

  const handleSave = (id) => {
    alert(`Save drama with id ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this film?')) {
      const updatedDramas = dramas.filter(drama => drama.id !== id);
      setDramas(updatedDramas);
    }
  };

  const showPopup = (title, id) => {
    const film = dramas.find(drama => drama.id === id);
    setCurrentFilm(film);
  };

  const closePopup = () => {
    setCurrentFilm(null);
  };

  const approveFilm = () => {
    alert('Film approved!');
    closePopup();
    // Change status to Approved
    const updatedDramas = dramas.map(drama =>
      drama.id === currentFilm.id ? { ...drama, status: 'Approved' } : drama
    );
    setDramas(updatedDramas);
  };

  const unapproveFilm = () => {
    alert('Film Unapproved!');
    closePopup();
    // Change status to Unapproved
    const updatedDramas = dramas.map(drama =>
      drama.id === currentFilm.id ? { ...drama, status: 'Unapproved' } : drama
    );
    setDramas(updatedDramas);
  };

  const columns = [
    { Header: 'Title', accessor: 'title', width: 'auto' },
    { Header: 'Genre', accessor: 'genre', width: 'auto' },
    { Header: 'Synopsis', accessor: 'synopsis', width: 'auto' },
    { Header: 'Status', accessor: 'status', width: 'auto' },
    { Header: 'Actions', accessor: 'actions', width: '180px' }
  ];

  return (
    <>
      <Sidebar active_validate={true} />
      <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
        <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-4xl mb-8">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Drama</h2>
          <div className="flex space-x-4 mb-6">
            <FilterSelect
              id="filter-status"
              label="Filter by Status"
              value={filterStatus}
              options={[
                { value: '', label: 'All Status' },
                { value: 'Pending', label: 'Pending' },
                { value: 'Approved', label: 'Approved' },
                { value: 'Unapproved', label: 'Unapproved' }
              ]}
              onChange={handleStatusChange}
            />
            <FilterSelect
              id="filter-film"
              label="Show Film"
              value={filterFilm}
              options={[
                { value: '10', label: '10' },
                { value: '20', label: '20' },
                { value: '50', label: '50' },
                { value: '100', label: '100' }
              ]}
              onChange={handleFilmChange}
            />
            <SearchInput
              id="search-film"
              label="Search Film"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <CMSTableDrama
            columns={columns}
            data={filteredDramas}
            handleSave={handleSave}
            handleDelete={handleDelete}
            showPopup={showPopup}
          />
        </div>
      </div>
      {currentFilm && (
        <Popup
          film={currentFilm}
          onClose={closePopup}
          onApprove={approveFilm}
          onUnapprove={unapproveFilm}
        />
      )}
    </>
  );
}

export default CMSDrama;