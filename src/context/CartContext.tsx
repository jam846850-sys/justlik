"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  id: number;
  nom: string;
  prix: number;
  image: string;
  taille: string;
  quantite: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantite">) => void;
  removeItem: (id: number, taille: string) => void;
  updateQuantity: (id: number, taille: string, quantite: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("justlik-cart");
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch (e) {}
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("justlik-cart", JSON.stringify(items));
  }, [items, loaded]);

  const addItem = (newItem: Omit<CartItem, "quantite">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id && i.taille === newItem.taille);
      if (existing) {
        return prev.map((i) => i.id === newItem.id && i.taille === newItem.taille ? { ...i, quantite: i.quantite + 1 } : i);
      }
      return [...prev, { ...newItem, quantite: 1 }];
    });
  };

  const removeItem = (id: number, taille: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.taille === taille)));
  };

  const updateQuantity = (id: number, taille: string, quantite: number) => {
    if (quantite < 1) return removeItem(id, taille);
    setItems((prev) => prev.map((i) => i.id === id && i.taille === taille ? { ...i, quantite } : i));
  };

  const clearCart = () => setItems([]);
  const total = items.reduce((sum, i) => sum + i.prix * i.quantite, 0);
  const count = items.reduce((sum, i) => sum + i.quantite, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart doit etre dans un CartProvider");
  return context;
}
