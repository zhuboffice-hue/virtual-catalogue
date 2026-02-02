import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>Z3Connect</h3>
                        <p>Empowering businesses with cutting-edge digital solutions. From POS to SaaS, we build the future.</p>
                    </div>

                    <div className={styles.column}>
                        <h4>Explore</h4>
                        <ul>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/projects?cat=saas">SaaS Development</Link></li>
                            <li><Link href="/projects?cat=pos">POS Systems</Link></li>
                            <li><Link href="/projects?cat=web">Web Apps</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:hello@z3connect.com">hello@z3connect.com</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Z3Connect. All rights reserved.</p>
                    <p>Privacy Policy • Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}
