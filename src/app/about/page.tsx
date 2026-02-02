'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './about.module.css';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Shield, Users, BarChart } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className={styles.aboutContainer}>
            <Navbar />

            <section className={styles.hero}>
                <div className="container">
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About Z3Connect
                    </motion.h1>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        We are a digital innovation agency dedicated to building high-performance solutions for businesses of all scales. From local automation tools to global SaaS platforms, we turn ideas into reality.
                    </motion.p>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Expertise</h2>
                    <div className={styles.expertiseGrid}>
                        {[
                            { title: 'SaaS Development', icon: <Globe />, desc: 'Scalable cloud-based software solutions for modern enterprises.' },
                            { title: 'Web Applications', icon: <Code />, desc: 'High-performance web apps built with Next.js, React, and modern stacks.' },
                            { title: 'POS Systems', icon: <BarChart />, desc: 'Custom billing and inventory management for retail and healthcare.' },
                            { title: 'Automation', icon: <Zap />, desc: 'Streamlining business workflows with intelligent automation tools.' },
                            { title: 'Secure Infrastructure', icon: <Shield />, desc: 'Robust security practices ensuring data integrity and safety.' },
                            { title: 'UX/UI Design', icon: <Users />, desc: 'Crafting intuitive and engaging user experiences.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
