import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Projects() {
    const projects = [
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
    ];

    return (
        <div className="container">
            <Head>
                <title>Projects | Niall Murray - Full Stack Developer</title>
                <link rel="icon" href="public/Nioctocat.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="description" content="Portfolio projects of Niall Murray - Full Stack Developer specializing in Java, React, and TypeScript" />
            </Head>

            <nav className="app-nav">
                <Link href="/" className="nav-brand">
                    NM
                </Link>
                <div className="nav-links">
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/skills" className="nav-link">Skills</Link>
                    <Link href="/projects" className="nav-link active">Projects</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
            </nav>

            <main className="app-content">
                <Script src="components/initApollo.js" type="text/javascript"/>
                
                <div className="page-content projects-page">
                    <h1 className="page-title">My Projects</h1>
                    
                    <div className="projects-detail">
                        <div className="projects-intro">
                            <h2 className="section-title">Featured Work</h2>
                            <p>Here are some of the projects I've worked on. Each project demonstrates different aspects of my skills and problem-solving approach.</p>
                        </div>
                        
                        <div className="projects-container compact">
                            {projects.map((project, index) => (
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
            </main>

            <Footer/>
        </div>
    )
} 