import { useState } from "react";
import "./index.css";
import mannequin from "./assets/image0.jpeg"; // image d'accueil principale
import logo from "./assets/Vulture.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <img src={logo} alt="Vulture Logo" className="h-10" />
        <nav className="space-x-6 text-sm">
          <a href="#talents" className="hover:text-gray-400">Talents</a>
          <a href="#marques" className="hover:text-gray-400">Marques</a>
          <a href="#vision" className="hover:text-gray-400">Notre Vision</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img src={mannequin} alt="Mannequin VULTURE" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-extrabold mb-6 tracking-wide">VULTURE</h1>
          <p className="text-xl text-gray-300 font-light">Le réseau des stars de demain. Connecter luxe, talents et influence.</p>
        </div>
      </section>

      {/* Talents Section */}
      <section id="talents" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Vous êtes créateur, modèle ou artiste ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Rejoignez un écosystème qui valorise votre image, vous connecte aux plus grandes marques et vous propulse vers une carrière d’exception. Que vous soyez dans la mode, le sport, le cinéma ou OnlyFans, VULTURE vous ouvre des portes concrètes.
        </p>
      </section>

      {/* Marques Section */}
      <section id="marques" className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Vous êtes une marque ou une maison ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Accédez à des profils certifiés, bâtissez des campagnes ambitieuses, et collaborez avec les talents les plus influents et créatifs du digital. VULTURE est votre outil de sourcing haut de gamme.
        </p>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Notre vision</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          VULTURE n’est pas une agence classique. C’est une maison de talents digitale et sélective, centrée sur la transformation d’artistes digitaux en icônes culturelles. Luxe, éthique, sécurité, ambition : nous connectons deux mondes.
        </p>
      </section>

      <footer className="text-center text-xs text-gray-600 py-8 border-t border-gray-800">
        © 2025 VULTURE. Tous droits réservés.
      </footer>
    </div>
  );
}
