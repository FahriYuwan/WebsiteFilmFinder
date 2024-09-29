import React,{useState} from "react";
import InputField from "../../../Components/InputField";
import Button from "../../../components/Button";
import CMSTable from "../../../components/CMS/CMSTable";
import Sidebar from "../../../components/Sidebar";
function CMSUsers() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([
        { id: 1, username: 'john_doe', email: '1doe@gmail.com' },
        { id: 2, username: 'jane_doe', email: '2doe@gmail.com'},
        { id: 3, username: 'james_doe', email: '3doe@gmail.com'},
        { id: 4, username: 'jennifer_doe', email: '4doe@gmail.com'},
        { id: 5, username: 'jacob_doe', email: '5doe@gmail.com'},
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } 
        if (name === 'email') {
            setEmail(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !email.trim()) {
            alert('Username and email cannot be empty');
            return;
        }
        const newUser = {
            id: users.length + 1,
            username: username,
            email: email,
        };
        setUsers([...users, newUser]);
        setUsername('');
        setEmail('');
    }

    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleSave = () => {
        alert('Data has been saved!');
    }
    const columns = [
        { Header: 'Username', accessor: 'username', editable: true },
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
                <InputField id = "username" name = "username" type = "text" placeholder = "Enter Username" onChange={handleInputChange} value={username}/>
            </div>
            <div className="w-1/2">
                <InputField id = "email" name = "email" type = "email" placeholder = "Enter Email" onChange={handleInputChange} value={email}/>
            </div>
        </div>
        <Button type = "submit" text = "Submit" className="w-full bg-dark-accent text-dark-text py-3 px-4 hover:bg-dark-hover focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-dark-accent text-sm font-medium" />
        </form>
        </div>
        {/* Table */}
        <div className="bg-dark-card-bg text-dark-text p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-custom-blue-light">Users List</h2>
        <CMSTable columns={columns} data={users} setData={setUsers} handleSave={handleSave} handleDelete={handleDelete} />
        </div>
        </main>
        </div>
    </>
  );
}
export default CMSUsers;
