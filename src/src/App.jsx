import { useState } from "react";
import "./index.css";
import mannequin from "../assets/image0.jpeg";
import logo from "../assets/Vulture.png";

export default function App() {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil envoyé avec succès.");
  };

  const handleBack = () => {
    setUserType(null);
    setFormData({ name: "", email: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black">
        <img src={logo} alt="Vulture Logo" className="h-10" />
        <nav className="space-x-6 text-sm font-medium">
          <button onClick={() => setUserType("model")} className="hover:text-gray-300">Modèle</button>
          <button onClick={() => setUserType("brand")} className="hover:text-gray-300">Marque</button>
          {userType && (
            <button onClick={handleBack} className="hover:text-gray-300">Retour</button>
          )}
        </nav>
      </header>

      {!userType && (
        <section className="relative h-screen flex items-center justify-center text-center bg-black">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={mannequin}
              alt="VULTURE Model"
              className="w-full h-full object-cover object-center scale-105 opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
          </div>
          <div className="relative z-10 px-4">
            <h1 className="text-6xl font-extrabold text-white tracking-wide">VULTURE</h1>
            <p className="mt-4 text-lg text-gray-400 italic">L’union du luxe et du talent.</p>
            <div className="mt-8 space-x-4">
              <button
                onClick={() => setUserType("model")}
                className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Espace Modèle
              </button>
              <button
                onClick={() => setUserType("brand")}
                className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Espace Marque
              </button>
            </div>
          </div>
        </section>
      )}

      {userType && (
        <section className="py-24 px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            {userType === "model" ? "Espace Modèle" : "Espace Marque"}
          </h2>
          <p className="text-gray-400 text-center mb-10">
            {userType === "model"
              ? "Vous êtes artiste, mannequin, créateur de contenu ? Rejoignez notre réseau sélectif."
              : "Vous êtes une marque de luxe, un label ou une maison ? Déposez votre profil et découvrez nos talents."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nom ou structure"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email professionnel"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700"
              required
            />
            <textarea
              name="description"
              placeholder="Décrivez votre activité, ambitions ou attentes"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition w-full"
            >
              Envoyer mon profil
            </button>
          </form>
        </section>
      )}

      <footer className="text-center text-xs text-gray-600 py-8 border-t border-gray-800">
        © 2025 VULTURE. Tous droits réservés.
      </footer>
    </div>
  );
}

