import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Banner from './components/common/Banner';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
const ServiceSEO = React.lazy(() => import('./pages/services/SEO'));
const ServiceContent = React.lazy(() => import('./pages/services/Content'));
const ServiceSocial = React.lazy(() => import('./pages/services/Social'));
const ServiceAds = React.lazy(() => import('./pages/services/Ads'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Blog = React.lazy(() => import('./pages/Blog'));

const Post1 = React.lazy(() => import('./pages/blog/Post1'));
const Post2 = React.lazy(() => import('./pages/blog/Post2'));
const Post3 = React.lazy(() => import('./pages/blog/Post3'));
const Post4 = React.lazy(() => import('./pages/blog/Post4'));
const Post5 = React.lazy(() => import('./pages/blog/Post5'));
const Post6 = React.lazy(() => import('./pages/blog/Post6'));

function App() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

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

    }, [location]);

    return (
        <>
            <Banner />
            <Navbar />
            <React.Suspense fallback={<div className="loading-spinner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/index.html" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/seo" element={<ServiceSEO />} />
                    <Route path="/services/content" element={<ServiceContent />} />
                    <Route path="/services/social" element={<ServiceSocial />} />
                    <Route path="/services/ads" element={<ServiceAds />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/ai-campaign-strategy" element={<Post1 />} />
                    <Route path="/blog/content-creation-branding" element={<Post2 />} />
                    <Route path="/blog/performance-marketing" element={<Post3 />} />
                    <Route path="/blog/seo-google-updates" element={<Post4 />} />
                    <Route path="/blog/ai-automation" element={<Post5 />} />
                    <Route path="/blog/social-media-importance" element={<Post6 />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </React.Suspense>
            <Footer />
        </>
    );
}

export default App;
