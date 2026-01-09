import React from 'react';
import PageHero from '../../components/common/PageHero';
import PreFooterCTA from '../../components/sections/PreFooterCTA';

const Post6 = () => {
    return (
        <div>
            <PageHero
                title="The Importance of Social Media Marketing: Why Every Business Needs It"
                subtitle="It's not just for teenagers. Social media is where business happens."
                breadcrumb="Home / Blog / Social"
            />

            <div className="section">
                <div className="container w-container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#334155' }}>
                        <p style={{ marginBottom: '30px' }}>
                            Social media isn't optional anymore. It's where your customers spend their time, discover brands, and make purchase decisions. If you aren't part of the conversation, you are invisible.
                        </p>

                        <h2 className="heading h3" style={{ marginTop: '40px', marginBottom: '20px' }}>1. Building a Community</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Social media allows you to build a loyal community around your brand. It turns customers into advocates. Engaging with your audience through comments, polls, and live sessions creates a human connection.
                        </p>

                        <h2 className="heading h3" style={{ marginTop: '40px', marginBottom: '20px' }}>2. Brand Awareness</h2>
                        <p style={{ marginBottom: '20px' }}>
                            With billions of active users, platforms like Instagram, LinkedIn, and TikTok offer unprecedented reach. Consistent posting keeps your brand top-of-mind, so when a customer is ready to buy, they think of you first.
                        </p>

                        <h2 className="heading h3" style={{ marginTop: '40px', marginBottom: '20px' }}>3. Social Commerce</h2>
                        <p style={{ marginBottom: '20px' }}>
                            The gap between discovery and purchase is shrinking. Features like Instagram Shop allow users to buy directly from your feed. It minimizes friction and maximizes sales.
                        </p>

                        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: '#eff6ff', borderRadius: '12px' }}>
                            <h3 className="heading h4">Key Takeaway</h3>
                            <p style={{ marginBottom: '0' }}>Don't treat social media as a billboard. Treat it as a cocktail party. Listen, engage, and provide value first.</p>
                        </div>
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default Post6;
