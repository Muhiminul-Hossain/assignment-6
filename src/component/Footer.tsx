import React from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-6 px-8">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={24} height={24} />
                    <span className="text-white font-bold text-sm">FITLOG</span>
                </Link>
                <p className="text-gray-500 text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;