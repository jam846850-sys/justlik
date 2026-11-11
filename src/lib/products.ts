export type Product = {
  id: number;
  nom: string;
  prix: number;
  image: string;
  categorie: string;
  tailles: string[];
};

export const products: Product[] = [
  { id: 1, nom: "Robe Awa", prix: 15000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", categorie: "Robes", tailles: ["S", "M", "L"] },
  { id: 2, nom: "Ensemble Sinaya", prix: 22000, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600", categorie: "Ensembles", tailles: ["S", "M", "L", "XL"] },
  { id: 3, nom: "Top Léa", prix: 8000, image: "https://images.unsplash.com/photo-1564257577054-58d1a2c1a3c8?w=600", categorie: "Tops", tailles: ["S", "M"] },
  { id: 4, nom: "Jupe Numa", prix: 12000, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600", categorie: "Jupes", tailles: ["S", "M", "L"] },
  { id: 5, nom: "Robe Bella", prix: 18000, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", categorie: "Robes", tailles: ["M", "L", "XL"] },
  { id: 6, nom: "Ensemble Aya", prix: 25000, image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600", categorie: "Ensembles", tailles: ["S", "M", "L"] },
];
