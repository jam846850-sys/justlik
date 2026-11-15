"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  const [products, setProducts] = useState<any[]>([]);
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [categorie, setCategorie] = useState("Robes");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Justmomo225") {
      setIsAuthenticated(true);
      localStorage.setItem("justlik_admin", "true");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("justlik_admin") === "true") setIsAuthenticated(true);
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*").order("id", { ascending: false });
    if (data) setProducts(data);
  };

  useEffect(() => {
    if (isAuthenticated) fetchProducts();
  }, [isAuthenticated]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom || !prix || !file) return alert("Le nom, le prix et la photo sont obligatoires");
    
    setUploading(true);

    // 1. Upload de la photo sur Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { error: uploadError } = await supabase.storage.from("images").upload(fileName, file);

    if (uploadError) {
      alert("Erreur upload photo : " + uploadError.message);
      setUploading(false);
      return;
    }

    // 2. Récupérer l'URL publique de la photo
    const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(fileName);

    // 3. Ajouter le produit dans la base
    const { error } = await supabase.from("products").insert([
      { nom, prix: parseInt(prix), image: publicUrl, categorie, tailles: ["S", "M", "L", "XL"] }
    ]);

    if (error) alert("Erreur : " + error.message);
    else {
      setNom(""); setPrix(""); setFile(null);
      fetchProducts();
    }
    setUploading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce produit ?")) return;
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  if (!isAuthenticated) {
    return (
      <div className="py-20 px-4 max-w-md mx-auto text-center">
        <h1 className="text-3xl text-[#6B1F2E] mb-6">Accès Administrateur</h1>
        <form onSubmit={handleLogin} className="bg-[#FAFAFA] p-6 rounded-lg shadow-sm">
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border rounded-md mb-4" />
          <button type="submit" className="w-full bg-[#6B1F2E] text-white py-3 rounded-full hover:bg-[#6B1F2E]/90">Se connecter</button>
        </form>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl text-[#6B1F2E]">Espace Admin</h1>
        <button onClick={() => { localStorage.removeItem("justlik_admin"); setIsAuthenticated(false); }} className="text-red-600 underline text-sm">Déconnexion</button>
      </div>

      <div className="bg-[#FAFAFA] p-6 rounded-lg mb-8 shadow-sm">
        <h2 className="text-xl text-[#6B1F2E] mb-4">Ajouter une tenue</h2>
        <form onSubmit={handleAdd} className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nom (ex: Robe Awa)" value={nom} onChange={(e) => setNom(e.target.value)} className="px-4 py-2 border rounded-md" required />
          <input type="number" placeholder="Prix en FCFA" value={prix} onChange={(e) => setPrix(e.target.value)} className="px-4 py-2 border rounded-md" required />
          
          {/* BOUTON D'UPLOAD DE PHOTO */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-[#6B1F2E]">Photo de la tenue</label>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full px-4 py-2 border rounded-md bg-white" required />
          </div>

          <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className="px-4 py-2 border rounded-md">
            <option value="Robes">Robes</option>
            <option value="Ensembles">Ensembles</option>
            <option value="Tops">Tops</option>
            <option value="Jupes">Jupes</option>
          </select>
          <button type="submit" disabled={uploading} className="bg-[#6B1F2E] text-white px-6 py-2 rounded-md hover:bg-[#6B1F2E]/90 disabled:opacity-50">
            {uploading ? "Envoi en cours..." : "Ajouter le produit"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-[#6B1F2E] text-white">
            <tr>
              <th className="p-4">Photo</th>
              <th className="p-4">Nom</th>
              <th className="p-4">Prix</th>
              <th className="p-4">Catégorie</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-4">{p.image ? <img src={p.image} alt="" className="w-12 h-12 object-cover rounded" /> : "-"}</td>
                <td className="p-4 font-medium">{p.nom}</td>
                <td className="p-4">{p.prix.toLocaleString("fr-FR")} FCFA</td>
                <td className="p-4">{p.categorie}</td>
                <td className="p-4 text-right">
                  <button onClick={() => handleDelete(p.id)} className="text-red-600 underline text-sm">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
