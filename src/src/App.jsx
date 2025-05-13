import { useState, useEffect } from "react";
import "./index.css";
import mannequin from "../assets/image0.jpeg";
import img3 from "../assets/HAJOUE72SD4OBCQ7GZVVBZ3ZAQ.jpeg";

const slideshow = [mannequin, img3];

export default function App() {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [bgIndex, setBgIndex] = useState(0);
  const [submittedProfiles, setSubmittedProfiles] = useState([]);
  const [adminView, setAdminView] = useState(false);
  const [authStep, setAuthStep] = useState(false);
  const [authData, setAuthData] = useState({ username: "", password: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slideshow.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = { ...formData, type: userType, timestamp: new Date().toLocaleString() };
    setSubmittedProfiles([...submittedProfiles, newProfile]);
    alert("Profil envoyé avec succès.");
    setFormData({ name: "", email: "", description: "" });
    setUserType(null);
  };

  const handleBack = () => {
    setUserType(null);
    setAdminView(false);
    setAuthStep(false);
    setAuthData({ username: "", password: "" });
    setFormData({ name: "", email: "", description: "" });
  };

  const handleAdminAuth = (e) => {
    e.preventDefault();
    if (authData.username === "pdglouisaimee" && authData.password === "ninjaefficace2,,") {
      setAdminView(true);
      setAuthStep(false);
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans transition-all duration-1000 scroll-smooth">
      <audio autoPlay loop>
        <source src="/vulture-theme.wav" type="audio/wav" />
      </audio>

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 py-4 bg-black/80 backdrop-blur border-b border-gray-800">
        <nav className="space-x-6 text-sm font-medium">
          <button onClick={() => setUserType("model")} className="hover:text-gray-300 transition">Modèle</button>
          <button onClick={() => setUserType("brand")} className="hover:text-gray-300 transition">Marque</button>
          <button onClick={() => setAuthStep(true)} className="hover:text-gray-300 transition">Admin</button>
          {(userType || adminView || authStep) && (
            <button onClick={handleBack} className="hover:text-gray-300 transition">Retour</button>
          )}
        </nav>
      </header>

      {authStep && !adminView && (
        <section className="py-32 px-6 max-w-md mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wide">Connexion Admin</h2>
          <form onSubmit={handleAdminAuth} className="space-y-4">
            <input type="text" name="username" placeholder="Nom d'utilisateur" value={authData.username} onChange={(e) => setAuthData({ ...authData, username: e.target.value })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700" required />
            <input type="password" name="password" placeholder="Mot de passe" value={authData.password} onChange={(e) => setAuthData({ ...authData, password: e.target.value })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700" required />
            <button type="submit" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full shadow">Se connecter</button>
          </form>
        </section>
      )}

      {!userType && !adminView && !authStep && (
        <>
          <section className="relative h-screen flex items-center justify-center text-center bg-black pt-24 overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-1000">
              <img src={slideshow[bgIndex]} alt="VULTURE Background" className="w-full h-full object-cover object-center scale-105 opacity-80 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black"></div>
            </div>
            <div className="relative z-10 px-4 text-white animate-fade-in">
              <h1 className="text-7xl font-black tracking-widest uppercase drop-shadow-xl">VULTURE</h1>
              <p className="mt-6 text-xl text-gray-200 italic max-w-2xl mx-auto drop-shadow">La maison des créateurs de demain. Luxe, sélectivité, influence et impact global.</p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => setUserType("model")} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg">Espace Modèle</button>
                <button onClick={() => setUserType("brand")} className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition shadow-lg">Espace Marque</button>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 max-w-full mx-auto animate-fade-in overflow-x-scroll whitespace-nowrap">
            <h2 className="text-3xl font-bold mb-4 px-4 uppercase tracking-wide">Éditions visuelles</h2>
            <div className="flex space-x-6 px-4">
              {[mannequin, img3].map((img, i) => (
                <img key={i} src={img} alt={`vulture-visual-${i}`} className="inline-block w-[80vw] h-[50vh] object-cover rounded-xl shadow-lg border border-gray-700" />
              ))}
            </div>
          </section>

          <section className="py-32 px-6 max-w-3xl mx-auto animate-fade-in text-center">
            <h2 className="text-4xl font-bold uppercase tracking-wide mb-6">La Maison VULTURE</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              VULTURE est plus qu'une simple vitrine — c'est une maison d'excellence. Nous représentons les talents d’aujourd’hui et de demain avec une approche radicalement sélective, artistique et stratégique. Dans un monde saturé d’images, notre différence réside dans l’authenticité, l'esthétique et l'impact mesurable.
            </p>
          </section>
        </>
      )}

      {userType && !adminView && (
        <section className="py-32 px-6 max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wide">{userType === "model" ? "Espace Modèle" : "Espace Marque"}</h2>
          <p className="text-gray-400 text-center mb-10 text-lg">
            {userType === "model"
              ? "Vous êtes artiste, mannequin, créateur de contenu ? Rejoignez notre réseau sélectif."
              : "Vous êtes une maison, une marque ou un label de luxe ? Connectez-vous à notre vivier d'artistes exceptionnels."}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Nom ou structure" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" required />
            <input type="email" name="email" placeholder="Email professionnel" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" required />
            <textarea name="description" placeholder="Décrivez votre univers, vos projets, votre vision..." value={formData.description} onChange={handleChange} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500 h-32" required></textarea>
            <button type="submit" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full shadow">Envoyer mon profil</button>
          </form>
        </section>
      )}

      {adminView && (
        <section className="py-24 px-6 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wide">Espace Administrateur</h2>
          {submittedProfiles.length === 0 ? (
            <p className="text-center text-gray-400">Aucun profil soumis pour le moment.</p>
          ) : (
            <ul className="space-y-4">
              {submittedProfiles.map((profile, index) => (
                <li key={index} className="border border-gray-800 rounded p-4 bg-gray-900">
                  <p className="text-sm text-gray-400 mb-1">Type : {profile.type}</p>
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm">{profile.email}</p>
                  <p className="text-sm italic text-gray-300 mt-2">{profile.description}</p>
                  <p className="text-xs text-right text-gray-500 mt-2">Soumis le {profile.timestamp}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <footer className="text-center text-xs text-gray-600 py-8 border-t border-gray-800 mt-12">
        <div className="mb-2">© 2025 VULTURE. Tous droits réservés.</div>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Mentions légales</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </footer>
    </div>
  );
}


