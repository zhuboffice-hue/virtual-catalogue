'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './LeadModal.module.css';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
}

export default function LeadModal({ isOpen, onClose, projectTitle }: LeadModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await addDoc(collection(db, 'leads'), {
                ...formData,
                project: projectTitle,
                createdAt: serverTimestamp()
            });
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
                onClose();
            }, 2000);
        } catch (err) {
            console.error('Error adding lead:', err);
            setError('Failed to submit. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className={styles.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={onClose}>
                                <X size={20} />
                            </button>

                            {success ? (
                                <div className={styles.successState}>
                                    <CheckCircle size={48} className={styles.successIcon} />
                                    <h3>Request Sent!</h3>
                                    <p>We'll get back to you about {projectTitle} shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h2>Get a Quote</h2>
                                    <p className={styles.subtitle}>Interested in <strong>{projectTitle}</strong>? Let us know!</p>

                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.inputGroup}>
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Phone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Message (Optional)</label>
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell us about your requirements..."
                                                rows={3}
                                            />
                                        </div>

                                        {error && <p className={styles.error}>{error}</p>}

                                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                                            {loading ? <Loader2 className={styles.spinner} /> : 'Submit Request'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
