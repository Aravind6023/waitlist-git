import React from "react";
import { Link } from "react-router-dom";

export function LandingPage() {
    return (
        <>
            <main className="container-fluid min-vh-100 bg-black d-flex justify-content-center">
                <section className="row w-100">
                    <div className="col-12 text-white text-center d-flex flex-column justify-content-center">
                        <h1 className="p-3 p-md-3">iPhone 15 Pro: Elevating Innovation to Pro Levels</h1>
                        <p className="p-3 p-md-3">Anticipation is building as we gear up for the highly awaited launch of our revolutionary new product. We value your enthusiasm and want you to be among the privileged few who get an exclusive offer. To make this experience even more rewarding, we've set a special milestone: refer just 99 friends, and unlock an incredible offer! Register now to secure your spot as an early insider and start spreading the excitement. The more friends you refer, the closer you get to that exclusive offer that will make this launch truly unforgettable. Join us on this thrilling journey register, refer, and be ready to seize the extraordinary rewards that await you and your friends!</p>
                        <div className="p-3 p-md-3">
                            <img className="rounded-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0D6DGwL9KK4GDqvk6EGrbre_HktSn_ZS1OQ&usqp=CAU" alt="No Images"></img>
                        </div>
                        <div className="p-3 mb-4">
                        <Link to='/register' className="bg-danger px-3 py-2 mx-2 rounded-5 text-black text-decoration-none">Register Now</Link>
                        <Link to='/login' className="bg-danger px-3 py-2 mx-2 rounded-5 text-black text-decoration-none">Login Now</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}