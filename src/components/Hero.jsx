import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lock, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 cyber-grid z-0"></div>

            {/* Gradient Blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-600/20 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-cyber-900/50 backdrop-blur-sm border border-cyber-700 rounded-full px-4 py-1.5 mb-8"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-blue"></span>
                    </span>
                    <span className="text-neon-blue text-sm font-mono">System Secure. Ready for injection.</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-mono"
                >
                    <span className="block text-white mb-2">DEFEND THE</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-cyber-400 neon-text">
                        DIGITAL FRONTIER
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                >
                    Join the elite community of cybersecurity enthusiasts. Learn ethical hacking, participate in CTFs, and build the future of digital defense.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <a
                        href="#join"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-neon-blue rounded-md overflow-hidden transition-all hover:bg-white hover:scale-105"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <Terminal className="w-5 h-5 mr-2" />
                        Initialize Access
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-neon-blue border border-neon-blue rounded-md hover:bg-neon-blue/10 transition-all"
                    >
                        Explore Data
                        <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
