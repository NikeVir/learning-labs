import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="min-h-[128px]   flex justify-between items-center px-4 lg:px-[140px]">
            <div className="logo" >
                <a href='/'><img src="/images/logo.svg" alt="Logo" /></a>
            </div>
            <div className="hamburger-menu">
            <img src="/images/hamburger.svg" alt="Logo" />
            </div>
        </div>
    );
};

export default Header;