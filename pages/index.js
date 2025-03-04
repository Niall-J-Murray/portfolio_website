import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Niall Murray | Full Stack Developer</title>
                <link rel="icon" href="public/Nioctocat.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="description" content="Niall Murray - Full Stack Developer specializing in Java, React, and TypeScript" />
            </Head>

            <nav className="app-nav">
                <Link href="/" className="nav-brand">
                    NM
                </Link>
                <div className="nav-links">
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/skills" className="nav-link">Skills</Link>
                    <Link href="/projects" className="nav-link">Projects</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
            </nav>

            <main className="app-content">
                <Script src="components/initApollo.js" type="text/javascript"/>
                
                <section className="dashboard-layout">
                    {/* Left panel - Profile */}
                    <div className="profile-panel">
                        <div className="profile-container">
                            <img src="profile_pic.jpg" className="profile-pic" alt="Niall Murray" />
                        </div>
                        <Header title="Hi, I&apos;m Niall!" />
                        <div className="description">
                            <p>I&apos;m a <strong style={{ color: 'var(--highlight)' }}>Full Stack Developer</strong> specializing in Java, with React + TypeScript and MySQL.</p>
                            <p style={{ marginTop: '0.8rem' }}>Experienced with Maven, Spring Boot, Hibernate, Thymeleaf, Vite and UnoCSS.</p>
                        </div>
                        <div style={{ flexGrow: 1 }}></div>
                    </div>

                    {/* Right panel - Content */}
                    <div className="content-panel">
                        {/* Skills */}
                        <div id="skills" className="dashboard-card">
                            <h2 className="section-title">My Skills</h2>
                            <div className="skills-grid">
                                <div className="skill-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" 
                                        alt="Java" className="skill-icon" title="Java"/>
                                    <span>Java</span>
                                </div>
                                <div className="skill-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
                                        alt="Spring" className="skill-icon" title="Spring"/>
                                    <span>Spring</span>
                                </div>
                                <div className="skill-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                        alt="MySQL" className="skill-icon" title="MySQL"/>
                                    <span>MySQL</span>
                                </div>
                                <div className="skill-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                                        alt="React" className="skill-icon" title="React"/>
                                    <span>React</span>
                                </div>
                                <div className="skill-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                        alt="TypeScript" className="skill-icon" title="TypeScript"/>
                                    <span>TypeScript</span>
                                </div>
                                <div className="skill-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        alt="JavaScript" className="skill-icon" title="JavaScript"/>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div id="projects" className="dashboard-card">
                            <h2 className="section-title">Projects</h2>
                            <div className="projects-container compact">
                                {[
                                    {
                                        name: "Slipstream F1",
                                        description: "F1 statistics and prediction app with Spring Boot and React. Features race results, driver standings, and performance predictions.",
                                        logo: "/customLogoBlack.png",
                                        tags: ["Java", "Spring", "React", "MySQL"],
                                        link: "https://slipstreamf1-production.up.railway.app/slipstream/home",
                                        deployed: true
                                    },
                                    {
                                        name: "Scan-In",
                                        description: "A document scanning application built with Golang. Streamlines the digitization process with OCR capabilities and cloud storage integration.",
                                        logo: "/scan-in-logo.svg",
                                        tags: ["Golang", "OCR", "Cloud Storage", "Document Management"],
                                        link: "#",
                                        deployed: false
                                    },
                                    {
                                        name: "Inventory Scanner",
                                        description: "Barcode scanning inventory management system that automates ordering processes when stock levels are low.",
                                        logo: "/inventory-scanner-logo.svg",
                                        tags: ["Node.js", "Express", "Barcode API", "Inventory Management"],
                                        link: "#",
                                        deployed: false
                                    }
                                ].map((project, index) => (
                                    <div key={index} className="project custom-project">
                                        <div className="project-logo-container">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" title={`View ${project.name}`}>
                                                <img src={project.logo} alt={project.name} className="project-logo" />
                                            </a>
                                        </div>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="project-link-button"
                                                title={project.deployed ? `Visit ${project.name}` : `${project.name} (Coming Soon)`}
                                            >
                                                {project.deployed ? 'Visit Project' : 'Coming Soon'}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
