import React from 'react';
import { Link } from 'react-router-dom';

const Plans = () => {
    const plans = [
        {
            name: "Basic Package",
            price: "₹9,999",
            period: "/month",
            description: "Essential social media presence for small businesses.",
            features: [
                "Account setup and optimization for 2 platforms",
                "8-10 posts / month (graphics and captions included)",
                "Monthly performance tracking",
                "Basic engagement management",
                "Page Optimization"
            ],
            buttonText: "Start Basic",
            highlight: false
        },
        {
            name: "Standard Package",
            price: "₹24,999",
            period: "/month",
            description: "Growth-focused management with boosted reach.",
            features: [
                "Management of up to 3-4 platforms",
                "12-16 posts per month with boosted ad campaigns",
                "Reels / Short videos (2-4)",
                "Basic Ad Management (Client Ad budget Extra)",
                "Lead Generation Setup (Basic)",
                "Advanced analytics and growth insights"
            ],
            buttonText: "Go Standard",
            highlight: false
        },
        {
            name: "Premium Package",
            price: "₹44,999",
            period: "/month",
            description: "Comprehensive management for serious brand scaling.",
            features: [
                "End-to-end social media management for 6 platforms",
                "30+ posts / month with targeted ad campaigns",
                "Influencer collaboration and outreach Reels",
                "Facebook & Instagram Ads (Management)",
                "Lead Funnel Setup",
                "WhatsApp / CRM Integration (Basic)",
                "24/7 account monitoring and customer support"
            ],
            buttonText: "Choose Premium",
            highlight: true
        },
        {
            name: "Enterprise / Custom",
            price: "₹59,999",
            period: "/month",
            description: "Full-scale dedicated digital partnership.",
            features: [
                "End-to-end social media management for All platforms",
                "30+ posts / month with targeted ad campaigns",
                "Paid Ads (Meta Google)",
                "Influencer Marketing collaboration strategy",
                "Website / Landing Page Optimization",
                "Dedicated Account Manager",
                "Advance Analytics & Reporting"
            ],
            buttonText: "Contact Sales",
            highlight: false
        }
    ];

    return (
        <div id="plans" className="section" style={{ padding: '100px 5%', backgroundColor: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}> {/* Increased maxWidth for 4 cols */}
                <div className="text-box" style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px auto' }}>
                    <div className="title-tag" style={{ color: '#3b82f6', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontSize: '14px' }}>Plans & Pricing</div>
                    <h2 className="heading h1" style={{ fontFamily: '"Domine", serif', fontSize: '48px', color: '#10212e', margin: '0 0 20px 0', lineHeight: '1.2' }}>
                        Scalable Solutions For Every Stage
                    </h2>
                    <p className="paragraph" style={{ maxWidth: '600px', margin: '0 auto', color: '#64748b', fontSize: '18px', lineHeight: '1.6' }}>
                        From establishing a foundation to dominating the market, we have a plan for you.
                    </p>
                </div>

                <div className="plans-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Allows 4 cols on wide screens
                    gap: '20px',
                    alignItems: 'stretch'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} className={`plan-card ${plan.highlight ? 'featured' : ''}`} style={{
                            backgroundColor: plan.highlight ? '#10212e' : '#f8fafc',
                            color: plan.highlight ? '#ffffff' : '#10212e',
                            padding: '30px', // Slightly less padding for fit
                            borderRadius: '12px',
                            border: plan.highlight ? 'none' : '1px solid #e2e8f0',
                            boxShadow: plan.highlight ? '0 20px 40px rgba(16, 33, 46, 0.15)' : 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                            zIndex: plan.highlight ? 2 : 1
                        }}>
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#3b82f6',
                                    color: 'white',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap'
                                }}>
                                    Best Value
                                </div>
                            )}

                            <h3 style={{ fontFamily: '"Domine", serif', fontSize: '22px', marginBottom: '10px' }}>{plan.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '15px' }}>
                                <span style={{ fontSize: '36px', fontWeight: '700' }}>{plan.price}</span>
                                <span style={{ fontSize: '14px', opacity: 0.7, marginLeft: '5px' }}>{plan.period}</span>
                            </div>
                            <p style={{ marginBottom: '25px', opacity: 0.8, lineHeight: '1.5', fontSize: '14px', minHeight: '42px' }}>{plan.description}</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0', flex: '1' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '18px' }}>
                                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke={plan.highlight ? "#3b82f6" : "#10212e"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span style={{ fontSize: '14px' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {index < 2 ? (
                                <Link to="/contact"
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        padding: '12px 20px',
                                        borderRadius: '6px',
                                        backgroundColor: plan.highlight ? '#3b82f6' : '#10212e',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'background-color 0.2s',
                                        marginTop: 'auto'
                                    }}>
                                    {plan.buttonText}
                                </Link>
                            ) : (
                                <a href={`https://wa.me/919904256613?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20for%20${encodeURIComponent(plan.price)}.`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        padding: '12px 20px',
                                        borderRadius: '6px',
                                        backgroundColor: plan.highlight ? '#3b82f6' : '#10212e',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'background-color 0.2s',
                                        marginTop: 'auto'
                                    }}>
                                    {plan.buttonText}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <p style={{ color: '#64748b' }}>Need something specific? <Link to="/contact" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}>Talk to an expert.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Plans;
