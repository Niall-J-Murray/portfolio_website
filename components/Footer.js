import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div>
                    <h2>More info on: </h2>
                    <a href="https://www.linkedin.com/in/niall-j-murray/" target="_blank">
                        <img
                            src="LinkedIn_In_Icon.png"
                            className={styles.logo}/>
                    </a>
                    <a href="https://github.com/Niall-J-Murray/" target="_blank">
                        <img
                            src="github-logo.svg"
                            className={styles.logo}/>
                    </a>

                    <a href="mailto: niall_murray@outlook.com">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"
                            className={styles.logo}/>
                    </a>
                </div>
            </footer>
        </>
    )
}
