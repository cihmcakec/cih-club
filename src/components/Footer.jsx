import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            <div className="footer-scanline"></div>

            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo-container">
                            <img src={logo} alt="Cyber Intelligence Hub" className="footer-logo-img" />
                            <div className="logo-glow"></div>
                        </div>
                        <div className="footer-brand-text">
                            <h3>Cyber Intelligence Hub</h3>
                            <p>KEC MCA Cybersecurity Club</p>
                        </div>
                    </div>
                    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
                        <i className="fas fa-chevron-up"></i>
                        <span>TOP</span>
                    </button>
                </div>

                <div className="footer-grid">
                    <div className="footer-section">
                        <h4 className="footer-heading"><i className="fas fa-info-circle"></i> Mission</h4>
                        <p className="footer-description">
                            Empowering the next generation of cybersecurity professionals through hands-on learning,
                            innovation, and a community-driven approach to digital security.
                        </p>
                        <div className="footer-status">
                            <span className="status-dot"></span>
                            <span className="status-text">System Active: 2026_CIH_SECURED</span>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading"><i className="fas fa-network-wired"></i> Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/"><i className="fas fa-caret-right"></i> Home</Link></li>
                            <li><Link to="/office-bearers"><i className="fas fa-caret-right"></i> Office Bearers</Link></li>
                            <li><Link to="/gallery"><i className="fas fa-caret-right"></i> Gallery</Link></li>
                            <li><Link to="/events"><i className="fas fa-caret-right"></i> Events</Link></li>
                            <li><Link to="/initiatives"><i className="fas fa-caret-right"></i> Initiatives</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading"><i className="fas fa-id-card"></i> Contact</h4>
                        <ul className="footer-contact">
                            <li><i className="fas fa-envelope"></i> <span>cyberintelligencehubkec@gmail.com</span></li>
                            <li><i className="fas fa-phone-alt"></i> <span>+91 88382 62412</span></li>
                            <li><i className="fas fa-map-marker-alt"></i> <span>Kongu Engineering College, Perundurai</span></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading"><i className="fas fa-share-alt"></i> Connect</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/cih.mca.kec/" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/cihmcakec" className="social-link github" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="http://www.youtube.com/@CYBERINTELLIGENCEHUH_KEC" className="social-link youtube" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2026 CIH. All rights reserved.</p>
                    <div className="footer-legal">
                        <span>Secured by KEC MCA</span>
                        <span className="separator">|</span>
                        <span>v2.0.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
