import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

function Events() {
    const calculateTimeLeft = () => {
        const difference = +new Date('2026-03-05T09:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const orion_event = {
        name: "ORION 2K26",
        location: "C K PRAHALAD SEMINAR HALL",
        date: "MARCH 5, 2026",
        desc: "Annual Technical Symposium hosted by MCA Association. A massive celebration of technical innovation and creative excellence.",
        link: "https://orion-2k26.netlify.app/"
    };

    const other_events = [
        {
            name: "Hands-on Tools Workshop",
            icon: "fas fa-tools",
            location: "Cyber Security Lab",
            date: "One Day Session",
            desc: "Immersive one-day workshop on essential cybersecurity tools and technical defense."
        },
        {
            name: "Cyber Awareness Research",
            icon: "fas fa-search",
            location: "Campus-wide",
            date: "Ongoing Survey",
            desc: "Comprehensive research initiative investigating digital security awareness among faculty and students."
        }
    ];

    return (
        <div className="events-container">
            {/* Main Header */}
            <div className="event-main-card">
                <div className="event-college-info">
                    <h2>KONGU ENGINEERING COLLEGE</h2>
                    <div className="event-association">ASSOCIATION OF COMPUTER APPLICATIONS</div>
                </div>

                {/* Orion Section - Now Matching the new Card Style */}
                <div className="featured-event-header">
                    <h2 className="section-title-small" style={{ color: '#ff00ff', fontFamily: 'Orbitron' }}>Featured Event</h2>
                    <div className="section-line-small" style={{ background: '#00f3ff' }}></div>
                </div>

                <div className="discovery-grid">
                    <div className="event-detail-card featured-orion">
                        <div className="accent-bar" style={{ background: 'linear-gradient(to bottom, #00f3ff, #ff00ff)' }}></div>
                        <div className="card-body">
                            <h3 className="event-card-title" style={{ color: '#fff', fontSize: '2rem' }}>{orion_event.name}</h3>
                            <div className="card-info-row">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{orion_event.location}</span>
                            </div>
                            <div className="card-info-row">
                                <i className="far fa-calendar-alt"></i>
                                <span>{orion_event.date}</span>
                            </div>
                            <p className="event-card-desc">"{orion_event.desc}"</p>
                            <a href={orion_event.link} target="_blank" rel="noopener noreferrer" className="btn-register-small" style={{ background: '#00f3ff', color: '#000', textDecoration: 'none' }}>
                                VIEW EVENT SITE <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="countdown-box">
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.days || '00'}</span>
                        <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.hours || '00'}</span>
                        <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.minutes || '00'}</span>
                        <span className="countdown-label">Mins</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.seconds || '00'}</span>
                        <span className="countdown-label">Secs</span>
                    </div>
                </div>

                {/* Other Initiatives Section */}
                <div className="other-events-header" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 className="section-title-small" style={{ color: '#00f3ff', fontFamily: 'Orbitron', fontSize: '1.8rem' }}>Upcoming Events</h2>
                    <div className="section-line-small" style={{ height: '2px', width: '100px', background: '#ff00ff', margin: '15px auto' }}></div>
                </div>

                <div className="event-details-grid">
                    {other_events.map((event, index) => (
                        <div key={index} className="event-detail-card">
                            <div className="accent-bar"></div>
                            <div className="card-body">
                                <h3 className="event-card-title">{event.name}</h3>
                                <div className="card-info-row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{event.location}</span>
                                </div>
                                <div className="card-info-row">
                                    <i className="far fa-calendar-alt"></i>
                                    <span>{event.date}</span>
                                </div>
                                <p className="event-card-desc">"{event.desc}"</p>
                                <button className="btn-register-small">PARTICIPATE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                        <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Events;
