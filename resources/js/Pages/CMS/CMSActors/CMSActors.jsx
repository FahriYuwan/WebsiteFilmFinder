import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import CMSTable from "../../../components/CMS/CMSTable";
import imgActor from "../../../assets/images/dwayne-johnson-the-contoh-actor.jpg";
import { usePage, useForm, router } from "@inertiajs/react";
import Pagination from '../../../components/Pagination';


function CMSActors() {
    const { countries,actors } = usePage().props;
    const [ActorList, setActors] = useState(actors.data);
    const [Country, setCountry] = useState('');
    const [Actor, setActor] = useState('');
    const [Birthdate, setBirthdate] = useState('');
    const [link_picture, setLinkPicture] = useState('');
    const { post, delete: destroy, put} = useForm();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'country_name') {
            setCountry(value);
        } else if (name === 'Actor') {
            setActor(value);
        } else if (name === 'Birthdate') {
            setBirthdate(value);
        } else if (name === 'Picture') {
            setLinkPicture(value);
        }
    };

    const handleSubmit = (e) => {
        alert('Values submitted: ' + Country + ' ' + Actor + ' ' + Birthdate + ' ' + link_picture);
        e.preventDefault();
        post(route('cms.actors.store',{
            countries_id: Country,
            actor_name: Actor,
            birthdate: Birthdate,
            url_actor: link_picture
        }), {
            onSuccess: () => {
                // Optional: Actions after success, like clearing fields
                setCountry('');
                setActor('');
                setBirthdate('');
                setLinkPicture('');
                alert('Actor has been added!');
                router.get(route('cms.actors.index'));
            },
            onError: (errors) => {
                // Handle errors here if needed
                console.log(errors);
            }
        });
    };

    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this actor?')) {
            return;
        }
        else {
            destroy(route('cms.actors.destroy', { actor_id: id }), {
              onSuccess: () => {
                // Optional: Actions after success
                alert('Actor has been deleted!');
                router.get(route('cms.actors.index'));
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
        console.log('Data to be saved:', data.actor_name,' ', data.birthdate);
        put(route('cms.actors.update', { actor_id: id, actor_name : data.actor_name, birthdate: data.birthdate}), {
          onSuccess: () => {
            // Optional: Actions after success
            alert('Actor has been updated!');
            router.get(route('cms.actors.index'));
          },
          onError: (errors) => {
            // Handle errors here if needed
            console.log(errors);
          }
        });
      }

    const handlePageChange = (page) => {
        router.get(route('cms.actors.index', { page }));
    };

    const columns = [
        { Header: 'Country', accessor: { name: 'countries', child_accessor: 'country_name' } },
        { Header: 'Actor', accessor: 'actor_name', editable: true },
        { Header: 'Birthdate', accessor: 'birthdate', editable: true },
        { Header: 'Picture', accessor: 'url_actor' },
    ];

    return (
        <>
        <div className="flex">
            <Sidebar active_actors={true} />
            <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
                <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-xl mb-8">
                    <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Add Actor</h2>
                    <form id="actor-form" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-dark-text">Country</label>
                            <InputField
                                id="countries_id"
                                name="country_name"
                                type="select"
                                placeholder="Enter a country"
                                className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
                                value={countries}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="actor" className="block text-sm font-medium text-dark-text">Actor</label>
                            <InputField
                                id="actor"
                                name="Actor"
                                type="text"
                                placeholder="Enter an actor"
                                className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
                                value={Actor}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="birthdate" className="block text-sm font-medium text-dark-text">Birthdate</label>
                            <InputField
                                id="birthdate"
                                name="Birthdate"
                                type="date"
                                placeholder="Enter a birthdate"
                                className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
                                value={Birthdate}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="link_picture" className="block text-sm font-medium text-dark-text">Upload Picture</label>
                            <InputField
                                id="picture"
                                name="Picture"
                                type="text"
                                placeholder="Enter link for picture"
                                className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
                                value={link_picture}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-dark-accent text-dark-text py-3 px-4 hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium"
                            text="Submit"
                        />
                    </form>
                </div>
                <div className="bg-dark-card-bg p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Actors List</h2>
                    <CMSTable
                        columns={columns}
                        data={ActorList}
                        handleSave={handleSave}
                        handleDelete={handleDelete}
                        idAccessor={'actor_id'}
                    />
                </div>
                {/* Pagination */}
                <div className="bg-dark-card-bg text-dark-text p-4 rounded-lg shadow-md w-full max-w-4xl mt-2">
                <Pagination
                    currentPage={actors.current_page}
                    lastPage={actors.last_page}
                    onPageChange={handlePageChange}
                />
                </div>  
            </div>
        </div>
        </>
    );
}

export default CMSActors;