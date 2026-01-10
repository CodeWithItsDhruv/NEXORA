import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="section page-hero">
            <div className="container center-align mobile-static w-container">

                <div className="hero-overflow-left-image w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                            <img
                                src="/assets/icon-1.png"
                                loading="lazy"
                                data-w-id="1eb5875d-d04e-0718-5582-ddf2579e0b64"
                                alt=""
                                className="overflow-icon-left"
                            />
                            <a href="#" className="work-grey-box w-inline-block">
                                <div
                                    data-w-id="32ad7147-8e2d-f6b5-fd8e-1b087219f644"
                                    className="hero-work-white-insert overflow-left"
                                >
                                    <img src="/assets/hero_mockup_1.png" loading="lazy" width="426" alt="Investfirm" className="work-hero-image" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-overflow-right-image w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                            <img
                                src="/assets/icon-2.png"
                                loading="lazy"
                                data-w-id="413217c1-acc3-71b4-f109-77b9205b0de6"
                                alt=""
                                className="overflow-icon-right"
                            />
                            <a href="#" className="work-grey-box w-inline-block">
                                <div
                                    data-w-id="898de383-1f3c-d094-a67c-646103c156c0"
                                    className="hero-work-white-insert overflow-right"
                                >
                                    <img src="/assets/hero_mockup_2.png" loading="lazy" width="426" alt="" className="work-hero-image" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mobile-hero-images">
                    <div className="mobile-hero-img">
                        <img src="/assets/hero_mockup_1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="mobile-hero-img">
                        <img src="/assets/hero_mockup_2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                <div className="home-hero-text-box">
                    <h1 className="heading h1-l">Grow Your Business. <span className="home-underline-link">Dominate</span> Your Market.</h1>
                    <div className="text-box center-align">
                        <p className="paragraph x-large _64-opacity">Full-service digital marketing that drives real results. From SEO to paid ads, we help businesses scale with data-driven strategies and creative execution.</p>
                        <div className="spacer _24 mobile-small"></div>
                    </div>
                    <div className="hero-button-group">
                        <Link to="/contact" className="button blue w-button">Get Free Strategy</Link>
                        <a href="#services" className="button w-button">See Our Work</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
