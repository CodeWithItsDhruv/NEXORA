import React from 'react';

const IndustryFocus = () => {
    const services = [
        "SEO & Local Search Optimization",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Management & Growth",
        "Content Marketing & Blogging",
        "Email Marketing Campaigns",
        "Brand Strategy & Design",
        "Website Development & Optimization"
    ];

    const industries = [
        {
            name: "Healthcare",
            bgColor: "#FFF4E8",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.18 4.05l-5.15 5.15A9 9 0 0 1 2.58 10.2" /></svg>
        },
        {
            name: "Real Estate",
            bgColor: "#E8F4FD",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8H7v8" /><path d="M9 9h1" /><path d="M9 13h1" /><path d="M9 17h1" /><path d="M14 9h1" /><path d="M14 13h1" /><path d="M14 17h1" /></svg>
        },
        {
            name: "Education",
            bgColor: "#F0E8FF",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
        },
        {
            name: "E-commerce",
            bgColor: "#E8FFF4",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
        },
        {
            name: "Finance",
            bgColor: "#ffecf8",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        },
        {
            name: "Hospitality",
            bgColor: "#fff7ed",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2h4" /><path d="M12 2v20" /><path d="M4 10h16" /><path d="M4 18h16" /><path d="M4 14h16" /></svg>
        }
    ];

    return (
        <div className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '60px' }}>

                    {/* Image Column (Left) - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-right" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '480px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/industry_focus.png" loading="lazy" alt="Digital Marketing for Multiple Industries" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Text Column (Right) */}
                    <div className="text-box" data-aos="fade-left">
                        <div className="title-tag">Industry Expertise</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Digital Growth Across Multiple Industries</h2>
                        <div className="spacer _24"></div>
                        <p className="paragraph large">
                            We work with businesses across Healthcare, Real Estate, Education, E-commerce, and more - delivering tailored digital marketing strategies that drive measurable results.
                        </p>

                        <div className="spacer _32"></div>

                        {/* Industries Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                            {industries.map((industry, index) => (
                                <div key={index} style={{
                                    padding: '12px 16px',
                                    backgroundColor: industry.bgColor || '#f8fafc',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}>
                                    <span style={{ fontSize: '20px' }}>{industry.icon}</span>
                                    <span>{industry.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Services List */}
                        <div className="service-list">
                            {services.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        backgroundColor: '#eff6ff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px',
                                        flexShrink: 0
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '16px', color: '#1e293b', fontWeight: '500' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="button w-button">Discuss Your Industry</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryFocus;
