import { useState } from 'react';

export default function App() {
  const [role, setRole] = useState(null);
  const [form, setForm] = useState({ name: '', platform: '', description: '' });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Arial',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>VULTURE</h1>

      {!role ? (
        <>
          <p style={{ marginBottom: '1rem' }}>Qui êtes-vous ?</p>
          <button onClick={() => setRole('model')} style={btn}>Modèle</button>
          <button onClick={() => setRole('brand')} style={btn}>Entreprise</button>
        </>
      ) : (
        <div style={{ maxWidth: '400px', width: '100%', marginTop: '1rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>
            {role === 'model' ? 'Créer un profil Modèle' : 'Proposer une Campagne'}
          </h2>
          <input placeholder="Nom" name="name" value={form.name} onChange={handleInput} style={input} />
          <input placeholder={role === 'model' ? 'Plateforme (Insta, TikTok...)' : 'Nom de la marque'} name="platform" value={form.platform} onChange={handleInput} style={input} />
          <textarea placeholder={role === 'model' ? 'Description (Bio)' : 'Description de l’offre'} name="description" value={form.description} onChange={handleInput} style={{ ...input, height: '100px' }} />
          <button onClick={handleSubmit} style={btn}>Valider</button>
        </div>
      )}
    </div>
  );
}

const btn = {
  padding: '10px 20px',
  margin: '0.5rem',
  backgroundColor: '#fff',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

const input = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #444',
  backgroundColor: '#111',
  color: '#fff'
};
