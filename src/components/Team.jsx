import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
    const members = [
        {
            name: "Alex Cipher",
            role: "President",
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Sarah Firewall",
            role: "Vice President",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "David Null",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Emily Packet",
            role: "Event Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="team" className="py-20 bg-cyber-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        <span className="text-neon-blue">/</span> CORE_TEAM
                    </h2>
                    <p className="text-gray-400">The minds behind the firewall.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute inset-0 bg-neon-blue/20 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                            <div className="relative bg-cyber-900 p-6 rounded-xl border border-cyber-800 hover:border-neon-blue/40 transition-colors">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-blue p-1">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <h3 className="text-lg font-bold text-white text-center">{member.name}</h3>
                                <p className="text-neon-blue text-sm text-center mb-4 font-mono">{member.role}</p>

                                <div className="flex justify-center space-x-3">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                                    <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors"><Twitter className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
