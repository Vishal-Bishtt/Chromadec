import React from 'react';
import { Palette, Calendar, Bell } from 'lucide-react';
import Header from '../../cum/Header';
import Footer from '../../cum/Footer';

const ArtEvent = () => {
  return (
    <>
      <Header />
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5
        }} />

        {/* Floating Art Icons */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite'
        }}>
          <Palette size={40} color="#000000" />
        </div>
        
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite reverse'
        }}>
          <Calendar size={35} color="#000000" />
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          opacity: 0.1,
          animation: 'float 7s ease-in-out infinite'
        }}>
          <Bell size={30} color="#000000" />
        </div>

        {/* Main Content */}
        <div style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          width: '100%'
        }}>
          {/* Coming Soon Text */}
          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: '900',
            margin: '0 0 24px 0',
            lineHeight: '0.9',
            color: 'rgba(0, 0, 0, 0.15)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.05))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Coming Soon
          </h1>

          {/* Subtitle */}
          <div style={{
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 16px 0',
              letterSpacing: '0.02em'
            }}>
              Extraordinary Art Event
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#666666',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '400'
            }}>
              Get ready for an immersive art experience like no other. 
              Something amazing is in the works.
            </p>
          </div>

          {/* Decorative Line */}
          <div style={{
            width: '100px',
            height: '2px',
            backgroundColor: '#000000',
            margin: '40px auto',
            opacity: 0.3
          }} />

          {/* Additional Info */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            color: '#999999',
            fontSize: '0.95rem',
            fontWeight: '500',
            marginTop: '40px'
          }}>
            <Bell size={16} />
            <span>Stay tuned for updates</span>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            h1 {
              font-size: clamp(3rem, 15vw, 6rem) !important;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ArtEvent;