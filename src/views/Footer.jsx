import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <div className="container">
          <div className="col">
            <h3 className="header">How it works</h3>
            <ul>
              <li>
                <a href="#Hero">Getting Started</a>
              </li>
              <li>
                <a href="https://www.apple.com/ios/app-store/">App Store</a>
              </li>
              <li>
                <a href="#FAQ">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <h3 className="header">Company</h3>
            <ul>
              <li>
                <a href="#AboutUs">Our Mission</a>
              </li>
              <li>
                <a href="#Preview">How It Works</a>
              </li>
              <li>
                <a href="#Team">Developers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <h3 className="header">Contact</h3>
            <ul>
              <li>
                <a href="#Hero">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <h3 className="header">Connect</h3>
            <ul>
              <li>
                <a href="#Team">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="more">
        <div className="social">
          <a href="#0">
            <FaLinkedin />
          </a>
          <a href="#1">
            <FaFacebook />
          </a>
          <a href="#2">
            <FaInstagram />
          </a>
          <a href="#3">
            <FaGithub />
          </a>
          <a href="#4">
            <FaTwitter />
          </a>
        </div>
        <div className="copyright">
          Copyright © 2019 Hubstereo. / All rights reserved.
        </div>
      </div>
    </footer>
  );
}
