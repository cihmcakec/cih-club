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
                <h1 className="glitch-text" data-text="CONNECTION SEVERED">CONNECTION SEVERED</h1>
                <div className="status-badge">OUTSIDE PERIMETER</div>

                <p className="offline-description">
                    The secure uplink to the **Cyber Intelligence Hub** has been terminated.
                    Your neural link is currently operating in offline mode.
                </p>

                <div className="retry-box">
                    <span className="scanning-text">RESCANNING FOR FREQUENCIES{dots}</span>
                    <div className="scanning-bar">
                        <div className="scanning-progress"></div>
                    </div>
                </div>

                <button
                    className="reconnect-btn"
                    onClick={() => window.location.reload()}
                >
                    <span className="btn-icon">⚡</span>
                    ATTEMPT RE-LOGIN
                </button>

                <div className="error-logs">
                    <div className="log-line">ERR_UL_SIGNAL_LOST_0x404</div>
                    <div className="log-line">Pinging gateway 1.1.1.1... Timed Out</div>
                    <div className="log-line">Network Adapter: Status Unknown</div>
                </div>
            </div>

            <div className="flicker-overlay"></div>
        </div>
    );
};

export default OfflinePage;
