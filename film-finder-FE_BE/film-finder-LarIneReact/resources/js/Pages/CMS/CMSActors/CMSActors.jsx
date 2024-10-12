import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import CMSTable from "../../../components/CMS/CMSTable";
import imgActor from "../../../assets/images/dwayne-johnson-the-contoh-actor.jpg";

function CMSActors() {
    const [Country, setCountry] = useState('');
    const [Actor, setActor] = useState('');
    const [Birthdate, setBirthdate] = useState('');
    const [picture, setPicture] = useState('');

    const [actors, setActors] = useState([
        { id: 1, country: 'Indonesia', actor: 'Iko Uwais', birthdate: '1983-02-12', picture: imgActor },
        { id: 2, country: 'Malaysia', actor: 'Bront Palarae', birthdate: '1981-09-27', picture: imgActor },
        { id: 3, country: 'Singapore', actor: 'Chin Han', birthdate: '1969-11-27', picture: imgActor },
        { id: 4, country: 'Thailand', actor: 'Tony Jaa', birthdate: '1976-02-05', picture: imgActor },
    ]);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'Country') {
            setCountry(value);
        } else if (name === 'Actor') {
            setActor(value);
        } else if (name === 'Birthdate') {
            setBirthdate(value);
        } else if (name === 'Picture') {
            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setPicture(e.target.result);
                };
                reader.readAsDataURL(files[0]);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newActor = {
            id: actors.length + 1,
            country: Country,
            actor: Actor,
            birthdate: Birthdate,
            picture: picture,
        };
        setActors([...actors, newActor]);
        setCountry('');
        setActor('');
        setBirthdate('');
        setPicture('');
    };

    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this actor?')) {
            return;
        }
        setActors(actors.filter((actor) => actor.id !== id));
    };

    const handleSave = () => {
        alert('Data has been saved!');
    };

    const columns = [
        { Header: 'Country', accessor: 'country', editable: true },
        { Header: 'Actor', accessor: 'actor', editable: true },
        { Header: 'Birthdate', accessor: 'birthdate', editable: true },
        { Header: 'Picture', accessor: 'picture' },
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
                                id="country"
                                name="Country"
                                type="text"
                                placeholder="Enter a country"
                                className="mt-2 block w-full px-4 py-3 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
                                value={Country}
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
                            <label htmlFor="picture" className="block text-sm font-medium text-dark-text">Upload Picture</label>
                            <InputField
                                id="picture"
                                name="Picture"
                                type="file"
                                accept="image/*"
                                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue-light focus:border-custom-blue-light sm:text-sm"
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
                        data={actors}
                        handleSave={handleSave}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default CMSActors;