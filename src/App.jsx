export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>VULTURE</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Le réseau des stars de demain
      </p>
      <img
        src="./assets/image0.jpeg"
        alt="Mannequin"
        style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
        }}
      />
    </div>
  );
}
