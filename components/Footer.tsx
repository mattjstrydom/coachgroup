import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} Coach Group. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="mailto:info@coachgroup.co.za" className="hover:underline">info@coachgroup.co.za</a>
                    <a href="/community-coaching" className="hover:underline">Community Coaching</a>
                    <a href="/corporate-coaching" className="hover:underline">Corporate Coaching</a>
                    <a href="/our-team" className="hover:underline">Our Team</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;