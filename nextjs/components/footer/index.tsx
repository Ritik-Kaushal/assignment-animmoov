import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>Integration Hochvolt-Batteriesystem in die Karosseriestruktur</div>
            <div className={styles.footerButton}><a href="https://www.audi-mediacenter.com/en/audi-r8-e-tron-172" target='_blank'>Learn more</a></div>
        </div>
    )
}
