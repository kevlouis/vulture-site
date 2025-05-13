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

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black">
        <img src={logo} alt="Vulture Logo" className="h-10" />
        <nav className="space-x-6 text-sm text-gold-500 font-medium">
          <button onClick={() => setUserType("model")} className="hover:text-yellow-400">Modèle</button>
          <button onClick={() => setUserType("brand")} className="hover:text-yellow-400">Marque</button>
        </nav>
      </header>

      {!userType && (
        <section className="relative h-screen flex items-center justify-center text-center bg-black">
          <img src={mannequin} alt="VULTURE Model" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10 px-4">
            <h1 className="text-6xl font-extrabold text-white tracking-wide">VULTURE</h1>
            <p className="mt-4 text-lg text-yellow-300">L'union du luxe et du talent. Choisissez votre univers.</p>
          </div>
        </section>
      )}

      {userType && (
        <section className="py-24 px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
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
              className="w-full p-3 bg-gray-800 text-white rounded border border-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email professionnel"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded border border-yellow-500"
              required
            />
            <textarea
              name="description"
              placeholder="Décrivez votre activité, ambitions ou attentes"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded border border-yellow-500 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition w-full"
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
