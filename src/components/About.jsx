import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Users, Cpu } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Target className="w-8 h-8 text-neon-blue" />,
            title: "Ethical Hacking",
            description: "Hands-on workshops on penetration testing and vulnerability assessment."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-neon-blue" />,
            title: "Defense Strategies",
            description: "Learn how to secure networks and systems against real-world threats."
        },
        {
            icon: <Users className="w-8 h-8 text-neon-blue" />,
            title: "Community",
            description: "Connect with like-minded security enthusiasts and industry experts."
        },
        {
            icon: <Cpu className="w-8 h-8 text-neon-blue" />,
            title: "CTF Competitions",
            description: "Participate in Capture The Flag events to test your skills."
        }
    ];

    return (
        <section id="about" className="py-20 bg-cyber-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
                        <span className="text-neon-blue">/</span> ABOUT_US
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We are a community driven by curiosity and committed to security. Our mission is to empower the next generation of cyber defenders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-cyber-950 border border-cyber-800 rounded-xl hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] group"
                        >
                            <div className="w-14 h-14 bg-cyber-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
