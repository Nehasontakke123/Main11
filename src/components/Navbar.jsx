import React, { useState } from 'react';
import '../assets/css/Navbar.css';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import AuthForm from './AuthForm';
import logoImage from '../assets/images/logo.png'; // ✅ Your logo image path

const Navbar = ({ selectedLanguage, onLanguageChange, likedCount, likedProducts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLikedList, setShowLikedList] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleDropdown = () => setShowDropdown(prev => !prev);
  const toggleLikedList = () => setShowLikedList(prev => !prev);
  const toggleAuthPopup = () => setShowAuthPopup(prev => !prev);

  return (
    <header className="navbar">
      <div className="top-bar">
        {/* ✅ Left side logo image */}
        <div className="logo-image">
          <img src={logoImage} alt="Logo" />
        </div>

        {/* ✅ Centered LOGO text */}
        <div className="logo-text">LOGO</div>

        {/* ✅ Right side icons */}
        <div className="nav-icons">
          <FaSearch className="icon" />

          <div className="icon heart-icon-wrapper" onClick={toggleLikedList}>
            <FaHeart className="icon" />
            {likedCount > 0 && <span className="badge">{likedCount}</span>}
          </div>

          <FaShoppingCart className="icon" />
          <FaUser className="icon" onClick={toggleAuthPopup} />

          <div className="language-selector" onClick={toggleDropdown}>
            <span>{selectedLanguage}English</span>
            {showDropdown && (
              <div className="language-dropdown">
                <button onClick={() => onLanguageChange('English')}>English</button>
                <button onClick={() => onLanguageChange('Marathi')}>Marathi</button>
                <button onClick={() => onLanguageChange('Hindi')}>Hindi</button>
              </div>
            )}
          </div>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="">Shop</a></li>
        <li><a href="">Skill</a></li>
        <li><a href="">Stories</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>

      {showLikedList && (
        <div className="liked-product-popup">
          <h3>❤️ Liked Products</h3>
          {likedProducts.length === 0 ? (
            <p>No liked products yet.</p>
          ) : (
            likedProducts.map((id) => {
              const product = products.find(p => p.id === id);
              return (
                <div key={id} className="liked-product-item">
                  <img src={product?.image} alt={product?.title} />
                  <span>{product?.title}</span>
                </div>
              );
            })
          )}
        </div>
      )}

      {showAuthPopup && (
        <div className="auth-popup">
          <div className="auth-popup-inner">
            <button className="close-btn" onClick={toggleAuthPopup}>×</button>
            <AuthForm
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              onClose={toggleAuthPopup}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
