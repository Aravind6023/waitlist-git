import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function AdminNavbar()
{
    const { uniqueid } = useParams();

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3456/v1/admin/getindividualadmin/${uniqueid}`)
          .then(response => response.json())
          .then(responseData => {
            setData(responseData.data)
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }, [uniqueid]);

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h4 class="navbar-brand">Apple</h4>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-start justify-content-lg-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-lg-center">
                            <li className="nav-item">
                            <h6 className="m-0 py-2 px-lg-2">Welcome {data.username}</h6>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={`/admin/home/${uniqueid}`}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={`/admin/user_dashboard/${uniqueid}`}>User List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}