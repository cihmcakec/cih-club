import { Link } from 'react-router-dom';
import './Initiatives.css';

function Initiatives() {
    const initiativesList = [
        {
            name: "Cyber Awareness Research",
            icon: "fas fa-search-dollar",
            location: "College Campus",
            status: "In Progress",
            desc: "A comprehensive study investigating digital security awareness and hygiene among faculty members and students within the campus ecosystem.",
            btnText: "VIEW RESEARCH"
        },
        {
            name: "Hands-on Tools Workshop",
            icon: "fas fa-shield-alt",
            location: "Cyber Security Lab",
            status: "Upcoming",
            desc: "Immersive one-day training sessions focusing on industry-standard cybersecurity tools, defensive techniques, and ethical hacking methodologies.",
            btnText: "GET TOOLS LIST"
        },
        {
            name: "Secure Code Initiative",
            icon: "fas fa-code",
            location: "Digital Platform",
            status: "Planning",
            desc: "Developing a set of best practices and automated tools to help student developers write secure code from the start of their development lifecycle.",
            btnText: "LEARN MORE"
        },
        {
            name: "Youth Cyber Safety",
            icon: "fas fa-user-shield",
            location: "Local Schools",
            status: "Outreach",
            desc: "Community outreach program where our members visit local schools to educate younger students about internet safety and cyberbullying.",
            btnText: "JOIN OUTREACH"
        }
    ];

    const ongoingInitiatives = initiativesList.filter(i => i.status !== "Upcoming" && i.status !== "Planning");
    const upcomingInitiatives = initiativesList.filter(i => i.status === "Upcoming" || i.status === "Planning");

    const renderCard = (init, index) => (
        <div key={index} className={`initiative-card ${init.status === "Upcoming" ? "upcoming-special" : ""}`}>
            <div className="initiative-accent"></div>
            <div className="initiative-body">
                <div className="initiative-icon-box">
                    <i className={init.icon}></i>
                </div>
                <h3 className="initiative-name">{init.name}</h3>
                <div className="initiative-meta">
                    <div className="meta-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{init.location}</span>
                    </div>
                    <div className="meta-item status-tag" data-status={init.status}>
                        <i className="fas fa-info-circle"></i>
                        <span>{init.status}</span>
                    </div>
                </div>
                <p className="initiative-desc">{init.desc}</p>
                <button className="btn-initiative">{init.btnText}</button>
            </div>
        </div>
    );

    return (
        <div className="initiatives-page">
            <div className="initiatives-container">
                <header className="initiatives-header">
                    <h1 className="initiatives-title">Our Initiatives</h1>
                    <p className="initiatives-subtitle">
                        Driving innovation and security through research, education, and community involvement.
                    </p>
                </header>

                <div className="section-divider upcoming">
                    <span className="divider-text">UPCOMING INITIATIVES</span>
                    <div className="divider-line"></div>
                </div>
                <div className="initiatives-grid">
                    {initiativesList.map((init, index) => renderCard({ ...init, status: "Upcoming" }, index))}
                </div>

                <footer className="back-footer">
                    <Link to="/" className="btn btn-primary">
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </Link>
                </footer>
            </div>
        </div>
    );
}

export default Initiatives;
