import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Palette, Clock, MapPin, DollarSign } from 'lucide-react';
import Header from '../../cum/Header';
import Footer from '../../cum/Footer';

const CareerPage = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const jobs = [
    {
      id: 1,
      title: "Art Class Instructor",
      type: "Full-time / Part-time",
      location: "Studio & Online",
      salary: "$25-40/hour",
      category: "Teaching",
      description: "Join our creative team as an Art Class Instructor and inspire students of all ages to explore their artistic potential.",
      responsibilities: [
        "Conduct engaging art classes for various age groups",
        "Develop lesson plans and curriculum for different skill levels",
        "Provide constructive feedback and guidance to students",
        "Maintain a safe and inspiring learning environment",
        "Organize art exhibitions and student showcases"
      ],
      requirements: [
        "Bachelor's degree in Fine Arts or related field",
        "2+ years of teaching experience preferred",
        "Strong communication and interpersonal skills",
        "Proficiency in multiple art mediums",
        "Passion for education and student development"
      ]
    },
    {
      id: 2,
      title: "Freelance Artist",
      type: "Contract / Project-based",
      location: "Remote / Flexible",
      salary: "Competitive rates",
      category: "Freelance",
      description: "We're seeking talented freelance artists to collaborate on various creative projects and expand our artistic community.",
      responsibilities: [
        "Create original artwork based on project briefs",
        "Collaborate with our creative team on client projects",
        "Meet project deadlines and quality standards",
        "Participate in brainstorming and concept development",
        "Maintain consistent communication throughout projects"
      ],
      requirements: [
        "Strong portfolio showcasing diverse artistic skills",
        "Proficiency in digital art tools (Photoshop, Illustrator, etc.)",
        "Traditional art skills in various mediums",
        "Ability to work independently and meet deadlines",
        "Professional communication skills"
      ]
    },
    {
      id: 3,
      title: "Children's Art Workshop Leader",
      type: "Part-time",
      location: "Studio",
      salary: "$20-30/hour",
      category: "Teaching",
      description: "Lead fun and educational art workshops specifically designed for children aged 5-12 years.",
      responsibilities: [
        "Plan and execute age-appropriate art activities",
        "Create a fun and safe environment for children",
        "Encourage creativity and self-expression",
        "Manage classroom behavior effectively",
        "Communicate with parents about children's progress"
      ],
      requirements: [
        "Experience working with children",
        "Early childhood education background preferred",
        "Creative and energetic personality",
        "Patience and excellent communication skills",
        "Background check clearance"
      ]
    },
    {
      id: 4,
      title: "Digital Art Specialist",
      type: "Freelance / Contract",
      location: "Remote",
      salary: "Project-based",
      category: "Freelance",
      description: "Specialize in digital art creation for various media including web design, illustrations, and digital marketing materials.",
      responsibilities: [
        "Create digital illustrations and graphics",
        "Design marketing materials and web assets",
        "Collaborate on branding and visual identity projects",
        "Stay updated with digital art trends and techniques",
        "Provide creative input on visual concepts"
      ],
      requirements: [
        "Expert proficiency in Adobe Creative Suite",
        "Strong understanding of digital design principles",
        "Portfolio demonstrating digital art expertise",
        "Knowledge of web design and UI/UX principles",
        "Ability to adapt to different artistic styles"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Creative Community",
      description: "Join a vibrant community of artists and educators passionate about creativity."
    },
    {
      icon: <Palette size={24} />,
      title: "Artistic Growth",
      description: "Continuous learning opportunities and access to new techniques and mediums."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible scheduling options for most positions."
    }
  ];

  const applicationForm = {
    position: '',
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    message: ''
  };

  const [formData, setFormData] = useState(applicationForm);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData(applicationForm);
  };

  return (
    <>
      <Header />
      <div style={{ 
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
        backgroundColor: '#ffffff'
      }}>
        {/* Header */}
        <header style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '60px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '20px',
              margin: '0 0 20px 0'
            }}>
              Join Our Creative Team
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              maxWidth: '600px',
              margin: '0 auto',
              opacity: '0.9'
            }}>
              Shape the future of art education and inspire creativity in others
            </p>
          </div>
        </header>

        {/* Benefits Section */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#f8f8f8'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '50px',
              color: '#000000'
            }}>
              Why Work With Us?
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              {benefits.map((benefit, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '30px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    display: 'inline-block',
                    padding: '20px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    borderRadius: '50%',
                    marginBottom: '20px'
                  }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#000000'
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '1rem' }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#ffffff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '20px',
              color: '#000000'
            }}>
              Current Opportunities
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '50px',
              maxWidth: '600px',
              margin: '0 auto 50px auto'
            }}>
              Explore our available positions in art education and freelance opportunities
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {jobs.map((job) => (
                <div key={job.id} style={{
                  border: '2px solid #f0f0f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: expandedJob === job.id ? '0 10px 30px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div 
                    onClick={() => toggleJobExpansion(job.id)}
                    style={{
                      padding: '30px',
                      cursor: 'pointer',
                      backgroundColor: expandedJob === job.id ? '#000000' : '#ffffff',
                      color: expandedJob === job.id ? '#ffffff' : '#000000',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '20px'
                    }}
                  >
                    <div style={{ flex: '1', minWidth: '250px' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '5px 15px',
                        backgroundColor: expandedJob === job.id ? '#ffffff' : '#000000',
                        color: expandedJob === job.id ? '#000000' : '#ffffff',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        marginBottom: '10px'
                      }}>
                        {job.category}
                      </div>
                      <h3 style={{
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                        marginBottom: '10px',
                        fontWeight: 'bold'
                      }}>
                        {job.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        fontSize: '0.9rem',
                        opacity: '0.8'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Clock size={16} /> {job.type}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <MapPin size={16} /> {job.location}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <DollarSign size={16} /> {job.salary}
                        </span>
                      </div>
                    </div>
                    <div>
                      {expandedJob === job.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <div style={{
                      padding: '30px',
                      backgroundColor: '#f8f8f8',
                      borderTop: '1px solid #e0e0e0'
                    }}>
                      <p style={{
                        fontSize: '1.1rem',
                        marginBottom: '30px',
                        color: '#333'
                      }}>
                        {job.description}
                      </p>
                      
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                      }}>
                        <div>
                          <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            marginBottom: '15px',
                            color: '#000000'
                          }}>
                            Responsibilities
                          </h4>
                          <ul style={{
                            listStyle: 'none',
                            padding: '0'
                          }}>
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} style={{
                                padding: '8px 0',
                                borderBottom: '1px solid #e0e0e0',
                                color: '#555'
                              }}>
                                • {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            marginBottom: '15px',
                            color: '#000000'
                          }}>
                            Requirements
                          </h4>
                          <ul style={{
                            listStyle: 'none',
                            padding: '0'
                          }}>
                            {job.requirements.map((req, index) => (
                              <li key={index} style={{
                                padding: '8px 0',
                                borderBottom: '1px solid #e0e0e0',
                                color: '#555'
                              }}>
                                • {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                          setFormData({...formData, position: job.title});
                        }}
                        style={{
                          marginTop: '30px',
                          padding: '12px 30px',
                          backgroundColor: '#000000',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '5px',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#333333';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#000000';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        Apply for this Position
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" style={{
          padding: '80px 20px',
          backgroundColor: '#000000',
          color: '#ffffff'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '20px'
            }}>
              Apply Now
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              marginBottom: '50px',
              opacity: '0.9'
            }}>
              Ready to join our creative community? Submit your application below
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Position Interested In *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #333',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  >
                    <option value="">Select a position</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #333',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #333',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #333',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g., 3 years in art education"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #333',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    backgroundColor: '#ffffff',
                    color: '#000000'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Portfolio/Website URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://your-portfolio.com"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #333',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    backgroundColor: '#ffffff',
                    color: '#000000'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Tell us about yourself *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Share your passion for art, teaching experience, and why you'd like to join our team..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #333',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                onClick={handleSubmit}
                style={{
                  padding: '15px 40px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: '2px solid #ffffff',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  alignSelf: 'center',
                  marginTop: '20px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#000000';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Submit Application
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#f8f8f8',
          padding: '40px 20px',
          textAlign: 'center',
          borderTop: '1px solid #e0e0e0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ color: '#666', fontSize: '1rem', marginBottom: '10px' }}>
              Have questions about our positions? Contact us at careers@yourartschool.com
            </p>
            <p style={{ color: '#999', fontSize: '0.9rem' }}>
              We are an equal opportunity employer committed to diversity and inclusion.
            </p>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;