"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, MessageCircle, Eye } from "lucide-react"
import { services, categories } from "@/lib/services-data"
import Image from "next/image"

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        searchQuery === "" ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "all" || categories.find((c) => c.id === selectedCategory)?.name === service.category

      const matchesSubcategory = selectedSubcategory === "all" || service.subcategory === selectedSubcategory

      return matchesSearch && matchesCategory && matchesSubcategory
    })
  }, [searchQuery, selectedCategory, selectedSubcategory])

  const currentCategory = categories.find((c) => c.id === selectedCategory)
  const subcategories = currentCategory?.subcategories || []

  const getWhatsAppLink = (service: (typeof services)[0]) => {
    const message = `Hello eWAKA! I want to book the service: ${service.name} under ${service.category}. Please provide details.`
    return `https://wa.me/256768631473?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Browse Services</h1>
        <p className="text-muted-foreground text-lg">Find the perfect service provider for your needs</p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            className="pl-12 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedSubcategory}
            onValueChange={setSelectedSubcategory}
            disabled={selectedCategory === "all"}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Subcategory" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subcategories</SelectItem>
              {subcategories.map((sub) => (
                <SelectItem key={sub} value={sub}>
                  {sub}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
          >
            <CardContent className="p-6 flex-1">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg leading-tight">{service.name}</h3>
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {service.subcategory}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{service.rating}</span>
                  </div>
                  <div className="text-muted-foreground">{service.price}</div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex gap-2">
              <Link href={`/services/${service.id}`} className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </Link>
              <a href={getWhatsAppLink(service)} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No services found matching your criteria. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  )
}
