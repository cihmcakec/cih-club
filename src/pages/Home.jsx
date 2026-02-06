import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import groupPhoto from '../assets/group_photo.jpg';
import './Home.css';

function Home() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles for background
        const particlesArray = [];
        for (let i = 0; i < 40; i++) {
            particlesArray.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 5,
            });
        }
        setParticles(particlesArray);

        // Scroll Reveal Logic
        const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', reveal);
        reveal(); // Initial check

        // Counter animation
        const animateCounters = () => {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 50;
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + (target >= 10 ? '+' : '');
                        setTimeout(updateCounter, 30);
                    } else {
                        counter.textContent = target + (target >= 10 ? '+' : '');
                    }
                };
                updateCounter();
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', reveal);
        };
    }, []);

    // Leadership Data
    const faculty = {
        name: "DR. M. PYINGKODI",
        role: "Faculty Coordinator",
        image: "/members/pyingodi.jpg",
        desc: "Associate Professor, guiding the next generation of security experts with industry-aligned mentorship."
    };

    const studentLeaders = [
        { name: "ELAMUGIL S", role: "Secretary", image: "/members/elamugil_s.jpg" },
        { name: "SENTHIL KUMAR T", role: "Additional Secretary", image: "/members/senthil_kumar_t.jpg" },
        { name: "KARTHIKEYAN P", role: "Joint Secretary", image: "/members/karthikeyan_p.jpg" }
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    {/* Animated Particles */}
                    {particles.map(particle => (
                        <div
                            key={particle.id}
                            style={{
                                position: 'absolute',
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                background: '#00f3ff',
                                borderRadius: '50%',
                                opacity: 0.4,
                                zIndex: 3,
                                animation: `float-particle ${5 + particle.delay}s infinite linear`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="hero-content">
                    <div className="hero-logo-container" style={{ position: 'relative', display: 'inline-block' }}>
                        <img src={logo} alt="Cyber Intelligence Hub" className="hero-logo" />
                        <div className="logo-glow"></div>
                    </div>
                    <h1 className="hero-title">
                        <div className="title-row top">
                            <span className="glitch" data-text="CYBER">CYBER</span>
                        </div>
                        <div className="title-row bottom">
                            <span className="glitch" data-text="INTELLIGENCE HUB">INTELLIGENCE HUB</span>
                        </div>
                        <a href="https://kongu.ac.in/mca" target="_blank" rel="noopener noreferrer" className="association-tag">
                            ASSOCIATED WITH MCA ASSOCIATION
                        </a>
                    </h1>
                    <p className="hero-subtitle">
                        Empowering the Next Generation of Cybersecurity Professionals
                    </p>
                </div>
            </section>

            {/* About Section (Simplified) */}
            <section className="about-hub-section reveal">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '80px 20px' }}>
                    <h2 className="section-title">About The Hub</h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
                        The Cyber Security Club (Hub) is a premier student-led organization dedicated to fostering excellence in cybersecurity.
                        We provide a platform for students to explore, learn, and innovate in the rapidly evolving digital landscape.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
                        Our community is built on the principles of ethical hacking, defensive security, and collaborative research.
                        From participating in global CTFs to hosting deep-dive technical workshops, we prepare our members for the frontline of digital defense.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section reveal">
                <div className="mission-grid">
                    <div className="mv-card">
                        <div className="mv-icon"><i className="fas fa-bullseye"></i></div>
                        <h3>Our Mission</h3>
                        <p>
                            To build a robust ecosystem of skilled cybersecurity professionals by providing hands-on training,
                            industry networking, and real-world project experience to our members.
                        </p>
                    </div>
                    <div className="mv-card">
                        <div className="mv-icon"><i className="fas fa-eye"></i></div>
                        <h3>Our Vision</h3>
                        <p>
                            To be recognized as a center of excellence in cybersecurity education,
                            shaping thought leaders who will secure the future of our digital world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section reveal">
                <div className="stats-grid" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="stat-item">
                        <span className="stat-number" data-target="10">0</span>
                        <span className="stat-label">Active Members</span>
                    </div>
                </div>
            </section>

            {/* Faculty Mentorship Section */}
            <section className="faculty-spotlight reveal">
                <div className="section-header">
                    <h2 className="section-title">Faculty Mentorship</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
                    <a
                        href="https://docs.google.com/document/u/0/d/e/2PACX-1vRiG8xYN5cKmBsoyOgYJLlvwq7bVRN0b8AVAkQu0SYD0YeS06OrtTHiYHTWUZS1pg/pub?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faculty-card-link"
                        style={{ textDecoration: 'none', display: 'block' }}
                    >
                        <div className="faculty-card" style={{ maxWidth: '400px', cursor: 'pointer' }}>
                            <img
                                src={faculty.image}
                                alt={faculty.name}
                                className="faculty-image"
                                onError={(e) => { e.target.src = logo; }}
                            />
                            <h4 className="faculty-name" style={{ fontSize: '1.8rem', color: '#fff', fontFamily: 'Orbitron' }}>{faculty.name}</h4>
                            <span className="faculty-role" style={{ color: '#00f3ff', textTransform: 'uppercase', letterSpacing: '2px' }}>{faculty.role}</span>
                            <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', textAlign: 'center' }}>
                                {faculty.desc}
                            </p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Leadership Spotlight */}
            <section className="leadership-preview reveal">
                <div className="section-header">
                    <h2 className="section-title">Student Leadership</h2>
                </div>
                <div className="leaders-grid">
                    {studentLeaders.map((leader, index) => (
                        <div key={index} className="leader-card">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="leader-image"
                                onError={(e) => { e.target.src = logo; }} // Fallback
                            />
                            <h3 className="leader-name">{leader.name}</h3>
                            <div className="leader-role">{leader.role}</div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/office-bearers" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                        View Full Committee <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </Link>
                </div>
            </section>

            {/* Quick Links / Explore Section */}
            <section className="explore-section reveal">
                <div className="section-header">
                    <h2 className="section-title">Explore The Hub</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="quick-links">
                    <Link to="/events" className="quick-link-card">
                        <i className="fas fa-calendar-check quick-link-icon"></i>
                        <h3 className="quick-link-title">Events & Workshops</h3>
                        <p style={{ color: '#a0a0c0', marginTop: '10px' }}>Join our latest technical sessions</p>
                    </Link>
                    <Link to="/gallery" className="quick-link-card">
                        <i className="fas fa-images quick-link-icon"></i>
                        <h3 className="quick-link-title">Gallery</h3>
                        <p style={{ color: '#a0a0c0', marginTop: '10px' }}>Highlights from past activities</p>
                    </Link>
                    <Link to="/initiatives" className="quick-link-card">
                        <i className="fas fa-lightbulb quick-link-icon"></i>
                        <h3 className="quick-link-title">Initiatives</h3>
                        <p style={{ color: '#a0a0c0', marginTop: '10px' }}>Our ongoing cybersecurity projects</p>
                    </Link>
                </div>
            </section>

            {/* Group Photo Section */}
            <section className="group-photo-section reveal">
                <div className="section-header">
                    <h2 className="section-title">Club Memories</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="group-photo-container">
                        <img
                            src={groupPhoto}
                            alt="Cyber Intelligence Hub Group"
                            className="group-photo"
                            onError={(e) => { e.target.src = logo; }}
                        />
                        <div className="photo-overlay">
                            <p>Inauguration Ceremony - 2025-2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
