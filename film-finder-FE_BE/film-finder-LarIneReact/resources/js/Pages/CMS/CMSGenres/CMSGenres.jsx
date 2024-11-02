import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import CMSTable from "../../../components/CMS/CMSTable";
import Pagination from "../../../components/Pagination"; // Import komponen Pagination

import { usePage, useForm, router } from "@inertiajs/react";

function CMSGenres() {
    const { genres } = usePage().props; // Ambil data genre dari props
    const [genre, setGenre] = useState(''); // Inisialisasi state dengan data genre
    const [genresList, setGenresList] = useState(genres.data); // Inisialisasi state dengan data genre
    const { post, put, delete: destroy } = useForm(); // Gunakan useForm untuk mendapatkan fungsi post dan put

    const handleInputChange = (e) => {
        setGenre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!genre.trim()) {
            alert('Genre name cannot be empty');
            return;
        }
        else{
            post(route('cms.genres.store', {
                genre_name: genre
            }), {
                onSuccess: () => {
                    // Optional: Actions after success, like clearing fields
                    setGenre('');
                    alert('Genre has been added!');
                    router.get(route('cms.genres.index'));
                },
                onError: (errors) => {
                    // Handle errors here if needed
                    console.log(errors);
                }
            });
        }
        
        }


    const handleSave = (id, data) => {
        alert('Save button clicked for row ID: ' + id);
        console.log('Data to be saved:', data.genre_name);
        put(route('cms.genres.update', { genre_id: id, genre_name: data.genre_name}), {
            onSuccess: () => {
                // Optional: Actions after success
                alert('Genre has been updated!');
                router.get(route('cms.genres.index'));
            }
        });
    } 


    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this genre?')) {
            return;
        }
        else {
            destroy(route('cms.genres.destroy', { genre_id: id }), {
                onSuccess: () => {
                    // Optional: Actions after success
                    alert('Genre has been deleted!');
                    router.get(route('cms.genres.index'));
                },
                onError: (errors) => {
                    // Handle errors here if needed
                    console.log(errors);
                }
            });}
        }

    const handlePageChange = (page) => {
        router.get(route('cms.genres.index', { page: page }));
    }

    const columns = [
        { Header: 'Genre Name', accessor: 'genre_name', editable: true },
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
                    <CMSTable columns={columns} data={genresList} handleSave={handleSave} handleDelete={handleDelete} idAccessor={'genre_id'}/>
                </div>
                {/* Pagination */}
                <div className="bg-dark-card-bg text-dark-text p-4 rounded-lg shadow-md w-full max-w-4xl mt-2">
                <Pagination
                    currentPage={genres.current_page}
                    lastPage={genres.last_page}
                    onPageChange={handlePageChange}
                />
                </div>                     
            </div>
        </div>
        </>
    );
}

export default CMSGenres;