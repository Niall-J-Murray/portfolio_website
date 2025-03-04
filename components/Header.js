export default function Header({ title }) {
  return (
    <header style={{ width: '100%', textAlign: 'center', padding: '0.5rem 0', marginBottom: '0.5rem' }}>
      <h1 style={{ 
        fontSize: '2rem', 
        background: 'linear-gradient(45deg, var(--text-primary), var(--highlight))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0.5rem 0',
        fontWeight: '600'
      }}>
        {title}
      </h1>
    </header>
  )
}
