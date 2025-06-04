import {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

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
                <Link
                    to="/"
                    id="logo"
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        color: '#FFFAF5',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        textDecoration: 'none'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <img src="/logo.png" alt="logo" width="30" height="30" />
                    <span>Chromadec</span>
                </Link>
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
                <Link to="/">
                    <button id="Home" onClick={() => setSidebarOpen(false)}>Home</button>
                </Link>
                <Link to="/about-us">
                    <button id="About" onClick={() => setSidebarOpen(false)}>About</button>
                </Link>
                {isHomePage && (
                    <button id="Services" onClick={handleServiceClick}>Services</button>
                )}
                <Link to="/contact">
                    <button id="Contact" onClick={() => setSidebarOpen(false)}>Contact</button>
                </Link>
            </div>
          </div>

          <div className={`sidebar-overlay${sidebarOpen ? ' show' : ''}`} onClick={() => setSidebarOpen(false)}></div>
          
        </header>
    );
};

export default Header;