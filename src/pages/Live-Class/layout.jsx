import React, { useState } from 'react';
import { Calendar, Clock, User, Palette, Star, ArrowRight } from 'lucide-react';
import Header from '../../cum/Header';
import Footer from '../../cum/Footer';

const LiveArtClasses = () => {
  const [classes] = useState([
    {
      id: 1,
      title: "Watercolor Landscapes",
      instructor: "Sarah Martinez",
      date: "2025-06-05",
      time: "14:00",
      duration: "2 hours",
      description: "Learn to paint serene landscapes with watercolors. Perfect for beginners and intermediate artists.",
      level: "Beginner",
      price: "$45",
      spots: 8,
      rating: 4.9
    },
    {
      id: 2,
      title: "Portrait Drawing Fundamentals",
      instructor: "Michael Chen",
      date: "2025-06-06",
      time: "18:30",
      duration: "1.5 hours",
      description: "Master the art of portrait drawing with professional techniques and personalized feedback.",
      level: "Intermediate",
      price: "$55",
      spots: 6,
      rating: 4.8
    },
    {
      id: 3,
      title: "Abstract Acrylic Painting",
      instructor: "Emma Thompson",
      date: "2025-06-08",
      time: "10:00",
      duration: "2.5 hours",
      description: "Express your creativity through abstract art using vibrant acrylic paints and mixed media.",
      level: "All Levels",
      price: "$60",
      spots: 10,
      rating: 4.9
    },
    {
      id: 4,
      title: "Digital Art Masterclass",
      instructor: "Alex Rivera",
      date: "2025-06-10",
      time: "16:00",
      duration: "3 hours",
      description: "Dive into digital illustration using professional software and industry techniques.",
      level: "Advanced",
      price: "$75",
      spots: 5,
      rating: 5.0
    }
  ]);

  const handleJoinClass = (classId) => {
    // Future API integration point
    console.log(`Joining class ${classId}`);
    alert('Class booking functionality will be connected to backend API');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#10B981';
      case 'Intermediate': return '#F59E0B';
      case 'Advanced': return '#EF4444';
      default: return '#6366F1';
    }
  };

  return (
    <>
      <Header />
      <div style={{
        backgroundColor: '#ffffff',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #000000 0%, #1f1f1f 100%)',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3
          }} />
          
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '8px 16px',
              borderRadius: '24px',
              marginBottom: '24px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Palette size={20} style={{ marginRight: '8px' }} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Live Interactive Classes</span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
              background: 'linear-gradient(45deg, #ffffff, #f0f8ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Unleash Your Artistic Potential
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              margin: '0 0 40px 0',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              lineHeight: '1.6'
            }}>
              Join live art classes with professional instructors. Learn, create, and connect with artists worldwide in real-time interactive sessions.
            </p>
            
            <button
              onClick={() => document.getElementById('classes').scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'white',
                color: '#000000',
                border: 'none',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(0)',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = '#f5f5f5';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = 'white';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              Explore Classes
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Classes Section */}
        <section id="classes" style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 16px 0'
            }}>
              Upcoming Live Classes
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#4a4a4a',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Join our expert instructors for immersive art experiences. Each class is limited to ensure personalized attention.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
            padding: '0 20px'
          }}>
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                }}
              >
                {/* Decorative gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #000000, #333333)',
                }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#000000',
                    margin: 0,
                    flex: 1
                  }}>
                    {classItem.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginLeft: '16px'
                  }}>
                    <Star size={16} style={{ color: '#FCD34D', fill: '#FCD34D' }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#000000' }}>
                      {classItem.rating}
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <User size={16} style={{ color: '#666666' }} />
                  <span style={{ color: '#666666', fontSize: '0.95rem' }}>
                    {classItem.instructor}
                  </span>
                  <div style={{
                    backgroundColor: getLevelColor(classItem.level),
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginLeft: 'auto'
                  }}>
                    {classItem.level}
                  </div>
                </div>

                <p style={{
                  color: '#333333',
                  lineHeight: '1.6',
                  margin: '0 0 24px 0',
                  fontSize: '0.95rem'
                }}>
                  {classItem.description}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '12px'
                  }}>
                    <Calendar size={16} style={{ color: '#000000' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#666666', fontWeight: '500' }}>
                        Date
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#000000' }}>
                        {formatDate(classItem.date)}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '12px'
                  }}>
                    <Clock size={16} style={{ color: '#000000' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#666666', fontWeight: '500' }}>
                        Time
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#000000' }}>
                        {formatTime(classItem.time)}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <div>
                    <span style={{ fontSize: '1.75rem', fontWeight: '700', color: '#000000' }}>
                      {classItem.price}
                    </span>
                    <span style={{ color: '#666666', fontSize: '0.9rem', marginLeft: '8px' }}>
                      {classItem.duration}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>
                      {classItem.spots} spots left
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleJoinClass(classItem.id)}
                  style={{
                    width: '100%',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#5A67D8';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#667eea';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Join Class
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          backgroundColor: '#1F2937',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: '700',
              margin: '0 0 16px 0'
            }}>
              Ready to Start Your Art Journey?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              opacity: 0.9,
              margin: '0 0 32px 0',
              lineHeight: '1.6'
            }}>
              Join thousands of artists who have transformed their creativity through our live classes.
            </p>
            <button
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#5A67D8';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LiveArtClasses;