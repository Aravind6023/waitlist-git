import React from "react";
import axios from "axios";

export function Login() {


    const handlelogin = async (event) => {

        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        console.log(email,password)

        var userdetails = {
            email: email,
            password: password
        }

        console.log(userdetails)

        try {
            const response = await axios.post('http://localhost:3456/v1/user/login', userdetails);
            
            console.log('Response data:', response.data);
          
            const userId = response.data?.user?.uniqueid;
            console.log('User ID:', userId);
          
            alert('User logged in successfully!');
          
            if (response.data?.redirectUrl) {
              window.location.href = response.data.redirectUrl;
            } else {
              window.location.href = '/default-route';
            }
          } catch (error) {
            console.error('Error logging in:', error.response ? error.response.data : error.message);
            alert("User not found");
          }
          };


    return (
        <>
            <main className="cusRegister container-fluid min-vh-100 bg-black text-white d-flex justify-content-center align-items-center">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center p-4">Login Page</h1>
                    </div>
                    <div className="col-12">
                        <form onSubmit={handlelogin} class="d-flex flex-column align-items-center">
                            <table>
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
                                    <td colspan="2" className="text-center p-4">
                                        <input className="bg-danger py-2 px-4 rounded-3" type="submit"/>
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