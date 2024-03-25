import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Project from "@components/Project";
import styles from "@components/Footer.module.css";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Niall Murray</title>
                <link rel="icon" href="Nioctocat.png"/>
            </Head>

            <main>
                <Header title="👋 Hello, I'm Niall!"/>
                <div className={styles.footer}>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                             className={styles.logo}/>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
                            className={styles.logo}/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                             className={styles.logo}/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                             className={styles.logo}/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                             className={styles.logo}/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                             className={styles.logo}/>
                    </p>
                </div>
                <article className="description">
                    I'm a software developer specialising in full stack Java, with React + TypeScript and MySQL.
                    <br/>
                    I am skilled with Maven, Spring Boot,Hibernate,Thymeleaf, Vite and UnoCSS.
                </article>

                <div>
                    <h2>My Projects:</h2>
                    <Project/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
