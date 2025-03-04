import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Niall Murray
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/niall-j-murray/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <img
                            src="LinkedIn_In_Icon.png"
                            alt="LinkedIn"
                            className={styles.logo}/>
                    </a>
                    <a href="https://github.com/Niall-J-Murray/" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <img
                            src="github-logo.svg"
                            alt="GitHub"
                            className={styles.logo}/>
                    </a>
                    <a href="mailto:niall_murray@outlook.com" title="Email Me">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"
                            alt="Email"
                            className={styles.logo}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
