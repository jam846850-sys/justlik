"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Product = {
  id: number;
  nom: string;
  prix: number;
  image: string;
  categorie: string;
  tailles: string[];
};

export default function BoutiquePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.from("products").select("*").order("id", { ascending: false });
      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="py-20 text-center text-[#6B1F2E]">Chargement de la boutique...</div>;

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl text-[#6B1F2E] mb-3">La boutique</h1>
        <p className="text-[#2B2B2B]/70">Des tenues choisies avec soin.</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-[#2B2B2B]/60">
          Aucune tenue disponible pour le moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link key={p.id} href={"/produit/" + p.id} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-[#FAFAFA]">
                <img src={p.image || "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"} alt={p.nom} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className="text-[#6B1F2E] font-medium">{p.nom}</h3>
              <p className="text-[#2B2B2B]/70 text-sm">{p.prix.toLocaleString("fr-FR")} FCFA</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
