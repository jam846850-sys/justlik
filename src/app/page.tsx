import Link from "next/link";

const produits = [
  { id: 1, nom: "Robe Awa", prix: 15000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600" },
  { id: 2, nom: "Ensemble Sinaya", prix: 22000, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600" },
  { id: 3, nom: "Top Léa", prix: 8000, image: "https://images.unsplash.com/photo-1564257577054-58d1a2c1a3c8?w=600" },
  { id: 4, nom: "Jupe Numa", prix: 12000, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600" },
  { id: 5, nom: "Robe Bella", prix: 18000, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600" },
  { id: 6, nom: "Ensemble Aya", prix: 25000, image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600" },
];

export default function Home() {
  return (
    <>
      <div className="bg-[#C9A227] text-[#2B2B2B] text-center text-sm py-2 px-4">
        Livraison partout en Côte d'Ivoire — Commande simple sur WhatsApp
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#6B1F2E] mb-6">
            Juste ce que vous aimez.
          </h1>
          <p className="text-lg md:text-xl text-[#2B2B2B]/80 mb-8 max-w-2xl mx-auto">
            Des tenues choisies avec soin, à prix justes. Pour que chaque femme se tienne droite, sans s'excuser.
          </p>
          <Link href="/boutique" className="bg-[#6B1F2E] text-[#FAFAFA] px-8 py-3 rounded-full hover:bg-[#6B1F2E]/90 transition">
            Découvrir la boutique
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#C9A227] mb-4">Notre histoire</p>
          <p className="text-2xl md:text-3xl text-[#6B1F2E] leading-relaxed mb-8">
            Ma mère avait une seule belle robe. Un jour, je l'ai entendue dire : "Je n'ai rien à me mettre." Ce jour-là, j'ai promis : aucune femme ne devrait avoir honte de ce qu'elle porte.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#6B1F2E] mb-3">Nouveautés</h2>
            <p className="text-[#2B2B2B]/70">Les dernières pièces arrivées</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {produits.map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-[#FAFAFA]">
                  <img src={p.image} alt={p.nom} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h3 className="text-[#6B1F2E] font-medium">{p.nom}</h3>
                <p className="text-[#2B2B2B]/70 text-sm">{p.prix.toLocaleString("fr-FR")} FCFA</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
