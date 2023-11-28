import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src="/audi-logo.png" alt="audi-logo" height={70} width={100}></Image>
            </div>
            <div className={styles.model}>
                <span className={styles.modelFirst}>R8</span>&nbsp;
                <span className={styles.modelSecond}>e-tron</span>
            </div>
        </div>
    )
}
