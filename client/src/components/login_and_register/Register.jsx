import { React, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Register() {
    const { referal_code } = useParams();

    useEffect(() => {
        console.log("Referal Code:", referal_code);
    }, [referal_code]);

    // Create random id
    function generateRandomId(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomId += characters.charAt(randomIndex);
        }
        return randomId;
    }

    const handleregister = async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const generateId = generateRandomId();

        console.log(name, email, password, phoneNumber);

        const userdetails = {
            genid: generateId,
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        };

        try {
            let response;

            if (referal_code) {
                response = await axios.post(`http://localhost:3456/v1/user/register/${referal_code}`, userdetails);
            } else {
                response = await axios.post('http://localhost:3456/v1/user/register', userdetails);
            }
            console.log(referal_code)
            console.log('User registered successfully:', response.data);
            alert('User registered successfully!');
            window.location.href = "/login";
        } catch (error) {
            console.error('Error registering user:', error.response ? error.response.data : error.message);
            alert("User registration failed");
        }
    };

    return (
        <>
            <main className="cusRegister container-fluid min-vh-100 bg-black text-white d-flex justify-content-center align-items-center">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center py-5">Register Page</h1>
                    </div>
                    <div className="col-12 text-center">
                        <h4>Complete the registration process and log in to view the details</h4>
                        <form onSubmit={handleregister} class="d-flex flex-column align-items-center py-3">
                            <table>
                                <tr>
                                    <td>
                                        <label for="name">Name</label>
                                    </td>
                                    <td>
                                        <input className="px-2 rounded-2" type="text" id="name" placeholder="Please enter your name" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="email">Email</label>
                                    </td>
                                    <td>
                                        <input className="px-2 rounded-2" type="email" id="email" placeholder="Please enter a valid email" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="password">Password</label>
                                    </td>
                                    <td>
                                        <input className="px-2 rounded-2" type="password" id="password" placeholder="Please enter your password" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="phoneNumber">Phone Number</label>
                                    </td>
                                    <td>
                                        <input className="px-2 rounded-2" type="tel" id="phoneNumber" placeholder="Please enter your phone number" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" className="text-center p-4">
                                        <input className="bg-danger py-2 px-4 rounded-3" type="submit" />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}