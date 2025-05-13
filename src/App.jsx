export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>VULTURE</h1>
      <p style={{ fontSize: '1.25rem' }}>
        Le réseau des stars de demain.
      </p>
      <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#ccc' }}>
        Ce site est en cours de développement. Revenez bientôt.
      </p>
    </div>
  );
}
