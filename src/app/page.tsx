'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import { projects, Category } from '@/data/projects';
import styles from './home.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.tagline}>Z3Connect Virtual Catalogue</p>
            <h1 className={styles.mainHeading}>Explore Real-World <br /> Digital Solutions</h1>
            <p className={styles.subText}>
              Discover our portfolio of high-performance web applications, robust POS systems, and scalable SaaS platforms built for modern businesses.
            </p>
            <div className={styles.heroButtons}>
              <a href="#catalogue" className={styles.primaryBtn}>View Projects</a>
              <a href="/contact" className={styles.secondaryBtn}>Request Demo</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <h3>20+</h3>
            <p>Live Projects</p>
          </div>
          <div className={styles.statItem}>
            <h3>10+</h3>
            <p>Industries Served</p>
          </div>
          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className={styles.catalogueSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Curated Projects
            </motion.h2>
            <FilterBar currentCategory={activeCategory} onSelect={setActiveCategory} />
          </div>

          <motion.div
            layout
            className={styles.projectsGrid}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className={styles.noProjects}>No projects found in this category.</div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
