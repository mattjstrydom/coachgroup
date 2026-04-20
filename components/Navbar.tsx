import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in-out shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-white">
          <Link href="/">Coach Group</Link>
        </div>
        <ul className="flex space-x-8 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/community-coaching">Community Coaching</Link>
          </li>
          <li>
            <Link href="/corporate-coaching">Corporate Coaching</Link>
          </li>
          <li>
            <Link href="/our-team">Our Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <Link href="/contact" className="bg-gold text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;