import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-cyber-950 border-t border-cyber-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Shield className="h-6 w-6 text-neon-blue" />
                            <span className="text-lg font-bold font-mono tracking-tighter text-white">
                                CYBER<span className="text-neon-blue">SEC</span>_CLUB
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Securing the future, one byte at a time. Join the revolution in digital defense.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#home" className="hover:text-neon-blue transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-neon-blue transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-neon-blue transition-colors">Events</a></li>
                            <li><a href="#team" className="hover:text-neon-blue transition-colors">Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-neon-blue transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-neon-blue transition-colors">Learning Path</a></li>
                            <li><a href="#" className="hover:text-neon-blue transition-colors">CTF Archive</a></li>
                            <li><a href="#" className="hover:text-neon-blue transition-colors">Tools</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contact@cybersec.club</li>
                            <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Engineering Dept, Room 303</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cyber-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; 2024 CyberSec Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
