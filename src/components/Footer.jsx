import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={logo} alt="Cyber Intelligence Hub" />
                            <h3>Cyber Intelligence Hub</h3>
                        </div>
                        <p className="footer-description">
                            Empowering the next generation of cybersecurity professionals through hands-on learning and innovation.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/office-bearers">Office Bearers</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/initiatives">Initiatives</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li><i className="fas fa-envelope"></i> cih.mca.kec@gmail.com</li>
                            <li><i className="fas fa-phone"></i> +91 883 826 2412</li>
                            <li><i className="fas fa-phone"></i> +91 95667 23397</li>
                            <li><i className="fas fa-map-marker-alt"></i> Kongu Engineering College,<br />Perundurai, Erode,<br />Tamil Nadu 638060</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/cih.mca.kec/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/cihmcakec" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="http://www.youtube.com/@CYBERINTELLIGENCEHUH_KEC" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Cyber Intelligence Hub. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
