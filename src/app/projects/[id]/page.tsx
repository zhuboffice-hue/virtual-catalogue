'use client';

export const runtime = 'edge';


import { use, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, Project } from '@/data/projects';
import styles from './detail.module.css';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: Props) {
    const resolvedParams = use(params);
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const p = projects.find(p => p.id === resolvedParams.id);
        if (setProject) {
            setProject(p || null);
        }
    }, [resolvedParams.id]);

    if (!project) {
        // In a real app we might verify existence earlier or strictly, but client-side fetch sim for now
        // We can just return null or loading while useEffect runs, or notFound if strictly static
        if (typeof window !== 'undefined' && !projects.find(p => p.id === resolvedParams.id)) {
            // Only run this check client-side
            // return notFound();
        }
        // Just show a simple loader or nothing until mounted data is ready
        // Since this is static data imported, we can actually find it immediately if we didn't use useEffect
        // Let's refactor to sync finding since data is robust
        const pSync = projects.find(p => p.id === resolvedParams.id);
        if (!pSync) return notFound();
        return <DetailView project={pSync} />;
    }

    return <DetailView project={project} />;
}

function DetailView({ project }: { project: Project }) {
    return (
        <main className={styles.detailContainer}>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    {/* Placeholder for project hero image */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: `url(${project.image}) center/cover no-repeat`,
                        opacity: 0.3
                    }} />
                </div>
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>

                        <div className={styles.techStack}>
                            {project.techStack.map(tech => (
                                <span key={tech} className={styles.badge}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={`container ${styles.grid}`}>
                    <div className={styles.mainCol}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2>Overview</h2>
                            <p>{project.longDescription || project.description}</p>

                            {project.problem && (
                                <>
                                    <h2>The Challenge</h2>
                                    <p>{project.problem}</p>
                                </>
                            )}

                            {project.features && (
                                <>
                                    <h2>Key Features</h2>
                                    <div className={styles.featuresList}>
                                        {project.features.map(feature => (
                                            <div key={feature} className={styles.featureItem}>
                                                <Check size={18} color="var(--accent-cyan)" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>

                    <aside className={styles.sidebar}>
                        <h3>Project Actions</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            Check out the live version of this project.
                        </p>
                        <Link href={project.url} target="_blank" className={styles.sidebarBtn}>
                            Visit Live Site <ArrowUpRight style={{ display: 'inline', marginLeft: 8 }} size={18} />
                        </Link>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}
