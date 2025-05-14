// 🚀 Prochaine version : VULTURE avec Firebase, Portfolio et Dashboard
import { useState, useEffect } from "react";
import "./index.css";
import mannequin from "../assets/image0.jpeg";
import img3 from "../assets/HAJOUE72SD4OBCQ7GZVVBZ3ZAQ.jpeg";



const slideshow = [mannequin, img3];

export default function App() {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    portfolio: "",
    age: "",
    platform: "",
    followers: {
      instagram: "",
      twitter: "",
      tiktok: "",
      onlyfans: ""
    }
  });
  const [bgIndex, setBgIndex] = useState(0);
  const [submittedProfiles, setSubmittedProfiles] = useState([]);
  const [adminView, setAdminView] = useState(false);
  const [authStep, setAuthStep] = useState(false);
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slideshow.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (["instagram", "twitter", "tiktok", "onlyfans"].includes(name)) {
    setFormData((prev) => ({
      ...prev,
      followers: {
        ...prev.followers,
        [name]: value
      }
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = { ...formData, type: userType, timestamp: new Date().toLocaleString(), status: "pending", id: Date.now() };
    setSubmittedProfiles([...submittedProfiles, newProfile]);
    alert("Profil envoyé avec succès.");
    setFormData({
      name: "",
      email: "",
      description: "",
      portfolio: "",
      age: "",
      platform: "",
      contact: "",
      localisation: "",
      followers: { instagram: "", twitter: "", tiktok: "", onlyfans: "" }
    });

    // Envoi automatique d'un faux mail (console simulation)
    console.log(`📩 Mail automatique : Merci ${formData.name} d'avoir postulé sur VULTURE. Nous vous tiendrons informé de la suite.`);
    setUserType(null);
    setConfirmation(true);
  };

const handleBack = () => {
    setUserType(null);
    setAdminView(false);
    setAuthStep(false);
    setAuthData({ username: "", password: "" });
    setFormData({ name: "", email: "", description: "", portfolio: "" });
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

  const updateStatus = (id, status) => {
  const updated = submittedProfiles.map((p) =>
    p.id === id ? { ...p, status } : p
  );
  setSubmittedProfiles(updated);
  console.log("Statut mis à jour :", updated);
};

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth transition-opacity duration-700 ease-in-out">
      {!userType && !adminView && !authStep && !confirmation && (<>

  <section className="relative h-screen flex items-center justify-center text-center bg-black pt-24 overflow-hidden">
    <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-1000">
      <img src={slideshow[bgIndex]} alt="VULTURE Background" className="w-full h-full object-cover object-center scale-105 opacity-80 transition-opacity duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black"></div>
    </div>
    <div className="relative z-10 px-4 text-white animate-fade-in">
      <h1 className="text-7xl font-black tracking-widest uppercase drop-shadow-xl">VULTURE</h1>
      <p className="mt-6 text-xl text-gray-200 italic max-w-2xl mx-auto drop-shadow">La maison des créateurs de demain. Luxe, sélectivité, influence et impact global.</p>
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
</>) }

      <audio autoPlay loop>
        <source src="/vulture-theme.wav" type="audio/wav" />
      </audio>

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 py-4 bg-black/80 backdrop-blur border-b border-gray-800">
        <nav className="space-x-6 text-sm font-medium">
          <button onClick={() => { setUserType("model"); setAdminView(false); setAuthStep(false); }} className="hover:text-gray-300 transition">Modèle</button>
          <button onClick={() => { setUserType("brand"); setAdminView(false); setAuthStep(false); }} className="hover:text-gray-300 transition">Marque</button>
          <button onClick={() => { setUserType(null); setAdminView(false); setAuthStep(true); }} className="hover:text-gray-300 transition">Admin</button>
          {(userType || adminView || authStep) && (
            <button onClick={handleBack} className="hover:text-gray-300 transition">Retour</button>
          )}
        </nav>
      </header>

      {authStep && !adminView && (
        <section className="py-32 px-6 max-w-md mx-auto transition-opacity duration-700 ease-in-out">
          <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wide">Connexion Admin</h2>
          <form onSubmit={handleAdminAuth} className="space-y-4">
            <input type="text" name="username" placeholder="Nom d'utilisateur" value={authData.username} onChange={(e) => setAuthData({ ...authData, username: e.target.value })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500 transition-transform duration-300 ease-in-out focus:scale-105 focus:outline-none" required />
            <input type="password" name="password" placeholder="Mot de passe" value={authData.password} onChange={(e) => setAuthData({ ...authData, password: e.target.value })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500 transition-transform duration-300 ease-in-out focus:scale-105 focus:outline-none" required />
                                    <button type="submit" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full shadow">Se connecter</button>
          </form>
        </section>
      )}

      {userType === 'brand' && !adminView && (
        <section className="py-32 px-6 max-w-3xl mx-auto transition-opacity duration-700 ease-in-out bg-black border-t border-amber-500 shadow-inner rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-widest text-amber-400">Espace Marque</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
  <input type="text" name="name" placeholder="Nom de la marque" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500" />
  <input type="email" name="email" placeholder="Email professionnel" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500" />
  <textarea name="description" placeholder="Présentation de la marque, mission, identité..." value={formData.description} onChange={handleChange} required className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500 h-32"></textarea>
  <input type="url" name="portfolio" placeholder="Site web (facultatif)" value={formData.portfolio} onChange={handleChange} className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500" />
  <input type="text" name="platform" placeholder="Secteur (Mode, Cinéma, etc.)" value={formData.platform} onChange={handleChange} required className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500" />
  <input type="text" name="contact" placeholder="Responsable contact" value={formData.contact || ""} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500" />
  <input type="text" name="localisation" placeholder="Pays / Siège" value={formData.localisation || ""} onChange={(e) => setFormData({ ...formData, localisation: e.target.value })} className="w-full p-3 bg-black text-white border border-amber-500 rounded placeholder-gray-500" />
  <button type="submit" className="bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition w-full shadow">Soumettre</button>
                </form>
        </section>
      )}
      )}

{userType === 'model' && !adminView && (
        <section className="py-32 px-6 max-w-2xl mx-auto transition-opacity duration-700 ease-in-out bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800 shadow-xl rounded-xl">
          <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wide">Espace Modèle</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="email" name="email" placeholder="Email professionnel" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="number" name="age" placeholder="Âge" value={formData.age} onChange={handleChange} required className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="text" name="platform" placeholder="Plateforme principale (Instagram, TikTok, etc.)" value={formData.platform} onChange={handleChange} required className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="number" name="instagram" placeholder="Abonnés Instagram" value={formData.followers.instagram} onChange={(e) => setFormData({ ...formData, followers: { ...formData.followers, instagram: e.target.value } })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="number" name="twitter" placeholder="Abonnés Twitter" value={formData.followers.twitter} onChange={(e) => setFormData({ ...formData, followers: { ...formData.followers, twitter: e.target.value } })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="number" name="tiktok" placeholder="Abonnés TikTok" value={formData.followers.tiktok} onChange={(e) => setFormData({ ...formData, followers: { ...formData.followers, tiktok: e.target.value } })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <input type="number" name="onlyfans" placeholder="Abonnés OnlyFans" value={formData.followers.onlyfans} onChange={(e) => setFormData({ ...formData, followers: { ...formData.followers, onlyfans: e.target.value } })} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 placeholder-gray-500" />
            <button type="submit" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full shadow">Soumettre</button>
          </form>
        </section>
      )}
      )}

      {confirmation && (
        <section className="py-32 px-6 max-w-md mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold uppercase mb-4 tracking-wide">Merci pour votre envoi !</h2>
          <p className="text-gray-400">Nous vous tiendrons informé très prochainement. Vous pouvez désormais quitter cette page.</p>
        </section>
      )}

      {adminView && (
        <section className="py-24 px-6 max-w-6xl mx-auto transition-opacity duration-700 ease-in-out">
          <div className="text-center mb-8">
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              <button onClick={() => setSubmittedProfiles(submittedProfiles)} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Tout</button>
              <button onClick={() => setSubmittedProfiles(submittedProfiles.filter(p => p.type === 'model'))} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Modèles</button>
              <button onClick={() => setSubmittedProfiles(submittedProfiles.filter(p => p.type === 'brand'))} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Marques</button>
              <button onClick={() => setSubmittedProfiles(submittedProfiles.filter(p => p.status === 'pending'))} className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-500">En attente</button>
              <button onClick={() => setSubmittedProfiles(submittedProfiles.filter(p => p.status === 'accepted'))} className="px-4 py-2 bg-green-600 rounded hover:bg-green-500">Acceptés</button>
              <button onClick={() => setSubmittedProfiles(submittedProfiles.filter(p => p.status === 'refused'))} className="px-4 py-2 bg-red-600 rounded hover:bg-red-500">Refusés</button>
            </div>
            <img src="/pdglouisaimee.JPG" alt="PDG Louis-Aimée" className="w-24 h-24 mx-auto rounded-full border-4 border-white mb-4" />
            <h2 className="text-3xl font-bold uppercase tracking-wide">Bonjour Monsieur le PDG LOUIS-AIMÉE</h2>
            <p className="text-sm text-gray-400">{submittedProfiles.length} candidatures reçues</p>
          </div>
          <ul className="space-y-4">
            {submittedProfiles.map((profile, index) => (
              <li key={profile.id} className="border border-gray-800 rounded p-4 bg-gray-900">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-400">Type : {profile.type}</p>
                  <span className={`text-xs px-2 py-1 rounded ${profile.status === "accepted" ? "bg-green-600" : profile.status === "refused" ? "bg-red-600" : "bg-yellow-600"}`}>{profile.status}</span>
                </div>
                <p className="text-lg font-semibold">{profile.name}</p>
                <p className="text-sm">{profile.email}</p>
                {profile.age && (<p className='text-sm mt-2'>Âge : {profile.age}</p>)}
{profile.platform && (<p className='text-sm mt-2'>Plateforme principale : {profile.platform}</p>)}
<p className='text-sm mt-2'>Abonnés :</p>
<ul className='text-sm ml-4 list-disc'>
  <li>Instagram : {profile.followers?.instagram}</li>
  <li>Twitter : {profile.followers?.twitter}</li>
  <li>TikTok : {profile.followers?.tiktok}</li>
  <li>OnlyFans : {profile.followers?.onlyfans}</li>
</ul>
                {profile.portfolio && <p className="text-sm mt-2"><a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Voir le portfolio</a></p>}
                <p className="text-xs text-right text-gray-500 mt-2">Soumis le {profile.timestamp}</p>
                {profile.status === "pending" && (
                  <div className="mt-4 flex gap-4">
                    <button onClick={() => updateStatus(profile.id, "accepted")} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Accepter</button>
                    <button onClick={() => updateStatus(profile.id, "refused")} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Refuser</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}



