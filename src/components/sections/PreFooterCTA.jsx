import React from 'react';

const PreFooterCTA = () => {
    return (
        <div className="section">
            <div className="container w-container">
                <div className="contact-card">
                    <img
                        src="/assets/qr%20(2).png"
                        loading="lazy"
                        alt="WhatsApp QR Code"
                        className="contact-us-ticket"
                    />
                    <div className="title-tag">Ready to Grow?</div>
                    <h2 className="heading h2">Let's Build Your Digital Presence the Right Way</h2>
                    <p className="paragraph large">
                        If you are looking for a digital marketing partner who values clarity, strategy, and honest growth, Nexora is ready to work with you.
                    </p>
                    <div className="spacer _16"></div>
                    <p className="paragraph">
                        Start with a free strategy conversation and see how digital marketing can support your real estate business goals.
                    </p>
                    <div className="spacer _24"></div>
                    <a href="https://wa.me/919904256613?text=Hi,%20I'm%20interested%20in%20a%20strategy%20session%20for%20my%20Real%20Estate%20project." target="_blank" rel="noreferrer" className="button blue w-button">Get Free Strategy Session</a>
                </div>
            </div>
        </div>
    );
};

export default PreFooterCTA;
