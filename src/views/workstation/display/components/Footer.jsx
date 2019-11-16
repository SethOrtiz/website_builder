import React from "react";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="social">
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
        </div>
        <div className="links">
          <div>
            <h3 className="header">Donate</h3>
          </div>
          <div>
            <h3 className="header">Booking</h3>
            <div>Manager: Jane Doe</div>
            <div>Email: Placeholder@email.com</div>
          </div>
        </div>
      </footer>
  );
}
