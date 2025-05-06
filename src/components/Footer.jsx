import React from 'react';
import '../assets/css/Footer.css';

import gpay from '../assets/images/gpay.png';
import mastercard from '../assets/images/images.png';
import paypal from '../assets/images/paypal.png';
import amex from '../assets/images/amex.png';
import applepay from '../assets/images/applepay.png';
import shop from '../assets/images/Shop-Pay.png';
import instagram from '../assets/images/instagram.png'; // Add Instagram icon
import linkedin from '../assets/images/in.png'; // Add LinkedIn icon
import usdIcon from '../assets/images/usd.png'; // Add USD icon

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Newsletter and Contact */}
        <div className="footer-row">
          <div className="footer-section">
            <h3 className="underline-heading">Be the first to know</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="underline-heading">Contact Us</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4>Currency</h4>
            <p><img src={usdIcon} alt="USD" className="currency-icon" />. USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </small>
          </div>
        </div>

        {/* Links and Social & Payments */}
        <div className="footer-row">
          <div className="footer-section">
            <h3>metta muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <span>
                <img src={instagram} alt="Instagram" className="social-icon" />
              </span>
              <span>
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </span>
            </div>
            <div className="footer-payments">
              <span>metta muse ACCEPTS</span>
              <div className="payment-icons">
                <img src={gpay} alt="GPay" />
                <img src={mastercard} alt="MasterCard" />
                <img src={paypal} alt="PayPal" />
                <img src={amex} alt="Amex" />
                <img src={applepay} alt="Apple Pay" />
                <img src={shop} alt="Shop Pay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2025 mettā muse. All rights reserved.</p>
      </div>
    </footer>
  );
}
