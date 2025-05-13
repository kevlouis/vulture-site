import { useState } from "react";
import "./index.css";
import mannequin from "../assets/image0.jpeg";
import logo from "../assets/Vulture.png";

export default function App() {
  const [formData, setFormData] = useState({ type: "model", name: "", email: "", description: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire soumis avec succès !");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <img src={logo} alt="Vulture Logo" className="h-10" />
        <nav className="space-x-6 text-sm">
          <a href="#talents" className="hover:text-gray-400">Talents</a>
          <a href="#marques" className="hover:text-gray-400">Marques</a>
          <a href="#vision" className="hover:text-gray-400">Notre Vision</a>
          <a href="#form" className="hover:text-gray-400">Créer un profil</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img src={mannequin} alt="Mannequin VULTURE" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-extrabold mb-6 tracking-wide">VULTURE</h1>
          <p className="text-xl text-gray-300 font-light">Le réseau des stars de demain. Connecter luxe, marques et modèles.</p>
        </div>
      </section>

      {/* Talents Section */}
      <section id="talents" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Vous êtes modèle ou créateur ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Rejoignez un écosystème haut de gamme conçu pour propulser votre image. VULTURE vous connecte directement aux plus grandes marques grâce à notre système de matchmaking intelligent.
        </p>
      </section>

      {/* Marques Section */}
      <section id="marques" className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Vous représentez une marque ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Découvrez et collaborez avec les talents les plus impactants de demain. Créez un profil pour accéder à une base de modèles qualifiés et affinitaires.
        </p>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Notre vision</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          VULTURE n’est pas une agence classique. C’est une maison de talents digitale, sélective et premium, dédiée à créer des connexions uniques entre marques de luxe et créateurs d’exception.
        </p>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Créer votre profil</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="type" value="model" checked={formData.type === "model"} onChange={handleChange} />
              Modèle
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="type" value="brand" checked={formData.type === "brand"} onChange={handleChange} />
              Marque
            </label>
          </div>
          <input type="text" name="name" placeholder="Nom ou nom de scène" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded" required />
          <input type="email" name="email" placeholder="Email professionnel" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded" required />
          <textarea name="description" placeholder="Décrivez votre profil ou vos besoins" value={formData.description} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded h-32" required></textarea>
          <button type="submit" className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">Envoyer</button>
        </form>
      </section>

      <footer className="text-center text-xs text-gray-600 py-8 border-t border-gray-800">
        © 2025 VULTURE. Tous droits réservés.
      </footer>
    </div>
  );
}
