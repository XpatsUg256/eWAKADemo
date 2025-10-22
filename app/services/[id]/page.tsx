import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, ArrowLeft, Play } from "lucide-react"
import { services } from "@/lib/services-data"
import Link from "next/link"
import { AddToCartButton } from "@/components/add-to-cart-button"

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const getWhatsAppLink = () => {
    const message = `Hello eWAKA! I want to book the service: ${service.name} under ${service.category}. Please provide details.`
    return `https://wa.me/256768631473?text=${encodeURIComponent(message)}`
  }

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop()
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/services">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div>
          <div className="relative h-96 rounded-xl overflow-hidden bg-muted mb-6">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {service.videoUrl && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  Service Demo Video
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={getYouTubeEmbedUrl(service.videoUrl)}
                    title={`${service.name} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Video Placeholder */}
          {!service.videoUrl && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Service Demo Video</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video coming soon</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl font-bold text-balance">{service.name}</h1>
              <span className="text-5xl">{service.icon}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="text-sm">
                {service.category}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {service.subcategory}
              </Badge>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-secondary text-secondary" />
                <span className="font-semibold text-lg">{service.rating}</span>
                <span className="text-muted-foreground">/5.0</span>
              </div>
              <div className="text-lg font-semibold text-primary">{service.price}</div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Professional and experienced service provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>All necessary equipment and materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Flexible scheduling to fit your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Quality guarantee and customer support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book via WhatsApp
              </Button>
            </a>
            <AddToCartButton service={service} />
          </div>
        </div>
      </div>
    </div>
  )
}
