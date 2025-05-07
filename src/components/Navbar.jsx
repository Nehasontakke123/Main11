import React, { useState } from 'react';
import '../assets/css/Navbar.css';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import AuthForm from './AuthForm';
import logoImage from '../assets/images/logo.png';

const Navbar = ({
  selectedLanguage,
  onLanguageChange,
  likedCount,
  likedProducts,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLikedList, setShowLikedList] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  return (
    <header className="navbar">
      {/* ────── top bar ────── */}
      <div className="top-bar">
        <div className="menu-icon" onClick={() => setIsMenuOpen((v) => !v)}>
          ☰
        </div>

        <div className="logo-image">
          <img src={logoImage} alt="Logo" />
        </div>

        <div className="logo-text">LOGO</div>

        <div className="nav-icons">
          <FaSearch className="icon" />

          <div
            className="icon heart-icon-wrapper"
            onClick={() => setShowLikedList((v) => !v)}
          >
            <FaHeart className="icon" />
            {likedCount > 0 && <span className="badge">{likedCount}</span>}
          </div>

          <FaShoppingCart className="icon" />

          <FaUser
            className="icon user-icon"
            onClick={() => setShowAuthPopup(true)}
          />
        </div>
      </div>

      {/* ────── mobile dropdown links ────── */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Skill</a>
        </li>
        <li>
          <a href="">Stories</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>

      {/* ────── liked list popup ────── */}
      {showLikedList && (
        <div className="liked-product-popup">
          {/* Your liked products logic */}
        </div>
      )}

      {/* ────── auth popup ────── */}
      {showAuthPopup && (
  <div className="auth-popup">
    <div className="auth-popup-overlay" onClick={() => setShowAuthPopup(false)} />
    <div className="auth-popup-content">
      <AuthForm />
    </div>
  </div>
)}

    </header>
  );
};

export default Navbar;
