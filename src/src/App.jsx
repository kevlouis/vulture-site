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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur border-b border-gray-800">
        <img src={logo} alt="Vulture Logo" className="h-10" />
        <nav className="space-x-6 text-sm font-medium">
          <button onClick={() => setUserType("model")} className="hover:text-gray-300 transition">Modèle</button>
          <button onClick={() => setUserType("brand")} className="hover:text-gray-300 transition">Marque</button>
          {userType && (
            <button onClick={handleBack} className="hover:text-gray-300 transition">Retour</button>
          )}
        </nav>
      </header>

      {!userType && (
        <section className="relative h-screen flex items-center justify-center text-center bg-black pt-24">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={mannequin}
              alt="VULTURE Model"
              className="w-full h-full object-cover object-center scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black"></div>
          </div>
          <div className="relative z-10 px-4 text-white">
            <h1 className="text-7xl font-black tracking-widest uppercase drop-shadow-xl">VULTURE</h1>
            <p className="mt-6 text-xl text-gray-200 italic max-w-2xl mx-auto drop-shadow">
              La maison des créateurs de demain. Luxe, sélectivité, influence et impact global.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setUserType("model")}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg"
              >
                Espace Modèle
              </button>
              <button
                onClick={() => setUserType("brand")}
                className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition shadow-lg"
              >
                Espace Marque
              </button>
            </div>
          </div>
        </section>
      )}

      {userType && (
        <section className="py-32 px-6 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wide">
            {userType === "model" ? "Espace Modèle" : "Espace Marque"}
          </h2>
          <p className="text-gray-400 text-center mb-10 text-lg">
            {userType === "model"
              ? "Vous êtes artiste, mannequin, créateur de contenu ? Rejoignez notre réseau sélectif."
              : "Vous êtes une maison, une marque ou un label de luxe ? Connectez-vous à notre vivier d'artistes exceptionnels."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nom ou structure"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email professionnel"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500"
              required
            />
            <textarea
              name="description"
              placeholder="Décrivez votre univers, vos projets, votre vision..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full shadow"
            >
              Envoyer mon profil
            </button>
          </form>
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
