import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="h-[128px]  flex justify-between margin items-center mx-[140px]">
            <div className="logo" >
                <a href='/'><img src="/images/logo.svg" alt="Logo" /></a>
            </div>
            <div className="hamburger-menu">
            <img src="/images/hamburger.svg" alt="Logo" />
            </div>
        </header>
    );
};

export default Header;