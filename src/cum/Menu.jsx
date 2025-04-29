import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleAboutClick = () => {
        setSidebarOpen(false);
        navigate('about-us');
    };

    return (
        <div>
            <button
                className={`menu-btn${sidebarOpen ? ' hide' : ''}`}
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
            >
                &#9776;
            </button>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button
                    className="close-btn"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close menu"
                >
                    &times;
                </button>
                <div className="sidebar-buttons">
                    <button id="About" onClick={handleAboutClick}>About</button>
                    <button id="Home">Home</button>
                    <button id="Services">Services</button>
                    <button id="Contact">Contact</button>
                    <button id="career">Career</button>
                </div>
            </div>
            <div className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)}></div>
        </div>
    );
}

export default Menu;