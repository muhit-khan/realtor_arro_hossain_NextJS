"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../Assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.010) {
                // if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-black shadow-md z-100 transition-opacity duration-300 ${scrolled ? 'bg-opacity-90' : 'bg-opacity-50'}`}>
            <div className="container mx-auto flex items-center justify-between py-1 px-10">
                <Image src={logo} alt="AH" className="w-44" />
                <ul className="flex items-center space-x-6">
                    <li className="hover:text-amber-600 active:text-amber-500">Home</li>
                    <li className="hover:text-amber-600 active:text-amber-500">About</li>
                    <li className="hover:text-amber-600 active:text-amber-500">Team</li>
                    <li className="hover:text-amber-600 active:text-amber-500">Services</li>
                    <li className="hover:text-amber-600 active:text-amber-500">Contact</li>
                    <li>
                        <button className="bg-amber-500 font-semibold text-gray-900 py-2 px-6 rounded-full hover:bg-amber-600 active:bg-amber-500">
                            Find Properties
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
