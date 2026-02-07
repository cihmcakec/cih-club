import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onLoadingComplete }) => {
    const [percentage, setPercentage] = useState(0);
    const [status, setStatus] = useState('Initializing Core Systems');
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        const statusMessages = [
            'Establishing Secure Connection',
            'Scanning Network Perimeter',
            'Decrypting Data Streams',
            'Loading Hub Modules',
            'System Ready'
        ];

        let currentMsgIndex = 0;
        const msgInterval = setInterval(() => {
            if (currentMsgIndex < statusMessages.length - 1) {
                currentMsgIndex++;
                setStatus(statusMessages[currentMsgIndex]);
            } else {
                clearInterval(msgInterval);
            }
        }, 450);

        // After 100% and small delay, trigger exit
        const exitTimeout = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 600); // Match CSS transition duration
        }, 2500);

        return () => {
            clearInterval(timer);
            clearInterval(msgInterval);
            clearTimeout(exitTimeout);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`preloader-overlay ${isExiting ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="logo-container">
                    <div className="scanning-ring"></div>
                    <div className="scanning-ring-outer"></div>
                    <h1 className="preloader-logo">
                        CI<span className="glow">H</span>
                    </h1>
                </div>

                <div className="status-container">
                    <div className="status-text">{status}</div>
                    <div className="loading-bar-wrapper">
                        <div
                            className="loading-bar-progress"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                    <div className="percentage">{percentage}%</div>
                </div>

                <div className="glitch-elements">
                    <div className="glitch-line"></div>
                    <div className="glitch-line"></div>
                    <div className="glitch-line"></div>
                </div>
            </div>

            <div className="data-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                    }}></div>
                ))}
            </div>
        </div>
    );
};

export default Preloader;
