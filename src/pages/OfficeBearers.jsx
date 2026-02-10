import { useEffect, useState } from 'react';
import './OfficeBearers.css';

function OfficeBearers() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles for background
        const particlesArray = [];
        for (let i = 0; i < 30; i++) {
            particlesArray.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 5,
            });
        }
        setParticles(particlesArray);

        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const cards = document.querySelectorAll('.bearer-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const officeBearers = {
        facultyCoordinator: [
            { name: "Dr. M. PYINGKODI", year: "Associate Professor", image: "pyingodi.jpg" }
        ],
        secretaries: [
            { name: "ELAMUGIL S", year: "II MCA", image: "elamugil_s.jpg" }
        ],
        additionalSecretaries: [
            { name: "SENTHIL KUMAR T", year: "II MCA", image: "senthil_kumar_t.jpg" },
            { name: "SUBASH R", year: "I MCA", image: "subash_r.jpg" },
            { name: "LAKSHITHA M G", year: "I MCA", image: "lakshitha_m_g.jpg" }
        ],
        jointSecretaries: [
            { name: "KARTHIKEYAN P", year: "II MCA", image: "karthikeyan_p.jpg" },
            { name: "AISHWARAYA R", year: "I MCA", image: "aishwaraya_r.jpg" },
            { name: "DHUSYANTH GHAGEN SINGH M", year: "I MCA", image: "dhusyanth_ghagen_singh_m.jpg" }
        ],
        members: [
            { name: "ABINAYA S", year: "I MCA", image: "abinaya_s.jpg" },
            { name: "ABIRADHIE", year: "I MCA", image: "abiradhie.jpg" },
            { name: "KABISA P", year: "I MCA", image: "kabisa_p.jpg" },
            { name: "KIRUTHIGA N T", year: "I MCA", image: "kiruthiga_n_t.jpg" },
            { name: "LOGITH S", year: "I MCA", image: "logith_s.jpg" },
            { name: "OVIYA R", year: "I MCA", image: "oviya_r.jpg" },
            { name: "PAVITRA S", year: "I MCA", image: "pavitra_s.jpg" },
            { name: "RAJA G", year: "I MCA", image: "raja_g.jpg" }
        ]
    };

    const renderBearerCard = (bearer, index, icon) => {
        const [imageError, setImageError] = useState(false);
        const imagePath = `/members/${bearer.image}`;

        return (
            <div className="bearer-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-glow"></div>
                <div className="bearer-avatar">
                    {!imageError ? (
                        <img
                            src={imagePath}
                            alt={bearer.name}
                            onError={() => setImageError(true)}
                            className="member-photo"
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            style={{ userSelect: 'none', WebkitUserDrag: 'none' }}
                        />
                    ) : (
                        <div className="bearer-icon">
                            <i className={icon}></i>
                        </div>
                    )}
                </div>
                <div className="bearer-info">
                    <h3 className="bearer-name">{bearer.name}</h3>
                    <p className="bearer-year">{bearer.year}</p>
                </div>
                <div className="card-corner top-left"></div>
                <div className="card-corner top-right"></div>
                <div className="card-corner bottom-left"></div>
                <div className="card-corner bottom-right"></div>
            </div>
        );
    };

    return (
        <div className="office-bearers-page">
            {/* Background Elements */}
            <div className="ob-background">
                <div className="cyber-grid"></div>
                <div className="particles">
                    {particles.map(particle => (
                        <div
                            key={particle.id}
                            className="particle"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                animationDelay: `${particle.delay}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Header */}
            <section className="ob-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="page-title">
                            <span className="glitch" data-text="Office Bearers">Office Bearers</span>
                        </h1>
                        <p className="page-subtitle">
                            Meet the dedicated team leading our cybersecurity initiatives
                        </p>
                        <div className="title-underline"></div>
                    </div>
                </div>
            </section>

            {/* Faculty Coordinator Section */}
            <section className="bearers-section faculty-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <h2 className="section-title">Faculty Coordinator</h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="bearers-grid single">
                        <a
                            href="https://docs.google.com/document/u/0/d/e/2PACX-1vRiG8xYN5cKmBsoyOgYJLlvwq7bVRN0b8AVAkQu0SYD0YeS06OrtTHiYHTWUZS1pg/pub?pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}
                        >
                            {officeBearers.facultyCoordinator.map((bearer, index) =>
                                renderBearerCard(bearer, index, "fas fa-user-tie")
                            )}
                        </a>
                    </div>
                </div>
            </section>

            {/* Secretaries Section */}
            <section className="bearers-section secretaries-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <i className="fas fa-crown"></i>
                        </div>
                        <h2 className="section-title">Secretaries</h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="bearers-grid single">
                        {officeBearers.secretaries.map((bearer, index) =>
                            renderBearerCard(bearer, index, "fas fa-user-shield")
                        )}
                    </div>
                </div>
            </section>

            {/* Additional Secretaries Section */}
            <section className="bearers-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <i className="fas fa-star"></i>
                        </div>
                        <h2 className="section-title">Additional Secretaries</h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="bearers-grid">
                        {officeBearers.additionalSecretaries.map((bearer, index) =>
                            renderBearerCard(bearer, index, "fas fa-user-tie")
                        )}
                    </div>
                </div>
            </section>

            {/* Joint Secretaries Section */}
            <section className="bearers-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <i className="fas fa-users-cog"></i>
                        </div>
                        <h2 className="section-title">Joint Secretaries</h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="bearers-grid">
                        {officeBearers.jointSecretaries.map((bearer, index) =>
                            renderBearerCard(bearer, index, "fas fa-user-graduate")
                        )}
                    </div>
                </div>
            </section>

            {/* Members Section */}
            <section className="bearers-section members-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <i className="fas fa-users"></i>
                        </div>
                        <h2 className="section-title">Members</h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="bearers-grid members">
                        {officeBearers.members.map((bearer, index) =>
                            renderBearerCard(bearer, index, "fas fa-user")
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OfficeBearers;
