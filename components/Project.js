export default function Project() {
  return (
    <div className="projects-container">
      <div className="project">
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '0.25rem' }}>
          <a href="https://slipstreamf1-production.up.railway.app/slipstream/home" 
             target="_blank" 
             rel="noopener noreferrer"
             title="Visit Slipstream F1 Application"
             aria-label="Visit Slipstream F1 Application">
            <img 
              src="customLogoBlack.png" 
              alt="Slipstream F1 Logo" 
              className="project-logo"
              loading="lazy" 
            />
          </a>
        </div>
        
        <h3 style={{ 
          color: 'var(--text-primary)', 
          margin: '0.2rem 0 0.3rem',
          fontSize: '1.3rem',
          textAlign: 'center'
        }}>Slipstream F1</h3>
        <p style={{ 
          color: 'var(--text-secondary)', 
          textAlign: 'center', 
          fontSize: '0.85rem',
          margin: '0 0 0.6rem',
          lineHeight: '1.3'
        }}>
          F1 statistics and prediction app with Spring Boot and React
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.4rem', 
          marginTop: '0',
          flexWrap: 'wrap'
        }}>
          <span style={{ 
            background: 'var(--accent)', 
            color: 'var(--text-primary)', 
            padding: '0.15rem 0.4rem', 
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>Java</span>
          <span style={{ 
            background: 'var(--accent)', 
            color: 'var(--text-primary)', 
            padding: '0.15rem 0.4rem', 
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>Spring</span>
          <span style={{ 
            background: 'var(--accent)', 
            color: 'var(--text-primary)', 
            padding: '0.15rem 0.4rem', 
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>React</span>
        </div>
      </div>
      
      {/* You can add more projects here */}
      
    </div>
  )
}
