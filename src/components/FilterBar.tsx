'use client';

import { allCategories, Category } from '@/data/projects';
import styles from './FilterBar.module.css';

interface FilterBarProps {
    currentCategory: Category | 'All';
    onSelect: (category: Category | 'All') => void;
}

export default function FilterBar({ currentCategory, onSelect }: FilterBarProps) {
    return (
        <div className={styles.filterBar}>
            <button
                className={`${styles.filterBtn} ${currentCategory === 'All' ? styles.active : ''}`}
                onClick={() => onSelect('All')}
            >
                All Projects
            </button>

            {allCategories.map((cat) => (
                <button
                    key={cat}
                    className={`${styles.filterBtn} ${currentCategory === cat ? styles.active : ''}`}
                    onClick={() => onSelect(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
