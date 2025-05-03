import React from "react";
import Footer from "../../cum/Footer";
import Header from "../../cum/Header";

const services = [
    {
        number: "01",
        title: "Portrait Painting",
        imgAlt: "Portrait Painting Service",
        imgSrc: "/api/placeholder/600/600",
        desc: [
            "Our skilled artists capture the essence and personality of your subjects through stunning portrait paintings. We work with various mediums including oils, acrylics, and watercolors to create timeless pieces that tell your story.",
            "From individual portraits to family compositions, we ensure every detail is perfectly rendered to create a lasting memory."
        ],
        features: [
            "Oil & Acrylic Portraits",
            "Custom Size Options",
            "Digital Previews Available"
        ]
    },
    {
        number: "02",
        title: "Landscape Painting",
        imgAlt: "Landscape Painting Service",
        imgSrc: "/api/placeholder/600/600",
        desc: [
            "Transform your favorite scenic views into beautiful landscape paintings. Our artists expertly capture the beauty of nature, from serene countryside scenes to dramatic urban landscapes.",
            "Each painting is crafted to bring the atmosphere and emotion of the location to life, creating a stunning piece of art for your space."
        ],
        features: [
            "Natural & Urban Landscapes",
            "Various Painting Styles",
            "Custom Location Requests"
        ]
    },
    {
        number: "03",
        title: "Sculptures",
        imgAlt: "Sculpture Service",
        imgSrc: "/api/placeholder/600/600",
        desc: [
            "Our sculptors create unique three-dimensional artworks using various materials including clay, metal, wood, and stone. Each piece is carefully crafted to bring your vision to life in tactile form.",
            "Whether you're looking for abstract pieces or realistic figures, we can create sculptures that make powerful statements in any space."
        ],
        features: [
            "Multiple Material Options",
            "Custom Size & Design",
            "Indoor & Outdoor Pieces"
        ]
    },
    {
        number: "04",
        title: "Wall Painting",
        imgAlt: "Wall Painting Service",
        imgSrc: "/api/placeholder/600/600",
        desc: [
            "Transform your spaces with our professional wall painting services. From murals to decorative finishes, we create stunning wall art that adds character and style to any room.",
            "Our artists work with you to design and execute wall paintings that complement your space and reflect your personal style."
        ],
        features: [
            "Custom Murals",
            "Interior & Exterior",
            "Decorative Techniques"
        ]
    },
    {
        number: "05",
        title: "Pencil & Sketch Drawing",
        imgAlt: "Pencil Drawing Service",
        imgSrc: "/api/placeholder/600/600",
        desc: [
            "Our detailed pencil and sketch drawings capture moments with incredible precision and artistry. Using various techniques and materials, we create striking black and white or tonal artwork.",
            "Perfect for portraits, architectural drawings, or creative illustrations, our sketches bring subtle beauty to any subject."
        ],
        features: [
            "Graphite & Charcoal",
            "Detailed Portraits",
            "Architectural Sketches"
        ]
    }
];

const Cummission = () => (
    <div>
        <Header />
        <div className="container">
            <div className="heading">
                <h1>Our Premium Services</h1>
                <p>Discover our comprehensive range of professional services designed to help your business thrive in today's competitive market.</p>
            </div>
            {services.map((service, idx) => (
                <div className="service-section" key={service.number}>
                    <div className="service-image">
                        <img src={service.imgSrc} alt={service.imgAlt} />
                    </div>
                    <div className="service-content">
                        <div className="service-number">{service.number}</div>
                        <h2>{service.title}</h2>
                        {service.desc.map((d, i) => <p key={i}>{d}</p>)}
                        <div className="features-list">
                            {service.features.map((f, i) => (
                                <div className="feature-item" key={i}>
                                    <div className="feature-icon">✓</div>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="cta-button">Learn More</a>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
        <style>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            body {
                background-color: #d5e0f9;
                color: #333;
                line-height: 1.6;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
            }
            .heading {
                text-align: center;
                padding: 3rem 0;
            }
            .heading h1 {
                font-size: 2.8rem;
                margin-bottom: 1rem;
                color: #2d3748;
                position: relative;
                display: inline-block;
            }
            .heading h1::after {
                content: '';
                position: absolute;
                width: 50%;
                height: 4px;
                background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
                bottom: -10px;
                left: 25%;
            }
            .heading p {
                font-size: 1.2rem;
                color: #718096;
                max-width: 700px;
                margin: 0 auto;
            }
            .service-section {
                display: flex;
                margin: 5rem 0;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                border-radius: 15px;
                overflow: hidden;
                background: white;
                position: relative;
            }
            .service-section:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }
            .service-image {
                flex: 1;
                position: relative;
                overflow: hidden;
                min-height: 300px;
            }
            .service-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                transition: transform 0.5s ease;
            }
            .service-section:hover .service-image img {
                transform: scale(1.05);
            }
            .service-content {
                flex: 3;
                padding: 3rem;
                position: relative;
            }
            .service-section:nth-child(even) {
                flex-direction: row-reverse;
            }
            .service-content h2 {
                font-size: 2rem;
                margin-bottom: 1.5rem;
                position: relative;
                display: inline-block;
                color: #2d3748;
            }
            .service-content h2::after {
                content: '';
                position: absolute;
                width: 60px;
                height: 3px;
                background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
                bottom: -8px;
                left: 0;
            }
            .service-section:nth-child(even) .service-content h2::after {
                left: 0;
                right: auto;
            }
            .service-content p {
                margin-bottom: 1.5rem;
                color: #718096;
                font-size: 1.05rem;
            }
            .features-list {
                margin: 1.5rem 0;
            }
            .feature-item {
                display: flex;
                align-items: center;
                margin-bottom: 0.8rem;
            }
            .feature-icon {
                width: 25px;
                height: 25px;
                background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                color: white;
                font-size: 0.8rem;
            }
            .cta-button {
                display: inline-block;
                padding: 0.8rem 2rem;
                background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
                color: white;
                border: none;
                border-radius: 50px;
                font-weight: 600;
                text-decoration: none;
                margin-top: 1rem;
                transition: all 0.3s ease;
                box-shadow: 0 5px 15px rgba(106, 17, 203, 0.2);
            }
            .cta-button:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(106, 17, 203, 0.3);
            }
            .service-number {
                position: absolute;
                top: 2rem;
                right: 2rem;
                font-size: 5rem;
                font-weight: 800;
                color: rgba(106, 17, 203, 0.05);
                z-index: 0;
            }
            .service-section:nth-child(even) .service-number {
                left: 2rem;
                right: auto;
            }
            @media (max-width: 992px) {
                .service-section, 
                .service-section:nth-child(even) {
                    flex-direction: column;
                }
                .service-image {
                    min-height: 250px;
                }
                .service-content {
                    padding: 2rem;
                }
                .service-number {
                    top: 1rem;
                    right: 1rem;
                    font-size: 4rem;
                }
                .service-section:nth-child(even) .service-number {
                    left: 1rem;
                }
            }
            @media (max-width: 576px) {
                .heading h1 {
                    font-size: 2.2rem;
                }
                .heading p {
                    font-size: 1rem;
                }
                .service-content h2 {
                    font-size: 1.7rem;
                }
                .service-content {
                    padding: 1.5rem;
                }
                .service-number {
                    font-size: 3rem;
                }
            }
        `}</style>
    </div>
);

export default Cummission;