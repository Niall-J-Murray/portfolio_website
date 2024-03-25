import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          <h2>For more info, check these links:</h2>
   <div>
        <a href="https://www.linkedin.com/in/niall-j-murray/" target="_blank"><img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/LinkedIn_Logo_2013_%282%29.svg" width="100"
                height="50">
                  </a>
                  <a href="https://github.com/Niall-J-Murray/" target="_blank"><img
                src="https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_github.svg" width="100"
                height="50">
                  </a>
        <a href="mailto: niall_murray@outlook.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"
                width="50" height="50">
                  </a>
        </br>
    </div>
      </footer>
    </>
  )
}
