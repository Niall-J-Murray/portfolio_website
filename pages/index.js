import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="👋 Hello, I'm Niall!" />
        <p className="description">
          I'm a software developer specialising in full stack Java, with React + TypeScript and MySQL. 
    </br>
    I am skilled with Maven, Spring Boot, Hibernate, Thymeleaf, Vite and UnoCSS.
        </p>
              <p>
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" width="50"
                height="50" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" width="50"
                height="50" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50"
                height="50" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50"
            height="50" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50"
                height="50" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"
                height="50" />
        </p>
      </main>

      <Footer />
    </div>
  )
}
