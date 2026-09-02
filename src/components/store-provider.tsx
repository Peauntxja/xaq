"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  slug: string;
  quantity: number;
  color: string;
};

type StoreState = {
  cart: CartItem[];
  wishlist: string[];
  compare: string[];
};

type StoreContextValue = StoreState & {
  addToCart: (slug: string, color: string, quantity?: number) => void;
  removeFromCart: (slug: string, color: string) => void;
  setQuantity: (slug: string, color: string, quantity: number) => void;
  toggleWishlist: (slug: string) => void;
  toggleCompare: (slug: string) => void;
  clearCompare: () => void;
  clearCart: () => void;
  cartCount: number;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const STORAGE_KEY = "xaq-store-state";

const initialState: StoreState = { cart: [], wishlist: [], compare: [] };

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoreState>(initialState);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as Partial<StoreState>;
      setState({
        cart: Array.isArray(parsed.cart) ? parsed.cart : [],
        wishlist: Array.isArray(parsed.wishlist) ? parsed.wishlist : [],
        compare: Array.isArray(parsed.compare) ? parsed.compare : []
      });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const api = useMemo<StoreContextValue>(() => {
    const addToCart = (slug: string, color: string, quantity = 1) => {
      setState((current) => {
        const existing = current.cart.find((item) => item.slug === slug && item.color === color);
        if (existing) {
          return {
            ...current,
            cart: current.cart.map((item) =>
              item.slug === slug && item.color === color
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          };
        }
        return { ...current, cart: [...current.cart, { slug, color, quantity }] };
      });
    };

    const removeFromCart = (slug: string, color: string) => {
      setState((current) => ({
        ...current,
        cart: current.cart.filter((item) => !(item.slug === slug && item.color === color))
      }));
    };

    const setQuantity = (slug: string, color: string, quantity: number) => {
      setState((current) => ({
        ...current,
        cart: current.cart.map((item) =>
          item.slug === slug && item.color === color ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      }));
    };

    const toggleWishlist = (slug: string) => {
      setState((current) => ({
        ...current,
        wishlist: current.wishlist.includes(slug)
          ? current.wishlist.filter((item) => item !== slug)
          : [...current.wishlist, slug]
      }));
    };

    const toggleCompare = (slug: string) => {
      setState((current) => ({
        ...current,
        compare: current.compare.includes(slug)
          ? current.compare.filter((item) => item !== slug)
          : [...current.compare, slug].slice(-4)
      }));
    };

    return {
      ...state,
      addToCart,
      removeFromCart,
      setQuantity,
      toggleWishlist,
      toggleCompare,
      clearCompare: () => setState((current) => ({ ...current, compare: [] })),
      clearCart: () => setState((current) => ({ ...current, cart: [] })),
      cartCount: state.cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }, [state]);

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}
