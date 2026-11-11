export default function ContactPage() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl text-[#6B1F2E] mb-4 text-center">Nous contacter</h1>
      <p className="text-center text-[#2B2B2B]/70 mb-12">Une question ? Une commande ? On vous répond rapidement.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <a href="https://wa.me/2250716444871" target="_blank" rel="noopener noreferrer" className="bg-[#FAFAFA] rounded-lg p-8 text-center hover:shadow-md transition">
          <div className="text-5xl mb-4">📲</div>
          <h2 className="text-xl text-[#6B1F2E] mb-2 font-medium">WhatsApp</h2>
          <p className="text-sm text-[#2B2B2B]/70 mb-4">Le plus rapide pour commander</p>
          <p className="text-[#6B1F2E] font-medium">+225 07 07 07 07 07</p>
        </a>

        <div className="bg-[#FAFAFA] rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">✉️</div>
          <h2 className="text-xl text-[#6B1F2E] mb-2 font-medium">Email</h2>
          <p className="text-sm text-[#2B2B2B]/70 mb-4">Pour les demandes détaillées</p>
          <p className="text-[#6B1F2E] font-medium">justlik95@gmail.com</p>
        </div>
      </div>

      <div className="bg-[#FAFAFA] rounded-lg p-8">
        <h2 className="text-xl text-[#6B1F2E] mb-6 font-medium">Informations</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-[#2B2B2B]/80">
          <div>
            <p className="font-medium mb-1">Zone de livraison</p>
            <p>Abidjan et partout en Côte d'Ivoire</p>
          </div>
          <div>
            <p className="font-medium mb-1">Horaires</p>
            <p>Lundi - Samedi : 8h - 20h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
