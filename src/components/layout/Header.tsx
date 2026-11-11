import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#6B1F2E] text-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">JustLik</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-[#C9A227] transition">Accueil</Link>
          <Link href="/boutique" className="hover:text-[#C9A227] transition">Boutique</Link>
          <Link href="/a-propos" className="hover:text-[#C9A227] transition">A propos</Link>
          <Link href="/contact" className="hover:text-[#C9A227] transition">Contact</Link>
        </nav>
        <Link href="/panier" className="hover:text-[#C9A227] transition">Panier</Link>
      </div>
    </header>
  );
}
