import React from 'react';
import Logo from './Logo';

const Footer = () => {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-pro">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-brand-column">
                    <div className="brand-wrapper">
                        <img
                            src="/assets/name_logo.png"
                            alt="Nexora"
                            style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <p className="brand-description">
                        Digital Marketing That Drives Results. We help businesses grow with SEO, PPC, social media, and content strategies that convert.
                    </p>
                    <div className="social-icons-wrapper">
                        {/* Social Icons */}
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div className="footer-links-column">
                    <div className="footer-heading">Services</div>
                    <a href="/services/seo" className="footer-link-item">SEO Optimization</a>
                    <a href="/services/content" className="footer-link-item">Content Marketing</a>
                    <a href="/services/social" className="footer-link-item">Social Media</a>
                    <a href="/services/ads" className="footer-link-item">Paid Advertising</a>
                </div>

                {/* Links Column 2 */}
                <div className="footer-links-column">
                    <div className="footer-heading">Company</div>
                    <a href="/about" className="footer-link-item">About Us</a>
                    <a href="/work" className="footer-link-item">Our Work</a>
                    <a href="/#plans" className="footer-link-item">Pricing</a>
                    <a href="/contact" className="footer-link-item">Contact</a>
                </div>

                {/* CTA / Newsletter */}
                <div className="footer-links-column">
                    <div className="footer-heading">Stay Connected</div>
                    <p className="newsletter-text">Get the latest digital marketing trends delivered to your inbox.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                        />
                        <button className="newsletter-button">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <div className="copyright-text">
                    &copy; {currentYear} Nexora. All rights reserved.
                </div>
                <div className="legal-links">
                    <a href="/privacy" className="legal-link">Privacy Policy</a>
                    <a href="/terms" className="legal-link">Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
