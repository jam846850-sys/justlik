"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl text-[#6B1F2E] mb-4">Votre panier</h1>
        <p className="text-[#2B2B2B]/70 mb-8">Votre panier est vide.</p>
        <Link href="/boutique" className="inline-block bg-[#6B1F2E] text-[#FAFAFA] px-8 py-3 rounded-full hover:bg-[#6B1F2E]/90 transition">
          Voir la boutique
        </Link>
      </div>
    );
  }

  let message = "Bonjour JustLik, je souhaite commander :\n\n";
  items.forEach((item) => {
    message += `- ${item.nom} (Taille ${item.taille}) x${item.quantite} : ${(item.prix * item.quantite).toLocaleString("fr-FR")} FCFA\n`;
  });
  message += `\nSous-total : ${total.toLocaleString("fr-FR")} FCFA\n`;
  message += "Merci de me confirmer la livraison !";

  const whatsappUrl = `https://wa.me/2250716444871?text=${encodeURIComponent(message)}`;

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl text-[#6B1F2E] mb-8">Votre panier</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id + "-" + item.taille} className="bg-[#FAFAFA] rounded-lg p-4 flex gap-4">
              <img src={item.image} alt={item.nom} className="w-24 h-32 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="text-[#6B1F2E] font-medium text-lg">{item.nom}</h3>
                <p className="text-sm text-[#2B2B2B]/60 mb-2">Taille : {item.taille}</p>
                <p className="font-medium mb-3">{item.prix.toLocaleString("fr-FR")} FCFA</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => updateQuantity(item.id, item.taille, item.quantite - 1)} className="px-3 py-1">-</button>
                    <span className="px-4">{item.quantite}</span>
                    <button onClick={() => updateQuantity(item.id, item.taille, item.quantite + 1)} className="px-3 py-1">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id, item.taille)} className="text-sm text-red-600 underline">Supprimer</button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-sm text-[#2B2B2B]/60 underline">Vider le panier</button>
        </div>
        <div className="bg-[#FAFAFA] p-6 rounded-lg h-fit">
          <h2 className="text-xl text-[#6B1F2E] mb-4">Récapitulatif</h2>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-medium text-[#6B1F2E]">{total.toLocaleString("fr-FR")} FCFA</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#25D366] text-white px-6 py-4 rounded-full hover:bg-[#1EBE5A] font-medium">
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
