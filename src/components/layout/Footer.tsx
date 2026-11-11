export default function Footer() {
  return (
    <footer className="bg-[#6B1F2E] text-[#FAFAFA] mt-20 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl mb-2">JustLik</h3>
          <p className="text-sm opacity-80">Juste ce que vous aimez.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Liens</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Accueil</li>
            <li>Boutique</li>
            <li>A propos</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm opacity-80">Abidjan, Cote d'Ivoire</p>
        </div>
      </div>
      <div className="text-center text-xs opacity-60 mt-8">
        © 2026 JustLik.
      </div>
    </footer>
  );
}
