import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background: "#111111",
        color: "#FFFFFF",
        padding: "32px 0 18px 0",
        textAlign: "center",
        marginTop: 0, 
        borderTop: "2px solid #333333",
        position: "relative",
        fontFamily: "'Segoe UI', Arial, sans-serif"
      }}
    >
      <div
        className="footer-links"
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/terms-and-condition"
          style={{
            color: "#FFFAF5",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#666666")}
          onMouseOut={(e) => (e.target.style.color = "#FFFAF5")}
        >
          Terms of Services
        </Link>
        <Link
          to="/privacy-policy"
          style={{
            color: "#FFFAF5",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#666666")}
          onMouseOut={(e) => (e.target.style.color = "#FFFAF5")}
        >
          Privacy Policy
        </Link>
        <Link
          to="/career"
          style={{
            color: "#FFFAF5",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#666666")}
          onMouseOut={(e) => (e.target.style.color = "#FFFAF5")}
        >
          Career
        </Link>
        <Link
          to="/About-us"
          style={{
            color: "#FFFAF5",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#666666")}
          onMouseOut={(e) => (e.target.style.color = "#FFFAF5")}
        >
          About Us
        </Link>
      </div>
      <div
        className="footer-copy"
        style={{
          fontSize: "1rem",
          color: "#999999",
          marginBottom: "12px",
        }}
      >
        &copy; {new Date().getFullYear()} Chromadec. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;