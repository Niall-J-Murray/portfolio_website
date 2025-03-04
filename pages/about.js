import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>About | Niall Murray - Full Stack Developer</title>
                <link rel="icon" href="public/Nioctocat.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="description" content="About Niall Murray - Full Stack Developer specializing in Java, React, and TypeScript" />
            </Head>

            <nav className="app-nav">
                <Link href="/" className="nav-brand">
                    NM
                </Link>
                <div className="nav-links">
                    <Link href="/about" className="nav-link active">About</Link>
                    <Link href="/skills" className="nav-link">Skills</Link>
                    <Link href="/projects" className="nav-link">Projects</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
            </nav>

            <main className="app-content">
                <Script src="components/initApollo.js" type="text/javascript"/>
                
                <div className="page-content">
                    <h1 className="page-title">About Me</h1>
                    
                    <div className="about-layout">
                        <div className="profile-container about-profile">
                            <img src="profile_pic.jpg" className="profile-pic" alt="Niall Murray" />
                        </div>
                        
                        <div className="about-content">
                            <h2>Hi, I&apos;m Niall!</h2>
                            <div className="description">
                                <p>I&apos;m a <strong style={{ color: 'var(--highlight)' }}>Full Stack Developer</strong> specializing in Java, with React + TypeScript and MySQL.</p>
                                <p style={{ marginTop: '0.8rem' }}>Experienced with Maven, Spring Boot, Hibernate, Thymeleaf, Vite and UnoCSS.</p>
                                
                                <div className="about-details">
                                    <h3>My Approach</h3>
                                    <p>I focus on building robust, scalable applications that deliver exceptional user experiences. With strong foundations in both backend and frontend technologies, I enjoy working on all aspects of web development.</p>
                                    
                                    <h3>Background</h3>
                                    <p>With a passion for clean code and efficient solutions, I've developed applications that combine powerful backend systems with intuitive user interfaces.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
} 