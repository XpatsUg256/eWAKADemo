"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Service } from "@/lib/services-data"
import { useState, useEffect } from "react"

export function AddToCartButton({ service }: { service: Service }) {
  const { items, addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    setIsAdded(items.some((item) => item.id === service.id))
  }, [items, service.id])

  const handleAdd = () => {
    addItem(service)
    setIsAdded(true)
  }

  return (
    <Button size="lg" variant="outline" onClick={handleAdd} disabled={isAdded} className="flex-1 bg-transparent">
      {isAdded ? (
        <>
          <Check className="h-5 w-5 mr-2" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Multi-Booking
        </>
      )}
    </Button>
  )
}
