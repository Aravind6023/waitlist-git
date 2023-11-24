import React, { useState, useEffect } from "react";

export function User() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3456/v1/user/getuserdetails")
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

    return (
        <>
            <main className="container-fluid min-vh-100 bg-black text-white">
                <section>
                    <div className="row d-flex justify-content-center">
                        <h1 className="text-center home_heading p-3">Welcome to our Referral Program!</h1>
                        <p className="text-center py-2 font-mono">Invite your friends to join us, and if you reach the top of our referral leaderboard, you'll be the winner!</p>
                        <div className="col-11 table-responsive">
                            <table className="table w-100">
                                <thead>
                                    <tr>
                                        <th className="bg-transparent text-white">S.No</th>
                                        <th className="bg-transparent text-white">User Name</th>
                                        <th className="bg-transparent text-white">Positon</th>
                                        <th className="bg-transparent text-white">Invites</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value, index) => (
                                            <>
                                                <tr key={index}>
                                                    <td className="bg-transparent text-white">{index + 1}</td>
                                                    <td className="bg-transparent text-white">{value.username}</td>
                                                    <td className="bg-transparent text-white">{value.position}</td>
                                                    <td className="bg-transparent text-white">{value.invites}</td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}