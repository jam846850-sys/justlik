export type Product = {
  id: number;
  nom: string;
  prix: number;
  image: string;
  categorie: string;
  tailles: string[];
};

export const products: Product[] = [
  // METS TES NOUVEAUX ARTICLES ICI EN DESSOUS DE CETTE LIGNE
  { id: 1, nom: "Ma Nouvelle Robe", prix: 20000, image: "https://i.imgur.com/TON-LIEN.jpg", categorie: "Robes", tailles: ["S", "M", "L"] },
  
];