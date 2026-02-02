'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import { projects, Category } from '@/data/projects';
import styles from './projects.module.css';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main>
            <Navbar />

            <section className={styles.pageHeader}>
                <div className="container">
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Work
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Explore our extensive catalogue of digital solutions across various industries.
                    </motion.p>
                    <FilterBar currentCategory={activeCategory} onSelect={setActiveCategory} />
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className="container">
                    <motion.div
                        layout
                        className={styles.grid}
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
