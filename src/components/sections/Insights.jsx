import React from 'react';

const Insights = () => {
    return (
        <div className="section">
            <div className="container w-container">
                <div className="text-box _500px">
                    <div className="title-tag">Our Blog</div>
                    <h2 className="heading h1">Latest Insights</h2>
                    <div className="spacer _48"></div>
                </div>
                <div className="w-dyn-list">
                    <div role="list" className="insights-grid w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                            <a href="/blog/ai-campaign-strategy" className="news-block w-inline-block">
                                <div className="insight-thumbnail"><img alt="AI in Digital Marketing" loading="lazy" width="808" src="/assets/blog_ai_marketing.png"
                                    className="image-cover" /></div>
                                <div className="news-info">
                                    <div className="thumbnail-project-tag-link">
                                        <div>Branding</div>
                                    </div>
                                    <div>Today</div>
                                </div>
                                <h3 className="paragraph x-large">How AI is Transforming Digital Marketing in 2026</h3>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/blog/seo-google-updates" className="news-block w-inline-block">
                                <div className="insight-thumbnail"><img alt="SEO Optimization" loading="lazy" width="808" src="/assets/blog_seo_2026.png"
                                    className="image-cover" /></div>
                                <div className="news-info">
                                    <div className="thumbnail-project-tag-link">
                                        <div>Marketing</div>
                                    </div>
                                    <div>Yesterday</div>
                                </div>
                                <h3 className="paragraph x-large">SEO Best Practices for 2026: Staying Ahead of Google</h3>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/blog/content-creation-branding" className="news-block w-inline-block">
                                <div className="insight-thumbnail"><img alt="Content Strategy" loading="lazy" width="808" src="/assets/blog_content_planning.png"
                                    className="image-cover" /></div>
                                <div className="news-info">
                                    <div className="thumbnail-project-tag-link">
                                        <div>Strategy</div>
                                    </div>
                                    <div>Last Week</div>
                                </div>
                                <h3 className="paragraph x-large">Content Marketing Strategy: Building Authority and Trust</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
