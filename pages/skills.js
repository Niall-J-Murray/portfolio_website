import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Skills() {
    return (
        <div className="container">
            <Head>
                <title>Skills | Niall Murray - Full Stack Developer</title>
                <link rel="icon" href="public/Nioctocat.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="description" content="Skills of Niall Murray - Full Stack Developer specializing in Java, React, and TypeScript" />
            </Head>

            <nav className="app-nav">
                <Link href="/" className="nav-brand">
                    NM
                </Link>
                <div className="nav-links">
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/skills" className="nav-link active">Skills</Link>
                    <Link href="/projects" className="nav-link">Projects</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
            </nav>

            <main className="app-content">
                <Script src="components/initApollo.js" type="text/javascript"/>
                
                <div className="page-content">
                    <h1 className="page-title">My Skills</h1>
                    
                    <div className="skills-detail">
                        <h2 className="section-title">Technical Expertise</h2>
                        
                        <div className="skills-grid expanded">
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                                    alt="Java" className="skill-icon" title="Java"/>
                                <span>Java</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
                                    alt="Spring" className="skill-icon" title="Spring"/>
                                <span>Spring</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                                    alt="React" className="skill-icon" title="React"/>
                                <span>React</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                                    alt="TypeScript" className="skill-icon" title="TypeScript"/>
                                <span>TypeScript</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                                    alt="MySQL" className="skill-icon" title="MySQL"/>
                                <span>MySQL</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                                    alt="HTML5" className="skill-icon" title="HTML5"/>
                                <span>HTML5</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                                    alt="CSS3" className="skill-icon" title="CSS3"/>
                                <span>CSS3</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                                    alt="JavaScript" className="skill-icon" title="JavaScript"/>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                                    alt="Git" className="skill-icon" title="Git"/>
                                <span>Git</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                                    alt="Docker" className="skill-icon" title="Docker"/>
                                <span>Docker</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                                    alt="Next.js" className="skill-icon" title="Next.js"/>
                                <span>Next.js</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                                    alt="Node.js" className="skill-icon" title="Node.js"/>
                                <span>Node.js</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                                    alt="PostgreSQL" className="skill-icon" title="PostgreSQL"/>
                                <span>PostgreSQL</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
                                    alt="AWS" className="skill-icon" title="AWS"/>
                                <span>AWS</span>
                            </div>
                        </div>
                        
                        <div className="skill-categories">
                            <div className="skill-category">
                                <h3>Backend Development</h3>
                                <p>Java, Spring Boot, Hibernate, Maven, JPA, MySQL, PostgreSQL, REST APIs</p>
                            </div>
                            <div className="skill-category">
                                <h3>Frontend Development</h3>
                                <p>React, TypeScript, Next.js, HTML5, CSS3, JavaScript</p>
                            </div>
                            <div className="skill-category">
                                <h3>Tools & Practices</h3>
                                <p>Git, GitHub, Docker, AWS, CI/CD, Agile, TDD, Unit Testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
} 