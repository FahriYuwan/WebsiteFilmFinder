import React, { useState } from "react";
import InputField from "../../../Components/InputField";
import Button from "../../../components/Button";
import CMSTable from "../../../components/CMS/CMSTable";
import Sidebar from "../../../components/Sidebar";
import Pagination from "../../../components/Pagination"; // Import komponen Pagination

import { usePage, useForm, router } from "@inertiajs/react";

function CMSUsers() {
    const { users } = usePage().props; // Ambil data pengguna dari props
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userList, setUserList] = useState(users.data); // Inisialisasi state dengan data pengguna
    const { post, put, delete: destroy } = useForm(); // Gunakan useForm untuk mendapatkan fungsi post dan put

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } 
        if (name === 'email') {
            setEmail(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) {
            alert('Name and email cannot be empty');
            return;
        }
        post(route('cms.users.store',{
            name: name,
            email: email,
        }), {
            onSuccess: () => {
                // Optional: Actions after success, like clearing fields
                setName('');
                setEmail('');
                alert('User has been added!');
                router.get(route('cms.users.index'));
            },
            onError: (errors) => {
                // Handle errors here if needed
                console.log(errors);
            }
        });
    };

    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }
        else {
            destroy(route('cms.users.destroy', { user_id: id }), {
                onSuccess: () => {
                    // Optional: Actions after success
                    alert('User has been deleted!');
                    router.get(route('cms.users.index'));
                },
                onError: (errors) => {
                    // Handle errors here if needed
                    console.log(errors);
                }
            });
        }
    };

    const handleSave = (rowId, updatedRow) => {
        alert('Save mode activated for row ID: ' + rowId);
        alert('Updated Name: ' + updatedRow.name);
        alert('Updated Email: ' + updatedRow.email);
        put(route('cms.users.update', { user_id: rowId, name:updatedRow.name, email:updatedRow.email}), {
            onSuccess: () => {
                // Optional: Actions after success
                alert('Data has been saved!');
                router.get(route('cms.users.index'));
            },
            onError: (errors) => {
                // Handle errors here if needed
                console.log(errors);
            }
        });
    };

    const handlePageChange = (page) => {
        router.get(route('cms.users.index', { page }));
    };

    const columns = [
        { Header: 'Name', accessor: 'name', editable: true },
        { Header: 'Email', accessor: 'email', editable: true },
    ];

    return (
    <>
    <div className="flex">
    <Sidebar active_users={true} />
      <main className=" flex-1 flex flex-col items-center p-10 bg-gray-800 text-dark-text">
      <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-3xl mb-8">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-custom-blue-light">Add New User</h2>
      <form id="user-form" className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
            <div className="w-1/2">
                <InputField id="name" name="name" type="text" placeholder="Enter Name" onChange={handleInputChange} value={name} />
            </div>
            <div className="w-1/2">
                <InputField id="email" name="email" type="email" placeholder="Enter Email" onChange={handleInputChange} value={email} />
            </div>
        </div>
        <Button type="submit" text="Submit" className="w-full bg-dark-accent text-dark-text py-3 px-4 hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium" />
        </form>
        </div>
        {/* Table */}
        <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Users List</h2>
        <CMSTable columns={columns} data={userList} handleSave={handleSave} handleDelete={handleDelete} idAccessor={'user_id'}/>
        </div>
        {/* Pagination */}
        <div className="bg-dark-card-bg text-dark-text p-4 rounded-lg shadow-md w-full max-w-4xl mt-2">
        <Pagination
            currentPage={users.current_page}
            lastPage={users.last_page}
            onPageChange={handlePageChange}
        />
        </div>
        </main>
        </div>
    </>
  );
}

export default CMSUsers;