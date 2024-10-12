import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import CMSTable from "../../../components/CMS/CMSTable";

function CMSGenres() {
    const [genre, setGenre] = useState('');
    const [genres, setGenres] = useState([
        { id: 1, name: 'Action' },
        { id: 2, name: 'Adventure' },
        { id: 3, name: 'Comedy' },
        { id: 4, name: 'Drama' },
    ]);

    const handleInputChange = (e) => {
        setGenre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!genre.trim()) {
            alert('Genre name cannot be empty');
            return;
        }
        const newGenre = {
            id: genres.length + 1,
            name: genre,
        };
        setGenres([...genres, newGenre]);
        setGenre(''); // Clear the input field after submission
    }

    const handleSave = () => {
        alert('Data has been saved!');
    }
    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this genre?')) {
            return;
        }
        setGenres(genres.filter((genre) => genre.id !== id));
    }

    const columns = [
        { Header: 'Genre Name', accessor: 'name', editable: true },
    ];

    return (
        <>
        <div className="flex">
            <Sidebar active_genres={true} />
            <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
                <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
                    <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Add New Genre</h2>
                    <form id="genre-form" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="genre-name" className="block text-sm font-medium text-dark-text">Genre Name</label>
                            <InputField
                                onChange={handleInputChange}
                                value={genre}
                                type="text"
                                id="genre"
                                name="genre"
                                placeholder="Enter a genre name"
                                className="mt-2 block w-full px-4 py-3 text-black text-custom-input-text border border-custom-input-border shadow-sm bg-custom-input-bg focus:outline-none focus:ring-custom-orange focus:border-custom-orange sm:text-sm"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-dark-accent text-dark-text py-3 px-4 rounded-md hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium"
                            text="Submit"
                        />
                    </form>
                </div>

                {/* Table Section */}
                <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Genres List</h2>
                    <CMSTable columns={columns} data={genres} setData={setGenres} handleSave={handleSave} handleDelete={handleDelete} />
                </div>
            </div>
        </div>
        </>
    );
}

export default CMSGenres;