import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeClick = () => {
        setSidebarOpen(false);
        navigate('/');
    };

    const handleAboutClick = () => {
        if (location.pathname !== '/about-us') {
            setSidebarOpen(false);
            navigate('/about-us');
        } else {
            setSidebarOpen(false);
        }
    };

    const handleServiceClick = () => {
        setSidebarOpen(false);
        setTimeout(() => {
            const serviceSection = document.getElementById('service-section');
            if (serviceSection) {
                serviceSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200); 
    };
    return (
        <header style={{ 
            backgroundColor: '#111111', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
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
            <button
            className={`menu-btn${sidebarOpen ? ' hide' : ''}`}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            &#9776;
          </button>

          <div className={`sidebar${sidebarOpen ? ' open' : ''}`}>
            <button
              className="close-btn"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <div className="sidebar-buttons">
                <button id="Home" onClick={handleHomeClick}>Home</button>
                <button id="About" onClick={handleAboutClick}>About</button>
                <button id="Services" onClick={handleServiceClick}>Services</button>
                <button id="Contact">Contact</button>
            </div>
          </div>

          <div className={`sidebar-overlay${sidebarOpen ? ' show' : ''}`} onClick={() => setSidebarOpen(false)}></div>
          
        </header>
    );
};

export default Header;