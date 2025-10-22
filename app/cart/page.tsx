"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageCircle, Trash2, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart()

  const getWhatsAppMultiOrderLink = () => {
    if (items.length === 0) return "#"

    let message = "Hello eWAKA! I'd like to book the following services:\n\n"

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Category: ${item.category}\n`
      message += `   Price: ${item.price}\n\n`
    })

    message += "Please provide details and total cost. Thank you!"

    return `https://wa.me/256768631473?text=${encodeURIComponent(message)}`
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">Your Multi-Booking Cart</h1>
          <Card>
            <CardContent className="p-12">
              <p className="text-muted-foreground text-lg mb-6">
                Your cart is empty. Add services to create a multi-booking.
              </p>
              <Link href="/services">
                <Button size="lg">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Browse Services
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/services">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-2">Your Multi-Booking Cart</h1>
        <p className="text-muted-foreground">Review your selected services and book them all at once</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead className="w-[100px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">{item.subcategory}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{item.category}</TableCell>
                        <TableCell className="font-medium">{item.price}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-4">
                {items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.price}</span>
                            <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Total Services</span>
                    <span>{items.length}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Final pricing will be confirmed via WhatsApp based on your specific requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a href={getWhatsAppMultiOrderLink()} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Book All via WhatsApp
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="w-full bg-transparent" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
