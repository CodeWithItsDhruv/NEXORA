import React from 'react';
import PageHero from '../components/common/PageHero';
import PreFooterCTA from '../components/sections/PreFooterCTA';
import SEO from '../components/common/SEO';

const Work = () => {
    const projects = [
        {
            category: "SEO",
            title: "SaaS Organic Growth Architecture",
            result: "Scalable Keyword Dominance Strategy",
            desc: "Technical Audit & Content Silo Framework",
            image: "/assets/work_seo.png"
        },
        {
            category: "Paid Ads",
            title: "High-Ticket Lead Acquisition",
            result: "Conversion-Focused Funnel Optimization",
            desc: "Meta & Google Ads Integration",
            image: "/assets/work_ads.png"
        },
        {
            category: "Social Media",
            title: "Brand Authority & Engagement",
            result: "Community-Driven Content Strategy",
            desc: "Visual Identity & Narrative Building",
            image: "/assets/work_social.png"
        },
        {
            category: "Web Design",
            title: "User-Centric Digital Experience",
            result: "Frictionless UX/UI Interface Design",
            desc: "Mobile-First Responsive Architecture",
            image: "/assets/work_web.png"
        },
        {
            category: "Content",
            title: "Thought Leadership Ecosystem",
            result: "Authority Building & Lead Nurturing",
            desc: "Blog, Email & Whitepaper Strategy",
            image: "/assets/work_content.png"
        },
        {
            category: "Branding",
            title: "Corporate Identity System",
            result: "Cohesive Cross-Channel Visual Language",
            desc: "Logo, Typography & Asset Guidelines",
            image: "/assets/work_branding.png"
        }
    ];

    return (
        <div>
            <PageHero
                title="Our Work"
                subtitle="Strategic solutions designed for digital growth and market leadership."
                breadcrumb="Home / Company / Work"
            />
            <SEO
                title="Our Work | Nexora Digital Marketing"
                description="Explore our portfolio of digital marketing strategies and success stories. See how we help businesses grow."
            />

            <div className="section light-grey">
                <div className="container w-container">

                    <div className="text-box center-align" style={{ maxWidth: '800px', margin: '0 auto 60px auto', textAlign: 'center' }}>
                        <p className="paragraph" style={{ fontStyle: 'italic', color: '#64748b' }}>
                            We’re currently working with early-stage brands and local businesses. Our first case studies and results will be published soon.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                        {projects.map((p, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="work-card" style={{
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'default'
                            }}>
                                <div style={{
                                    height: '240px',
                                    backgroundColor: '#f8fafc',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        backgroundColor: '#eff6ff',
                                        color: '#3b82f6',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        marginBottom: '16px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {p.category}
                                    </div>
                                    <h3 className="heading h4" style={{ marginBottom: '8px', fontSize: '20px' }}>{p.title}</h3>
                                    <div style={{ fontSize: '15px', color: '#64748b', marginBottom: '16px', lineHeight: '1.5' }}>
                                        {p.result}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingTop: '16px',
                                        borderTop: '1px solid #f1f5f9',
                                        fontSize: '14px',
                                        color: '#94a3b8',
                                        fontWeight: '500'
                                    }}>
                                        <span style={{ marginRight: '8px' }}>⚡</span> {p.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PreFooterCTA />
        </div>
    );
};

export default Work;
