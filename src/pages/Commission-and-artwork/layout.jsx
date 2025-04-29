import React from "react";
import Footer from "../../cum/Footer";
import Header from "../../cum/Header";

const items = [
    { title: "Potrate Painting" },
    { title: "Landscape Painting" },
    { title: "Sculptures" },
    { title: "Wall Painting" },
    { title: "Pencil/Sketchs Drawing" },
];

const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    gap: "32px",
    maxWidth: "900px",
    margin: "60px auto",
    minHeight: "500px",
    alignItems: "center",
    justifyItems: "center",
    position: "relative",
};

const cardStyle = {
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    padding: "40px 32px",
    minWidth: "260px",
    minHeight: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)",
    cursor: "pointer",
};

const cardHoverStyle = {
    transform: "translateY(-8px) scale(1.04)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
};

const buttonStyle = {
    marginTop: "24px",
    padding: "12px 0",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s cubic-bezier(.4,0,.2,1), transform 0.2s cubic-bezier(.4,0,.2,1)",
    width: "100%", // Make button take full width of card
    maxWidth: "320px", // Optional: limit max width for large screens
    boxSizing: "border-box",
};

const buttonHoverStyle = {
    background: "#3730a3",
    transform: "scale(1.06)",
};

function ArtworkCard({ title }) {
    const [hover, setHover] = React.useState(false);
    const [btnHover, setBtnHover] = React.useState(false);

    return (
        <div
            style={{
                ...cardStyle,
                ...(hover ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#222", textAlign: "center" }}>{title}</div>
            {/* Content space between title and button */}
            <div style={{ minHeight: "40px", margin: "18px 0", width: "100%", textAlign: "center" }}>
                {/* Add your content here for each card */}
            </div>
            <button
                style={{
                    ...buttonStyle,
                    ...(btnHover ? buttonHoverStyle : {}),
                }}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
            >
                Explore
            </button>
        </div>
    );
}

const Cummission = () => {
    return (
        <div>
            <Header />
            <div className="main" style={{ minHeight: "100vh", background: "#f3f4f6" }}>
                <div style={gridContainerStyle}>
                    {/* First 4 items in grid */}
                    <ArtworkCard title={items[0].title} />
                    <ArtworkCard title={items[1].title} />
                    <ArtworkCard title={items[2].title} />
                    <ArtworkCard title={items[3].title} />
                    {/* Last item centered in last row */}
                    <div style={{
                        gridColumn: "1 / span 2",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <ArtworkCard title={items[4].title} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Cummission;