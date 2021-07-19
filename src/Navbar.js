import React, {useState, useEffect} from 'react'
import './Navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img 
            className="nav__avatar"
            src="https://i.pinimg.com/474x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg"
            alt="User Pic"
            />
        </div>
    )
}

export default Navbar
