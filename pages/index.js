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
          I'm a software developer specialising in full stack Java, with React + TypeScript and MySQL. I have skills with Maven, Spring Boot, Hibernate, Thymeleaf, Vite and UnoCSS.
        </p>
      </main>

      <Footer />
    </div>
  )
}
