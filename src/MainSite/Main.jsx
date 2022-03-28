import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login/Login";
import { useState } from 'react';


const Main = (props) => {
    const[modalActive, setModalActive] = useState(false);
    return (
        <div>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li>
                    </ul>
                    <ul class="nav">
                        {/* <li className="nav-item"><NavLink to='/Login' className="nav-link link-dark px-2" >Login</NavLink></li> */}
                        <li className="nav-item"><button className="nav-link link-dark px-2" onClick={() => setModalActive(true)}>Login</button></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            <Login active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Main