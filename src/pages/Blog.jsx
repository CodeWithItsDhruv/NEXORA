import React from 'react';
import PageHero from '../components/common/PageHero';
import PreFooterCTA from '../components/sections/PreFooterCTA';
import SEO from '../components/common/SEO';

const Blog = () => {
    const posts = [
        {
            title: "How AI Agents Are Reshaping Campaign Strategy in 2026",
            excerpt: "Artificial Intelligence is no longer just a supporting tool in digital marketing—it has become the mainstay of modern campaigns. Discover how AI is changing the way brands plan, run, and optimize their digital presence.",
            link: "/blog/ai-campaign-strategy"
        },
        {
            title: "Content Creation & Branding: The Backbone of Modern Marketing",
            excerpt: "In today's fast-paced world, attention is what people value most. Brands compete on how they are seen and the personality they show. Learn why content creation and branding are essential.",
            link: "/blog/content-creation-branding"
        },
        {
            title: "Performance Marketing: A Results-Driven Approach to Growth",
            excerpt: "Unlike traditional marketing, performance marketing is all about real outcomes like clicks, leads, and sales. You only pay for actual results—not vanity metrics.",
            link: "/blog/performance-marketing"
        },
        {
            title: "SEO & Google Updates: The Complete Guide to Staying Ahead in 2025",
            excerpt: "SEO is evolving faster than ever. With AI-generated content and shifting user behavior, Google continues to reshape how it ranks websites. Stay ahead with this complete guide.",
            link: "/blog/seo-google-updates"
        },
        {
            title: "AI & Automation in Marketing: Redefining the Digital Landscape",
            excerpt: "The world of digital marketing is changing super fast. AI-powered marketing isn't just a choice anymore—it's the new standard. From content creation to data analysis, discover the future.",
            link: "/blog/ai-automation"
        },
        {
            title: "The Importance of Social Media Marketing: Why Every Business Needs It",
            excerpt: "Social media isn't optional anymore. It's where your customers spend their time, discover brands, and make purchase decisions. Learn how to leverage it effectively.",
            link: "/blog/social-media-importance"
        }
    ];

    return (
        <div>
            <PageHero
                title="Blog"
                subtitle="Insights, strategies, and trends in digital marketing."
                breadcrumb="Home / Blog"
            />
            <SEO
                title="Nexora Blog | Digital Marketing Insights, Trends & Strategies"
                description="Stay ahead with the latest digital marketing insights. Read our articles on SEO, AI, content strategy, and more."
            />

            <div className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container w-container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '48px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {posts.map((post, i) => (
                            <article key={i} data-aos="fade-up" data-aos-delay={i * 50} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderBottom: '1px solid #e2e8f0',
                                paddingBottom: '32px'
                            }}>
                                <h3 style={{
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    lineHeight: '1.4',
                                    marginBottom: '16px',
                                    color: 'var(--black)'
                                }}>
                                    <a href={post.link} style={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s'
                                    }} className="blog-title-link">
                                        {post.title}
                                    </a>
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#475569',
                                    marginBottom: '16px',
                                    flex: 1
                                }}>
                                    {post.excerpt}
                                </p>
                                <a href={post.link} style={{
                                    fontSize: '14px',
                                    color: 'var(--blue)',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'gap 0.2s'
                                }} className="read-more-link">
                                    Read More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default Blog;
