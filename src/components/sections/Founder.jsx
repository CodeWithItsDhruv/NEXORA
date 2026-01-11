import React from 'react';

const Founder = () => {
    return (
        <div className="section">
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '60px' }}>

                    {/* Image Column (Left) - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-right" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', maxWidth: '450px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/founder.jpeg" loading="lazy" alt="Nexora Founder" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Text Column (Right) */}
                    <div className="text-box" data-aos="fade-left">
                        <div className="title-tag">Founder & Vision</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Meet the Mind Behind Nexora</h2>
                        <div className="spacer _24"></div>
                        <p className="paragraph large">
                            Nexora was founded by Dhruv Patel, a digital marketing professional based in Vadodara, with a clear mission to help businesses achieve sustainable growth through strategic, data-driven solutions.
                        </p>
                        <div className="spacer _16"></div>
                        <p className="paragraph">
                            Specializing in SEO, performance marketing, and content strategy, Nexora bridges the gap between online visibility and real business results. We move beyond generic templates, focusing instead on deep research, audience analysis, and continuous optimization to create campaigns that truly convert.
                        </p>
                        <div className="spacer _16"></div>
                        <p className="paragraph">
                            We believe in personal attention and transparent communication. Our goal is not just short-term wins, but building a strong digital foundation that helps your business thrive in an evolving landscape.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Founder;
