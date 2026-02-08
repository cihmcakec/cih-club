import React, { useState, useEffect } from 'react';
import './OfflinePage.css';

const OfflinePage = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="offline-container">
            <div className="connection-status">
                <div className="signal-icon">
                    <div className="wave wave-1"></div>
                    <div className="wave wave-2"></div>
                    <div className="wave wave-3"></div>
                    <div className="broken-link"></div>
                </div>
            </div>

            <div className="offline-content">
                <h1 className="glitch-text" data-text="SYSTEM OFFLINE">SYSTEM OFFLINE</h1>
                <div className="status-badge">CONNECTION LOST</div>

                <p className="offline-description">
                    Unable to establish a secure link to the Cyber Intelligence Hub.
                    Please check your network connection and try again.
                </p>

                <div className="retry-box">
                    <span className="scanning-text">RECONNECTING{dots}</span>
                    <div className="scanning-bar">
                        <div className="scanning-progress"></div>
                    </div>
                </div>

                <button
                    className="reconnect-btn"
                    onClick={() => window.location.reload()}
                >
                    <span className="btn-icon"></span>
                    RETRY CONNECTION
                </button>
            </div>

            <div className="flicker-overlay"></div>
        </div>
    );
};

export default OfflinePage;
