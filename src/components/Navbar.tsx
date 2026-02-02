'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden' }}>
                        <Image
                            src="/logo.png"
                            alt="Z3Connect Logo"
                            fill
                            style={{ objectFit: 'contain', filter: 'invert(1)' }}
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/projects" className={styles.link}>Projects</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                    <button className={styles.ctaButton}>Request Demo</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: 'var(--header-height)',
                            left: 0,
                            width: '100%',
                            background: 'var(--bg-secondary)',
                            borderBottom: '1px solid var(--border-subtle)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            zIndex: 999
                        }}
                    >
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className={styles.link}>Home</Link>
                        <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className={styles.link}>Projects</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={styles.link}>About</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={styles.link}>Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
