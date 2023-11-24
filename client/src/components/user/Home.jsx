import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Home() {

    const { uniqueid } = useParams();
    const [userDetails, setUserDetails] = useState();


    const handleGenerateLink = async () => {
        try {
            const response = await fetch(`http://localhost:3456/v1/user/generatelink/${uniqueid}`);
            const data = await response.json();
            setUserDetails(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    // Log userDetails when it changes
    useEffect(() => {
        console.log(userDetails);
    }, [userDetails]);


    return (
        <>
            <main className="container-fluid text-white">
                <section className="row">
                    <div className="col-12 d-flex align-items-center flex-column bg-black ">
                        <h2 className="pt-4 home_heading text-center">Discover the New Apple Iphone 15 pro</h2>
                        <img className="rounded-4 my-5" src="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Iphone_Image"></img>
                    </div>
                    <div className="col-12 pt-2 d-flex justify-content-evenly flex-wrap">
                            <h3 className="py-2 font-mono text-black">Have a coupon code?</h3>
                            <h3 className="py-2 font-mono text-black">Book Now</h3>
                        <div className="text-center">
                            <input className="border-0 border-bottom m-2 py-1" placeholder="Enter your Coupon code"></input>
                            <button className="btn text-white bg-black m-2">Book Now</button>
                        </div>
                    </div>
                    <div className="col-12 text-center text-black">
                        <h3 className="pt-4 pb-3 font-mono">Unlock exclusive deals by referring friends through your link</h3>
                        <button onClick={handleGenerateLink} className="btn bg-black text-white">Click to generate your link</button>
                        <h6 className="pt-3 mb-5 mb-md-2">Your link is : <span className="fw-light">{userDetails && userDetails.generatedLink}</span></h6>
                    </div>
                </section>
            </main>
        </>
    );
}