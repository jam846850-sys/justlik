import Link from "next/link";

export default function AProposPage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl text-[#6B1F2E] mb-12 text-center">Notre histoire</h1>
      <div className="space-y-6 text-lg leading-relaxed text-[#2B2B2B]">
        <p className="text-2xl text-[#6B1F2E] font-playfair">Ma mère avait une seule belle robe.</p>
        <p>Elle la portait pour les mariages, les baptêmes, les grandes occasions. Le reste du temps, elle s'habillait avec ce qu'elle avait. Elle ne se plaignait jamais.</p>
        <p>Un jour, je l'ai entendue dire à ma tante, à voix basse : <span className="font-medium text-[#6B1F2E]">« Je n'ai rien à me mettre. »</span> Elle avait dit ça comme on s'excuse. Comme si c'était de sa faute.</p>
        <p>Ce jour-là, je me suis promis quelque chose : <span className="font-medium text-[#6B1F2E]">aucune femme ne devrait avoir honte de ce qu'elle porte.</span></p>
        <p className="text-2xl text-[#6B1F2E] font-playfair pt-4">JustLik est né de cette promesse.</p>
        <p>Des tenues choisies avec soin, à prix justes, pour que chaque femme puisse se tenir droite, sans s'excuser.</p>
        <p>Parce que ma mère méritait mieux. <br/><span className="font-medium text-[#6B1F2E]">Et vous aussi.</span></p>
      </div>
      <div className="text-center mt-16">
        <Link href="/boutique" className="inline-block bg-[#6B1F2E] text-white px-8 py-3 rounded-full hover:bg-[#6B1F2E]/90 transition">
          Découvrir la boutique
        </Link>
      </div>
    </div>
  );
}
