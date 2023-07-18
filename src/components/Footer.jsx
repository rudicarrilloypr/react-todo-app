import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {year} All Rights Reserved</p>
        </footer>
    );
}
