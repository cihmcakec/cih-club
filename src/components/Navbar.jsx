import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import kecLogo from '../assets/kec_logo.jpg';
import './Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="https://kongu.ac.in/" target="_blank" rel="noopener noreferrer" className="nav-brand">
                    <div className="college-brand">
                        <img src={kecLogo} alt="KEC Logo" className="college-main-logo" />
                        <span className="college-name">Kongu Engineering College</span>
                    </div>
                </a>
                <div
                    className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    id="navToggle"
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
                    <li>
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/office-bearers"
                            className={`nav-link ${isActive('/office-bearers') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Office Bearers
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className={`nav-link ${isActive('/events') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Events
                            <span className="nav-indicator"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/initiatives"
                            className={`nav-link ${isActive('/initiatives') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Initiatives
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
