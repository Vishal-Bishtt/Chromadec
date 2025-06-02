import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="footer"
      style={{
        background: "#111111",
        color: "#FFFFFF",
        padding: "32px 0 18px 0",
        textAlign: "center",
        marginTop: 0, // Changed from 40px to 0
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
        <a
          href="#"
          style={{
            color: "#FFFAF5",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#666666")}
          onMouseOut={(e) => (e.target.style.color = "#FFFAF5")}
          onClick={e => {
            e.preventDefault();
            navigate("/terms-and-condition");
          }}
        >
          Terms of Services
        </a>
        <a
          href="#"
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
        </a>
        <a
          href="#"
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
        </a>
        <a
          href="#"
          style={{
            color: "#FFFAF5",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#666666")}
          onMouseOut={(e) => (e.target.style.color = "#FFFAF5")}
          onClick={e => {
            e.preventDefault();
            navigate("/About-us");
          }}
        >
          About Us
        </a>
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
      <div
        className="footer-social"
        style={{
          display: "flex",
          gap: "18px",
          marginTop: "8px",
          position: "absolute",
          right: "32px",
          top: "32px",
        }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img
            src="/facebook.png"
            alt="Facebook"
            style={{ width: "32px", height: "32px", borderRadius: "8px", marginTop: "19px" }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            src="/instagram.png"
            alt="Instagram"
            style={{ width: "68px", height: "68px", borderRadius: "8px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;