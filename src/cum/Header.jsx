import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
const Header = () => {
    const navigate = useNavigate();
    return (
        <header style={{ 
            backgroundColor: '#FF7E00', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(255, 126, 0, 0.2)'
        }}>
            <div className="nav" style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    id="logo"
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        color: '#FFFAF5',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
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