import { Link } from 'react-router-dom';
import groupPhoto from '../assets/group_photo.jpg';
import './Gallery.css';

function Gallery() {
    const galleryItems = [
        {
            id: 1,
            title: "Inauguration Ceremony - 2025-2026",
            image: groupPhoto,
            category: "Events"
        }
        // Add more items here as needed
    ];

    return (
        <div className="gallery-page">
            <div className="gallery-background"></div>

            <div className="gallery-container">
                <div className="gallery-header">
                    <h1 className="gallery-title page-title">Gallery</h1>
                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
                        margin: '0 auto'
                    }}></div>
                    <p style={{ color: '#a0a0c0', marginTop: '20px', fontSize: '1.2rem' }}>
                        Capturing the moments of our cybersecurity journey
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map(item => (
                        <div key={item.id} className="gallery-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="gallery-img"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"; }}
                            />
                            <div className="gallery-overlay">
                                <h3 className="gallery-item-title">{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/" className="btn btn-primary" style={{
                        padding: '12px 30px',
                        background: 'rgba(0, 243, 255, 0.1)',
                        color: '#00f3ff',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        border: '1px solid #00f3ff',
                        fontFamily: 'Orbitron',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                    }}>
                        <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
