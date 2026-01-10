import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" className="nav-bar w-nav">
            <div className="nav-container w-container">
                <div className="nav-logo-div" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" aria-current="page" className="nav-logo w-inline-block w--current">
                        <Logo variant="standard" />
                    </Link>
                    <div className="logo-line-divider"></div>
                    <div className="logo-subtitle">Digital Marketing</div>
                </div>
                <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                    <Link to="/" className="nav-menu-link w-nav-link">Home</Link>
                    <Link to="/about" className="nav-menu-link w-nav-link">About</Link>
                    <Link to="/work" className="nav-menu-link w-nav-link">Work</Link>
                    <Link to="/blog" className="nav-menu-link w-nav-link">Blog</Link>
                    <div className="nav-cta-button-container">
                        <Link to="/contact" className="call-slide-link w-inline-block">
                            <div className="nav-button secondary">Contact</div>
                        </Link><a href="https://wa.me/919904256613?text=Hi,%20I'm%20interested%20in%20growing%20my%20business%20with%20digital%20marketing." target="_blank" rel="noreferrer" className="nav-button primary w-nav-link">Get Started</a></div>
                </nav>
                <div className="nav-button-animated w-nav-button">
                    <div className="menu-top-line"></div>
                    <div className="menu-middle-line"></div>
                    <div className="menu-bottom-line"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
