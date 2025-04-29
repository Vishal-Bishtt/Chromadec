import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
const Header = () => {
    const navigate = useNavigate();
    return (
        <header style={{ backgroundColor: '#85a6ed', padding: '20px' }}>
            <div className="nav" style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    id="logo"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    <img src="/logo.png" alt="logo" width="30" height="30" />
                    <span>Chromadec</span>
                </div>
            </div>
        </header>
    );
};

export default Header;