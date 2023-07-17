import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>CopyRight © {year} | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;