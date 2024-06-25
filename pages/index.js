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
        <script>function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"66425ce43299100438407824"})},
document.head.appendChild(o)}initApollo();</script>
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
