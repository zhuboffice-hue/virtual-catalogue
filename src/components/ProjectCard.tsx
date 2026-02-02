import { useState } from 'react';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';
import { ExternalLink, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';
import LeadModal from './LeadModal';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
            >
                <div className={styles.imageWrapper}>
                    {/* In real app, use next/image here. Placeholder for now. */}
                    <div className={styles.placeholder}>Z3</div>
                </div>

                <div className={styles.content}>
                    <div className={styles.category}>{project.category}</div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.footer}>
                        <div className={styles.techStack}>
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className={styles.badge}>{tech}</span>
                            ))}
                        </div>
                        <div className={styles.actions}>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`${styles.link} ${styles.quoteBtn}`}
                            >
                                Get Quote
                            </button>
                            <Link href={project.url} target="_blank" className={styles.link}>
                                Demo <ExternalLink size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                projectTitle={project.title}
            />
        </>
    );
}
