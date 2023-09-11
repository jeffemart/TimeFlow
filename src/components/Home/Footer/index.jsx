import React from "react";
import { Link } from 'react-router-dom';
import './index.css';

function Footer() {
  return (
    <>
      <footer>
        <div id="footer_content">
          <div id="footer_contacts">
            <h1>Logo</h1>
            <p>It's all about your dreams.</p>

            <div id="footer_social_media">
              <Link to="#" className="footer-link" id="instagram">
                <i className="fa-brands fa-instagram"></i>
              </Link>

              <Link to="#" className="footer-link" id="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>

              <Link to="#" className="footer-link" id="whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <h3>Blog</h3>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Tech
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Adventures
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Music
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <h3>Products</h3>
            </li>
            <li>
              <Link to="#" className="footer-link">
                App
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Desktop
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Cloud
              </Link>
            </li>
          </ul>

          <div id="footer_subscribe">
            <h3>Subscribe</h3>

            <p>Enter your e-mail to get notified about our new solutions</p>

            <div id="input_group">
              <input type="email" id="email" />
              <button>
                <i className="fa-regular fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="footer_copyright">&#169; 2023 all rights reserved</div>
      </footer>
    </>
  );
}

export default Footer;
