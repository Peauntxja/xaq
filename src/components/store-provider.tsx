"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { machineProducts } from "@/lib/data";

type CartItem = {
  slug: string;
  quantity: number;
  color: string;
};

export type StoreOrderItem = CartItem & {
  name: string;
  series: string;
  price: number;
  image: string;
};

export type StoreOrder = {
  id: string;
  createdAt: string;
  items: StoreOrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingMethod: string;
  paymentMethod: string;
  status: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
};

type StoreState = {
  cart: CartItem[];
  wishlist: string[];
  compare: string[];
  orders: StoreOrder[];
};

type StoreContextValue = StoreState & {
  addToCart: (slug: string, color: string, quantity?: number) => void;
  removeFromCart: (slug: string, color: string) => void;
  setQuantity: (slug: string, color: string, quantity: number) => void;
  toggleWishlist: (slug: string) => void;
  toggleCompare: (slug: string) => void;
  clearCompare: () => void;
  clearCart: () => void;
  placeOrder: (input: {
    shippingAddress: StoreOrder["shippingAddress"];
    shippingMethod: string;
    paymentMethod: string;
  }) => StoreOrder | null;
  cartCount: number;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const STORAGE_KEY = "xaq-store-state";

const initialState: StoreState = { cart: [], wishlist: [], compare: [], orders: [] };

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
        compare: Array.isArray(parsed.compare) ? parsed.compare : [],
        orders: Array.isArray(parsed.orders) ? parsed.orders : []
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

    const placeOrder = (input: {
      shippingAddress: StoreOrder["shippingAddress"];
      shippingMethod: string;
      paymentMethod: string;
    }) => {
      let placedOrder: StoreOrder | null = null;

      setState((current) => {
        if (!current.cart.length) {
          return current;
        }

        const items = current.cart
          .map((line) => {
            const product = machineProducts.find((entry) => entry.slug === line.slug);
            if (!product) return null;
            return {
              slug: line.slug,
              color: line.color,
              quantity: line.quantity,
              name: product.name,
              series: product.series,
              price: product.price,
              image: product.images[0]
            };
          })
          .filter(Boolean) as StoreOrderItem[];

        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = input.shippingMethod.includes("Express") ? 34 : subtotal >= 499 ? 0 : 18;
        const tax = Math.round(subtotal * 0.085);
        const total = subtotal + shipping + tax;

        placedOrder = {
          id: `HPTA-${Date.now().toString().slice(-6)}`,
          createdAt: new Date().toISOString(),
          items,
          subtotal,
          shipping,
          tax,
          total,
          shippingMethod: input.shippingMethod,
          paymentMethod: input.paymentMethod,
          status: "Processing",
          shippingAddress: input.shippingAddress
        };

        return {
          ...current,
          cart: [],
          orders: [...current.orders, placedOrder]
        };
      });

      return placedOrder;
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
      placeOrder,
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
