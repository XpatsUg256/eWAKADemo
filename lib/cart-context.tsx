"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Service } from "@/lib/services-data"

interface CartContextType {
  items: Service[]
  addItem: (service: Service) => void
  removeItem: (serviceId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Service[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("ewaka-cart")
    if (saved) {
      setItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("ewaka-cart", JSON.stringify(items))
  }, [items])

  const addItem = (service: Service) => {
    setItems((prev) => {
      if (prev.find((item) => item.id === service.id)) {
        return prev
      }
      return [...prev, service]
    })
  }

  const removeItem = (serviceId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== serviceId))
  }

  const clearCart = () => {
    setItems([])
  }

  return <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
