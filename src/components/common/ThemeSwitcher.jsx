import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [isRoyal, setIsRoyal] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'royal-blue') {
            setIsRoyal(true);
            document.body.classList.add('theme-royal-blue');
        }
    }, []);

    const toggleTheme = () => {
        if (isRoyal) {
            document.body.classList.remove('theme-royal-blue');
            localStorage.setItem('theme', 'default');
            setIsRoyal(false);
        } else {
            document.body.classList.add('theme-royal-blue');
            localStorage.setItem('theme', 'royal-blue');
            setIsRoyal(true);
        }
    };

    return (
        <div
            onClick={toggleTheme}
            className="theme-switcher-fab"
            title="Toggle Theme"
        >
            <div className={`theme-icon ${isRoyal ? 'royal' : 'default'}`}></div>
        </div>
    );
};

export default ThemeSwitcher;
