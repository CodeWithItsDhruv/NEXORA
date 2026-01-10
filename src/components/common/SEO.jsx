import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, keywords, ogImage, ogType = 'website' }) => {
    const siteTitle = 'Nexora - Digital Marketing Agency';
    const fullTitle = title ? `${title} | Nexora` : siteTitle;
    const metaDescription = description || "Nexora helps businesses grow with data-driven digital marketing, SEO, social media, and content strategies.";
    const metaKeywords = keywords || "digital marketing, seo, social media, content marketing, growth hacking";
    const siteUrl = window.location.origin; // Or your production URL
    const metaImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/assets/social_growth.png`; // Fallback image

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:site_name" content="Nexora" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
