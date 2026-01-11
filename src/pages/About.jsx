import React from 'react';
import PageHero from '../components/common/PageHero';
import Founder from '../components/sections/Founder';
import SEO from '../components/common/SEO';
import Values from '../components/sections/Values';
import Trust from '../components/sections/Trust';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const About = () => {
    return (
        <div>
            <PageHero
                title="About Nexora"
                subtitle="We are a new breed of digital agency. Focused on transparency, built for speed, and obsessed with your growth."
                breadcrumb="Home / Company / About"
            />
            <SEO
                title="About Us | Nexora Digital Agency"
                description="Learn about Nexora's mission to help businesses in Vadodara and beyond grow through data-driven digital marketing."
            />

            <Founder />
            <Values />
            <Trust />

            <PreFooterCTA />
        </div>
    );
};

export default About;
