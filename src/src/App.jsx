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
        Your browser does not support the audio element.
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
            <input
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
              value={authData.username}
              onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={authData.password}
              onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full shadow"
            >
              Se connecter
            </button>
          </form>
        </section>
      )}

      {!userType && !adminView && !authStep && (
        <section className="py-24 px-6 max-w-full mx-auto animate-fade-in overflow-x-scroll whitespace-nowrap">
          <h2 className="text-3xl font-bold mb-4 px-4 uppercase tracking-wide">Éditions visuelles</h2>
          <div className="flex space-x-6 px-4">
            {[mannequin, img3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`vulture-visual-${i}`}
                className="inline-block w-[80vw] h-[50vh] object-cover rounded-xl shadow-lg border border-gray-700"
              />
            ))}
          </div>
        </section>
      )}

      {/* le reste de l'application reste inchangé */}
    </div>
  );
}



