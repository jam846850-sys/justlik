"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

const categories = ["Toutes", "Robes", "Ensembles", "Tops", "Jupes"];
const taillesDispo = ["Toutes", "S", "M", "L", "XL"];

export default function BoutiquePage() {
  const [categorie, setCategorie] = useState("Toutes");
  const [taille, setTaille] = useState("Toutes");

  const filtered = products.filter((p) => {
    const matchCat = categorie === "Toutes" || p.categorie === categorie;
    const matchTaille = taille === "Toutes" || p.tailles.includes(taille);
    return matchCat && matchTaille;
  });

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl text-[#6B1F2E] mb-3">La boutique</h1>
        <p className="text-[#2B2B2B]/70">Des tenues choisies avec soin.</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 bg-[#FAFAFA] p-4 rounded-lg">
        <div>
          <label className="block text-sm font-medium mb-1">Catégorie</label>
          <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className="px-4 py-2 border rounded-md">
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Taille</label>
          <select value={taille} onChange={(e) => setTaille(e.target.value)} className="px-4 py-2 border rounded-md">
            {taillesDispo.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Link key={p.id} href={`/produit/${p.id}`} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-[#FAFAFA]">
              <img src={p.image} alt={p.nom} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <h3 className="text-[#6B1F2E] font-medium">{p.nom}</h3>
            <p className="text-[#2B2B2B]/70 text-sm">{p.prix.toLocaleString("fr-FR")} FCFA</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
