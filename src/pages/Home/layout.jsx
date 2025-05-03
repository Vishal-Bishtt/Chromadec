import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../../cum/Footer';
import Header from '../../cum/Header';
import './home.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState("EXCELLENCE");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const words = ["INNOVATION", "PERFECTION", "EXCELLENCE"];
  const navigate = useNavigate();

  useEffect(() => {
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        setCurrentWord(words[currentIndex]);
        setIsTransitioning(false);
      }, 500);  
    }, 3000);  

    return () => clearInterval(intervalId);
  }, []);

  const handleAboutClick = () => {
    setSidebarOpen(false);
    navigate('about-us');
  };

  const handleServiceClick = () => {
    setSidebarOpen(false);
    setTimeout(() => {
      const serviceSection = document.getElementById('service-section');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Wait for sidebar to close
  };

  return (
    <div className="app-home">
      <div className="main">
        <div className="nav">
          <Header />
        </div>
        {}
        <div>
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
            <button id="Home">Home</button>
              <button id="About" onClick={handleAboutClick}>About</button>
              <button id="Services" onClick={handleServiceClick}>Services</button>
              <button id="Contact">Contact</button>
            </div>
          </div>

          <div className={`sidebar-overlay${sidebarOpen ? ' show' : ''}`} onClick={() => setSidebarOpen(false)}></div>
          
          <div className="tagline">
            <p>
              <span>WHERE ARTISTIC VISION MEETS</span>
              <span className="word-wrapper">
                <span className={`changing-word ${isTransitioning ? 'fade' : ''}`}>
                  {currentWord}
                </span>
              </span>
            </p>
            <br />
            <p id='second'>
              Transforming ideas into art with Chromadec commissions, immersive events, and expert-led classes.<br />
              Where creativity finds its true expression.
            </p>
          </div>

          <div className="welcome">
            <p>WELCOME</p>
            <p>Welcome to our world of refined artistry, where creativity knows no bounds.
              We craft unique experiences through custom commissions, curated events and expert-led classes,
                all tailored to the discerning eye. Our art services are designed to elevate your space and inspire
                your senses. From personalized commissions to sophisticated events & expert guidance, every experience
                  is crafted with passion & care.</p>
          </div>

          <div className="service" id="service-section">
            <div className="div1 service-card">
              <div className="service-img-circle">
                <img src="/art-and-commision.jpg" alt="Custom Art" />
              </div>
              <h1>Custom Art Commissions</h1>
              <p>Bring your vision to life with our Chromadec art commissions.
                Our talented artists work closely with you to create a 
                one of a kind piece that reflects your unique style and 
                sophistication.</p>
              <button
                className="service-btn"
                onClick={() => navigate('/commission-and-artwork')}
              >
                Learn More
              </button>
            </div>
            <div className="div2 service-card">
              <div className="service-img-circle">
                <img src="/art-event.jpg" alt="Art Events" />
              </div>
              <h1>Art events</h1>
              <p>Immerse yourself in the world of art at our curated events.
                From gallery openings to workshops, each occasion offers a
                  chance to connect with fellow art enthusiasts and experience the latest trends.</p>
              <button className="service-btn">View Events</button>
            </div>
            <div className="div3 service-card">
              <div className="service-img-circle">
                <img src="/art-classes.jpg" alt="Art Classes" />
              </div>
              <h1>Art classes</h1>
              <p>Unlock your kid's creative potential with our expert-led classes.
                Designed for all skill levels, our sessions provide a supportive
                  environment to explore artistic expression and refine techniques.</p>
              <button className="service-btn">Join Classes</button>
            </div>
          </div>
          <div className="previousEvents">
            {/* Space for logo */}
            <div className="previousEvents-logo-space"></div>
            <div className="previousEvents-content">
              <h1>PREVIOUS EVENTS</h1>
              <div className="previousEvents-list">
                <div className="previousEvents-item">
                  <img src="/misyatem.png" alt="NI SYSTEMS" className="previousEvents-img" />
                  <h4>NI SYSTEMS</h4>
                </div>
                <div className="previousEvents-item">
                  <img src="/Nielsen_id6jSw3Gbd_1.png" alt="NEILSON MEDIA" className="previousEvents-img" />
                  <h4>NEILSON MEDIA</h4>
                </div>
                <div className="previousEvents-item">
                  <img src="/Sun_Pharma_logo.svg-e1743408361398-300x300.png" alt="SUN PHARMA" className="previousEvents-img" />
                  <h4>SUN PHARMA</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="about-section">
            <h2>About Us</h2>
            <p>We are passionate about fostering a community that celebrates artistic expression.
              Through Chromadec commissions, curated events, 
              and expert instruction, we aim to inspire and elevate the art world.<br />
            </p>
            <br></br>
            <br></br>
            <p>
              Currently available in Bangalore urban
              <img 
                src="/location.png" 
                alt="Location" 
                style={{ marginLeft: '4px', verticalAlign: 'middle', height: '18px',marginTop: '-2px' }} 
              />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
