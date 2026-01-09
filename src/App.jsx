import React, { useEffect, useState } from 'react';
import './index.css';
import Banner from './components/common/Banner';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ServiceSEO from './pages/services/SEO';
import ServiceContent from './pages/services/Content';
import ServiceSocial from './pages/services/Social';
import ServiceAds from './pages/services/Ads';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Blog from './pages/Blog';

import Post1 from './pages/blog/Post1';
import Post2 from './pages/blog/Post2';
import Post3 from './pages/blog/Post3';
import Post4 from './pages/blog/Post4';
import Post5 from './pages/blog/Post5';
import Post6 from './pages/blog/Post6';
import ThemeSwitcher from './components/common/ThemeSwitcher';

function App() {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        // Initialize Webflow after React has rendered the DOM
        if (window.Webflow) {
            window.Webflow.destroy();
            window.Webflow.ready();

            if (window.Webflow.require && window.Webflow.require('ix2')) {
                window.Webflow.require('ix2').init();
            }
        }

        // Initialize AOS (Animate On Scroll)
        const initAOS = () => {
            if (window.AOS) {
                window.AOS.init({
                    duration: 1000,
                    once: true,
                    offset: 100,
                    easing: 'ease-out-cubic'
                });
            } else {
                setTimeout(initAOS, 100);
            }
        };
        initAOS();

    }, [path]);

    let Component;
    if (path === '/' || path === '/index.html') {
        Component = Home;
    } else if (path === '/about') {
        Component = About;
    } else if (path === '/work') {
        Component = Work;
    } else if (path === '/contact') {
        Component = Contact;
    } else if (path === '/services/seo') {
        Component = ServiceSEO;
    } else if (path === '/services/content') {
        Component = ServiceContent;
    } else if (path === '/services/social') {
        Component = ServiceSocial;
    } else if (path === '/services/ads') {
        Component = ServiceAds;
    } else if (path === '/privacy') {
        Component = Privacy;
    } else if (path === '/terms') {
        Component = Terms;
    } else if (path === '/blog') {
        Component = Blog;
    } else if (path === '/blog/ai-campaign-strategy') {
        Component = Post1;
    } else if (path === '/blog/content-creation-branding') {
        Component = Post2;
    } else if (path === '/blog/performance-marketing') {
        Component = Post3;
    } else if (path === '/blog/seo-google-updates') {
        Component = Post4;
    } else if (path === '/blog/ai-automation') {
        Component = Post5;
    } else if (path === '/blog/social-media-importance') {
        Component = Post6;
    } else {
        Component = NotFound;
    }

    return (
        <>
            <Banner />
            <Navbar />
            <Component />
            <Footer />
            <ThemeSwitcher />
        </>
    );
}

export default App;
