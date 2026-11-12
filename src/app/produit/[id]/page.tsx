"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useParams, useRouter } from "next/navigation";

function ProduitContent() {
  const { id } = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const produit = products.find((p) => p.id === Number(id));
  const [tailleChoisie, setTailleChoisie] = useState("");
  const [ajoute, setAjoute] = useState(false);

  if (!produit) return <div className="py-20 text-center">Produit introuvable</div>;

  const whatsappMessage = encodeURIComponent(`Bonjour JustLik, je suis intéressée par : ${produit.nom} (${produit.prix.toLocaleString("fr-FR")} FCFA).`);

  const handleAddToCart = () => {
    if (!tailleChoisie) return alert("Veuillez choisir une taille");
    addItem({ id: produit.id, nom: produit.nom, prix: produit.prix, image: produit.image, taille: tailleChoisie });
    setAjoute(true);
    setTimeout(() => { setAjoute(false); router.push("/panier"); }, 1000);
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-sm text-[#2B2B2B]/60 mb-8">
        <Link href="/boutique" className="hover:text-[#6B1F2E]">Boutique</Link> / <span className="text-[#6B1F2E]">{produit.nom}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#FAFAFA]">
          <img src={produit.image} alt={produit.nom} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-[#C9A227] mb-2">{produit.categorie}</p>
          <h1 className="text-4xl text-[#6B1F2E] mb-4">{produit.nom}</h1>
          <p className="text-3xl text-[#2B2B2B] mb-8">{produit.prix.toLocaleString("fr-FR")} FCFA</p>
          <div className="mb-8">
            <p className="font-medium text-[#6B1F2E] mb-3">Taille</p>
            <div className="flex gap-3">
              {produit.tailles.map((t) => (
                <button key={t} onClick={() => setTailleChoisie(t)} className={`w-12 h-12 border rounded-md transition ${tailleChoisie === t ? "bg-[#6B1F2E] text-white border-[#6B1F2E]" : "border-[#6B1F2E]/30 text-[#2B2B2B] hover:border-[#6B1F2E]"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <a href={`https://wa.me/2250716444871?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#6B1F2E] text-[#FAFAFA] px-8 py-4 rounded-full hover:bg-[#6B1F2E]/90 transition font-medium">
              Commander sur WhatsApp
            </a>
            <button onClick={handleAddToCart} className={`block w-full text-center border-2 px-8 py-4 rounded-full transition font-medium ${ajoute ? "border-green-600 bg-green-600 text-white" : "border-[#6B1F2E] text-[#6B1F2E] hover:bg-[#6B1F2E] hover:text-[#FAFAFA]"}`}>
              {ajoute ? "Ajouté ! Redirection..." : "Ajouter au panier"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProduitPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Chargement...</div>}>
      <ProduitContent />
    </Suspense>
  );
}
