import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
    const events = [
        {
            title: "Cyber Defense CTF 2024",
            date: "March 15, 2024",
            time: "10:00 AM - 4:00 PM",
            location: "Tech Hub, Room 404",
            category: "Competition",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Intro to Network Security",
            date: "March 22, 2024",
            time: "2:00 PM - 4:00 PM",
            location: "Virtual (Zoom)",
            category: "Workshop",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Guest Speaker: Black Hat",
            date: "April 05, 2024",
            time: "5:00 PM - 7:00 PM",
            location: "Main Auditorium",
            category: "Seminar",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="events" className="py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyber-900/10 skew-x-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2">
                            <span className="text-neon-blue">/</span> UPCOMING_EVENTS
                        </h2>
                        <p className="text-gray-400">Join us in our next operations.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-neon-blue hover:text-white transition-colors">
                        View All Protocol <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-cyber-900/50 border border-cyber-800 rounded-xl overflow-hidden hover:border-neon-blue/30 transition-all hover:-translate-y-1 group">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-cyber-950/80 backdrop-blur text-neon-blue text-xs font-bold px-3 py-1 rounded-full border border-neon-blue/20">
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{event.title}</h3>

                                <div className="space-y-3 text-sm text-gray-400">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-3 text-neon-blue" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-3 text-neon-blue" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-3 text-neon-blue" />
                                        {event.location}
                                    </div>
                                </div>

                                <button className="w-full mt-6 bg-cyber-800 hover:bg-neon-blue hover:text-black py-2 rounded-lg text-sm font-medium transition-all duration-300">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
