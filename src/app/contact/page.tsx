'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './contact.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className={styles.contactContainer}>
            <Navbar />

            <section className={styles.content}>
                <div className={`container ${styles.grid}`}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1>Let's Build Something Amazing</h1>
                        <p>Ready to start your project? Contact us today for a free consultation and demo.</p>

                        <div className={styles.contactMethods}>
                            <a href="mailto:hello@z3connect.com" className={styles.method}>
                                <Mail color="var(--accent-cyan)" /> hello@z3connect.com
                            </a>
                            <a href="tel:+919876543210" className={styles.method}>
                                <Phone color="var(--accent-cyan)" /> +91 98765 43210
                            </a>
                            <div className={styles.method}>
                                <MapPin color="var(--accent-cyan)" /> Tamil Nadu, India
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formBox}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Name</label>
                                <input type="text" className={styles.input} placeholder="John Doe" />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email</label>
                                <input type="email" className={styles.input} placeholder="john@example.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Message</label>
                                <textarea className={styles.textarea} placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
