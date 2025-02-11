'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Gallery', href: '#events' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50">
            {/* Header section with logo */}
            <div className="w-full h-16 sm:h-24 md:h-32 relative bg-white">
                <Image
                    src="/J.B.INSTITUTIE_OF_ENGINEERING&TECHNOLOGY[1].png"
                    alt="JBIET Header"
                    fill
                    className="object-cover sm:object-contain"
                    priority
                />
            </div>

            {/* Navigation bar */}
            <div className="w-full h-12 flex items-center justify-end px-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#fcfdfe] hover:text-gray-600 transition-colors p-2 rounded-lg 
                    bg-black/20 backdrop-blur-sm hover:bg-black/20 
                    shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]
                    transition-all duration-300"
                >
                    {isOpen ? (
                        <HiX className="h-8 w-8" />
                    ) : (
                        <HiMenu className="h-8 w-8" />
                    )}
                </button>
            </div>

            {/* Side Navigation Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close button at the top */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <HiX className="h-6 w-6" />
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="px-4 py-2 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg 
                            transition-colors duration-200 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay with reduced blur */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}
