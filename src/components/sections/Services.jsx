import React from 'react';

const Services = () => {
    return (
        <div id="services" className="section" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
            <div className="container w-container">
                <div className="text-box center-align" data-aos="fade-down" style={{ maxWidth: '800px', margin: '0 auto 60px auto', textAlign: 'center' }}>
                    <div className="title-tag">Our Services</div>
                    <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Digital Solutions Designed To Grow</h2>
                    <p className="paragraph large" style={{ marginTop: '16px', color: '#64748b' }}>
                        Professional strategies tailored to build your brand and drive real business results.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {/* Service 1: SEO Optimization */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="100">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>SEO Optimization</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Rank higher on Google with technical SEO, content optimization, and link building strategies that drive organic traffic.</p>
                    </div>

                    {/* Service 2: Paid Advertising */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="200">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Paid Advertising (PPC)</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Google Ads, Facebook Ads, and LinkedIn campaigns that maximize ROI with laser-targeted audience reach.</p>
                    </div>

                    {/* Service 3: Social Media Marketing */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="300">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Social Media Marketing</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Build your brand presence on Instagram, LinkedIn, and Facebook with engaging content and community management.</p>
                    </div>

                    {/* Service 4: Content Marketing */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="400">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Content Marketing</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Blog articles, video scripts, and infographics that educate, engage, and convert your audience.</p>
                    </div>

                    {/* Service 5: Web Development */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="500">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Web Development</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>High-converting websites and landing pages built with modern technologies and optimized for performance.</p>
                    </div>

                    {/* Service 6: Analytics & Reporting */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="600">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Analytics & Reporting</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Data-driven insights with detailed reporting dashboards to track performance and optimize campaigns.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '40px 32px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    cursor: 'default'
};

const iconContainerStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
};

export default Services;
