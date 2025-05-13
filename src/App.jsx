
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import './index.css';
import logo from "./assets/Vulture.png";
import mannequin from "./assets/image0.jpeg";
import lv from "./assets/LOUIS VUITTON.jpeg";
import hollywood from "./assets/HAJOUE72SD4OBCQ7GZVVBZ3ZAQ.jpeg";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <img src={logo} alt="VULTURE" className="h-12 opacity-80 hover:opacity-100 transition" />
          <div className="space-x-4">
            <Link to="/" className="hover:text-gold">Accueil</Link>
            <Link to="/about" className="hover:text-gold">À propos</Link>
            <Link to="/univers" className="hover:text-gold">Univers</Link>
            <Link to="/login" className="hover:text-gold">Connexion</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/univers" element={<Univers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center py-24 px-4 animate-fade">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-gold mb-4">VULTURE</h1>
      <p className="text-xl md:text-2xl italic text-gray-300">Le réseau des stars de demain</p>
      <img src={mannequin} alt="mannequin" className="mx-auto mt-12 rounded-lg w-80 md:w-[400px]" />
    </div>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 animate-fade">
      <h2 className="text-3xl font-semibold text-gold mb-6">Notre histoire</h2>
      <p className="text-lg text-gray-300 leading-8">
        VULTURE est né du besoin de connecter des talents sous-estimés à l’univers du luxe, des médias et du show-business.
        Nous sommes la voix de ceux qui viennent d’en bas et aspirent aux projecteurs d’Hollywood, aux collaborations avec Louis Vuitton, et au respect dans l’industrie.
        Notre mission est simple : offrir une plateforme professionnelle, élégante et sécurisée pour transformer les créateurs en icônes.
      </p>
    </div>
  );
}

function Univers() {
  return (
    <div className="py-20 px-4 animate-fade">
      <h2 className="text-3xl text-center text-gold font-bold mb-10">Nos univers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <img src={lv} alt="LV" className="rounded-lg shadow-lg w-full" />
        <img src={hollywood} alt="Hollywood" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 animate-fade">
      <h2 className="text-2xl font-semibold text-gold mb-4">Connexion</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
        className="mb-3 px-4 py-2 w-72 rounded bg-gray-900 border border-gray-700 text-white" />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}
        className="mb-6 px-4 py-2 w-72 rounded bg-gray-900 border border-gray-700 text-white" />
      <button className="px-6 py-2 bg-gold text-black font-semibold rounded hover:opacity-90">Se connecter</button>
    </div>
  );
}
