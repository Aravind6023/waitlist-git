import React, { useState, useEffect } from "react";
import axios from "axios";

export function UserList() {

    const [data, setData] = useState([])
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3456/v1/admin/getuserdetails")
            .then(response => response.json())
            .then(responseData => {
                if (responseData.success && Array.isArray(responseData.data)) {
                    const sortedData = [...responseData.data].sort((a, b) => {
                        if (a.position === "Winner") return -1;
                        if (b.position === "Winner") return 1;
                        return a.position - b.position;
                    });

                    setData(sortedData);
                } else {
                    console.error("Invalid API response:", responseData);
                }
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, []);


    const handleSave = async (editedUser) => {
        try {
            const response = await fetch(`http://localhost:3456/v1/admin/updateuser/${editedUser.uniqueid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUser),
            });

            if (response.ok) {
                setData((prevData) => {
                    const updatedData = prevData.map((user) =>
                        user.uniqueid === editedUser.uniqueid ? editedUser : user
                    );
                    return updatedData;
                });

                setEditingUser(null);
            } else {
                console.error('Failed to update user:', response.statusText);
            }
        } catch (error) {
            console.error('Error during user update:', error);
        }
    };



    const handleDelete = async () => {
        try {
            if (!editingUser || !editingUser.uniqueid) {
                console.error('Invalid user data for deletion.');
                return;
            }
    
            const response = await fetch(`http://localhost:3456/v1/admin/deleteuser/${editingUser.uniqueid}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                setData((prevData) => prevData.filter(user => user.uniqueid !== editingUser.uniqueid));
                setEditingUser(null);
            } else {
                console.error('Failed to delete user:', response.statusText);
            }
        } catch (error) {
            console.error('Error during user deletion:', error);
        }
    };


    function generateRandomId(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomId += characters.charAt(randomIndex);
        }
        return randomId;
    }


    const handleNewUser = async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const generateId = generateRandomId();

        const userDetails = {
            genid: generateId,
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        };

        try 
        {
            const response = await axios.post('http://localhost:3456/v1/admin/register', userDetails);

            if (response.status === 200) {
                const createdUser = response.data;
                setData((prevData) => [...prevData, createdUser]);
            } else {
                console.error('Failed to create user:', response.statusText);
                alert("User added");
            }
        } catch (error) {
            console.error('Error registering user:', error.response ? error.response.data : error.message);
            alert("User registration failed");
        }
    }; 





    return (
        <>
            <main className="container-fluid min-vh-100 bg-black text-white">
                <section>
                    <div className="row d-flex justify-content-center">
                        <h1 className="py-2 text-center">User's List</h1>
                        <div className="col-11 table-responsive">
                            <table className="table w-100">
                                <thead>
                                    <tr>
                                        <th className="bg-transparent text-white">S.No</th>
                                        <th className="bg-transparent text-white">User Name</th>
                                        <th className="bg-transparent text-white">Email</th>
                                        <th className="bg-transparent text-white">Positon</th>
                                        <th className="bg-transparent text-white">Invites</th>
                                        <th className="bg-transparent text-white">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((value, index) => (
                                        <tr key={index}>
                                            <td className="bg-transparent text-white">{index + 1}</td>
                                            <td className="bg-transparent text-white">{value.username}</td>
                                            <td className="bg-transparent text-white">{value.email}</td>
                                            <td className="bg-transparent text-white">{value.position}</td>
                                            <td className="bg-transparent text-white">{value.invites}</td>
                                            <td className="bg-transparent">
                                                <button className="btn bg-dark text-white" onClick={() => setEditingUser(value)}>
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="text-center py-4">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popupModal">Create a new user</button>
                    </div>

                    <div class="modal fade" id="popupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title text-black fs-5" id="exampleModalLabel">New User</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-black">
                                <form class="d-flex flex-column align-items-center py-3">
                                    <table>
                                        <tr>
                                            <td className="p-2">
                                                <label for="name">Name</label>
                                            </td>
                                            <td className="p-2">
                                                <input className="px-2 rounded-2" type="text" id="name" placeholder="Please enter your name" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <label for="email">Email</label>
                                            </td>
                                            <td className="p-2">
                                                <input className="px-2 rounded-2" type="email" id="email" placeholder="Please enter a valid email" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <label for="password">Password</label>
                                            </td>
                                            <td className="p-2">
                                                <input className="px-2 rounded-2" type="password" id="password" placeholder="Please enter your password" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <label for="phoneNumber">Phone Number</label>
                                            </td>
                                            <td className="p-2">
                                                <input className="px-2 rounded-2" type="tel" id="phoneNumber" placeholder="Please enter your phone number" required />
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleNewUser} type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                    </div>

                    {editingUser && (
                        <div className="row pb-5">
                            <h2 className="text-center py-4">Edit User</h2>
                            <div className="col-12">
                                <form className="d-flex align-items-center flex-column" onSubmit={(e) => { e.preventDefault(); handleSave(editingUser); }}>
                                    <table>
                                        <tr>
                                            <td className="p-2">
                                                <label>User Name : </label>
                                            </td>
                                            <td className="p-2">
                                            <input type="text" className="p-2 rounded-3" value={editingUser.username} onChange={(e) => setEditingUser((prevUser) => (
                                            {
                                                ...prevUser,
                                                username: e.target.value,
                                            }))} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <label>Email : </label>
                                            </td>
                                            <td className="p-2">
                                            <input type="text" className="p-2 rounded-3" value={editingUser.email} onChange={(e) => setEditingUser((prevUser) => (
                                            {
                                                ...prevUser,
                                                email: e.target.value,
                                            }))} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                            <label>Position:</label>
                                            </td>
                                            <td className="p-2">
                                                <input type="text" className="p-2 rounded-3" value={editingUser.position} onChange={(e) => setEditingUser((prevUser) =>
                                            ({
                                                ...prevUser,
                                                position: e.target.value,
                                            }))} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                            <label>Invites:</label>
                                            </td>
                                            <td className="p-2">
                                                <input type="text" className="p-2 rounded-3" value={editingUser.invites} onChange={(e) => setEditingUser((prevUser) =>
                                            ({
                                                ...prevUser,
                                                invites: e.target.value,
                                            }))} />
                                            </td>
                                        </tr>
                                    </table>
                                    <div>
                                    <button className="m-3 btn text-dark bg-primary" type="submit">Save Changes</button>
                                    <button className="btn bg-danger text-white" onClick={handleDelete}>Delete</button>
                                    <button className="m-3 btn text-white bg-dark" onClick={() => setEditingUser(null)}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}