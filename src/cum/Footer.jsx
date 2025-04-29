import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="footer"
      style={{
        background: "#85a6ed",
        color: "#fff",
        padding: "32px 0 18px 0",
        textAlign: "center",
        marginTop: "40px",
        borderTop: "2px solid #a3bdf2",
        position: "relative"
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
          style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
          onClick={e => {
            e.preventDefault();
            navigate("/terms-and-condition");
          }}
        >
          Terms of Services
        </a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Privacy Policy</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Career</a>
        <a
          href="#"
          style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
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
          color: "#fff",
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