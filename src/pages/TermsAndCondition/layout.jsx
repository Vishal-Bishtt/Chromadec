import React from "react";
import Header from "../../cum/Header";
import Footer from "../../cum/Footer";

const Terms = () => {
    return (
        <div style={{ 
            background: '#FFFAF5',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Segoe UI', Arial, sans-serif"
        }}>
            <Header />
            <div style={{
                maxWidth: '900px',
                margin: '40px auto',
                padding: '0 20px',
                flex: 1,
                '& h3': {
                    fontSize: '1.5rem',
                    color: '#111111',
                    marginTop: '30px',
                    marginBottom: '15px',
                    fontFamily: 'Poppins, sans-serif'
                },
                '& p': {
                    fontSize: '1.15rem',
                    lineHeight: '1.6',
                    color: '#333333',
                    marginBottom: '20px',
                    textAlign: 'justify'
                },
                '& ul': {
                    marginLeft: '20px',
                    marginBottom: '20px',
                    fontSize: '1.15rem'
                },
                '& li': {
                    marginBottom: '10px',
                    color: '#333333',
                    lineHeight: '1.5'
                }
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '40px',
                    color: '#111111',
                    textAlign: 'center',
                    borderBottom: '2px solid #111111',
                    paddingBottom: '20px'
                }}>TERMS OF SERVICE</h1>
                
                <div style={{
                    '& h3': {
                        fontSize: '1.5rem',
                        color: '#111111',
                        marginTop: '40px',
                        marginBottom: '20px',
                        borderLeft: '4px solid #111111',
                        paddingLeft: '15px'
                    },
                    '& p': {
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '25px',
                        textAlign: 'justify'
                    },
                    '& ul': {
                        listStyle: 'none',
                        margin: '20px 0 20px 20px'
                    },
                    '& li': {
                        position: 'relative',
                        paddingLeft: '25px',
                        marginBottom: '15px',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: '#333333',
                        '&::before': {
                            content: '"•"',
                            position: 'absolute',
                            left: '0',
                            color: '#111111'
                        }
                    }
                }}>
                    <h3>1. ABOUT CHROMADEC</h3>
                    <p>ChromaDec is an independently operated entity providing services via this Website. It is not a formally registered company, and references to "Company," "We," "Us," or "Our" do not imply legal incorporation or registration.</p>
                    
                    <h3>2. ACCEPTANCE OF TERMS</h3>
                    <p>By accessing this Website, you confirm that:
                        <p>You are at least 18 years old or have the consent of a parent or guardian.</p>
                        <p>You have read, understood, and agreed to these Terms.</p>
                        <p>You comply with all applicable local, national, and international laws.</p> 
                    </p>
                    
                    <h3>3. CHANGES TO TERMS</h3>
                    <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service constitutes acceptance of modified terms.</p>
                    
                    <h3>4. USER RESPONSIBILITIES</h3>
                    <p>Users must maintain accurate account information, protect account credentials, and use the service responsibly. Any misuse or unauthorized access should be reported immediately.</p>
                    
                    <h3>5. INTELLECTUAL PROPERTY RIGHTS</h3>
                    <p>All content, trademarks, and materials on this website are protected by intellectual property laws. Users may not copy, modify, or distribute without explicit permission.</p>
                    
                    <h3>6. PRIVACY POLICY</h3>
                    <p>Our privacy policy outlines how we collect, use, and protect your personal information. By using our service, you consent to our data practices.</p>
                    
                    <h3>7. DISCLAIMER OF WARRANTIES</h3>
                    <p>The service is provided "as is" without any warranties, express or implied. We do not guarantee uninterrupted or error-free operation.</p>
                    
                    <h3>8. LIMITATION OF LIABILITY</h3>
                    <p>ChromaDec shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
                    
                    <h3>9. THIRD-PARTY LINKS & SERVICES</h3>
                    <p>We may provide links to third-party websites. We are not responsible for their content or practices. Use them at your own risk.</p>
                    
                    <h3>10. GOVERNING LAW & JURISDICTION</h3>
                    <p>These terms are governed by applicable laws. Any disputes shall be resolved in the appropriate courts of jurisdiction.</p>
                    
                    <h3>11. TERMINATION OF ACCESS</h3>
                    <p>We reserve the right to terminate or suspend access to our services at any time, without prior notice, for violations of these terms.</p>
                    
                    <h3>12. INDEMNIFICATION</h3>
                    <p>Users agree to indemnify and hold ChromaDec harmless from any claims arising from their use of the service or violation of these terms.</p>
                    
                    <h3>13. FORCE MAJEURE</h3>
                    <p>We are not liable for any failure to perform due to circumstances beyond our reasonable control, including natural disasters or technical failures.</p>
                    
                    <h3>14. CONTACT INFORMATION</h3>
                    <p>For questions about these terms, please contact us at support@chromadec.com</p>
                    
                    <h3>15. ENTIRE AGREEMENT</h3>
                    <p>These terms constitute the entire agreement between users and ChromaDec regarding the use of our services.</p>
                </div>
            </div>
            <div style={{ fontFamily: 'initial' }}>
                <Footer />
            </div>
            <style>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    h3 {
                        font-size: 1.3rem !important;
                    }
                    p, li {
                        font-size: 1rem !important;
                    }
                }
                @media (max-width: 480px) {
                    div[style*="maxWidth: '900px'"] {
                        padding: 0 2px !important;
                    }
                    h1 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Terms;