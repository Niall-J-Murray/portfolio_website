import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Contact | Niall Murray - Full Stack Developer</title>
                <link rel="icon" href="public/Nioctocat.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="description" content="Contact information for Niall Murray - Full Stack Developer" />
            </Head>

            <nav className="app-nav">
                <Link href="/" className="nav-brand">
                    NM
                </Link>
                <div className="nav-links">
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/skills" className="nav-link">Skills</Link>
                    <Link href="/projects" className="nav-link">Projects</Link>
                    <Link href="/contact" className="nav-link active">Contact</Link>
                </div>
            </nav>

            <main className="app-content">
                <Script src="components/initApollo.js" type="text/javascript"/>
                
                <div className="page-content">
                    <h1 className="page-title">Get In Touch</h1>
                    
                    <div className="contact-layout">
                        <div className="contact-intro">
                            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Here's how you can reach me:</p>
                        </div>
                        
                        <div className="contact-options">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </div>
                                <h3>LinkedIn</h3>
                                <p>Connect with me professionally. View my work experience, skills, and recommendations.</p>
                                <a href="https://www.linkedin.com/in/niall-j-murray/" target="_blank" rel="noopener noreferrer" className="contact-link">Visit My LinkedIn</a>
                            </div>
                            
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </div>
                                <h3>GitHub</h3>
                                <p>Explore my code repositories, contributions, and open-source projects. See my coding style and project documentation.</p>
                                <a href="https://github.com/Niall-J-Murray/" target="_blank" rel="noopener noreferrer" className="contact-link">View My GitHub</a>
                            </div>
                            
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <h3>Email</h3>
                                <p>Send me a direct message via Outlook. Great for project inquiries, collaboration offers, or general questions about my work.</p>
                                <a href="mailto:niall_murray@outlook.com" className="contact-link">Email Me</a>
                            </div>
                        </div>
                        
                        <div className="contact-message">
                            <h3>Let's Connect!</h3>
                            <p>Whether you have a question about my work, a project you'd like me to contribute to, or just want to say hello, I'd love to hear from you. I aim to respond to all messages within 24-48 hours.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
} 