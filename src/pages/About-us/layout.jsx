import Header from '../../cum/Header';
import Footer from '../../cum/Footer';

const AboutUsLayout = () => {
    return(
        <div className="main" style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: '#FFFAF5',
            color: '#222',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <Header />
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '100%',
                maxWidth: '100vw',
                margin: '40px 0 0 0',
                background: '#FFFAF5',
                borderRadius: '18px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
                padding: '36px 5vw',
                boxSizing: 'border-box'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: 'Cinzel, serif',
                    fontSize: '2.5rem',
                    letterSpacing: '2px',
                    marginBottom: '30px',
                    color: '#111111',
                    textShadow: '0 2px 8pxrgb(255, 255, 255)'
                }}>OUR STORY</h1>
                <h3 style={{
                    color: '#111111',
                    fontSize: '1.5rem',
                    marginTop: '24px'
                }}>Mission</h3>
                <p style={{
                    fontSize: '1.15rem',
                    lineHeight: '1.8',
                    margin: '12px 0 24px 0',
                    textAlign: 'justify',
                    background: '#FFFAF5',
                    borderRadius: '8px',
                    padding: '14px 18px'
                }}>
                    At Chromadec, we believe that art has the transformative power to inspire, connect, and heal.
                    Our mission is to provide a dynamic platform for both emerging and
                    established artists to showcase their work, express their unique perspectives,
                    and reach new heights of creative expression. We are dedicated to fostering a vibrant
                    community where artists can connect with like-minded individuals, exchange ideas, and
                    find collaboration opportunities. Through Chromadec, artists gain the exposure they 
                    deserve, reaching a global audience that appreciates and celebrates the beauty of their 
                    creations. Whether you're an artist or an art enthusiast, Chromadec is a place where 
                    creativity thrives, and art becomes a powerful force for change.
                </p>
                <h3 style={{
                    color: '#111111',
                    fontSize: '1.5rem',
                    marginTop: '24px'
                }}>Vision</h3>
                <p style={{
                    fontSize: '1.15rem',
                    lineHeight: '1.8',
                    margin: '12px 0 0 0',
                    textAlign: 'justify',
                    background: '#FFFAF5',
                    borderRadius: '8px',
                    padding: '14px 18px'
                }}>
                    Our vision is to become the leading online platform for artists, 
                    art enthusiasts, and collectors alike.
                    We aim to cultivate a vibrant and inclusive community 
                    that fosters creativity, innovation, and collaboration. By providing 
                    a space where artists can showcase their work, connect with others, 
                    and gain global exposure, we strive to empower creative minds and 
                    help them thrive. Our platform is built on mutual support, where 
                    art lovers and collectors come together to discover, appreciate, 
                    and invest in unique works of art, while artists gain the recognition
                    and opportunities they deserve.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default AboutUsLayout;