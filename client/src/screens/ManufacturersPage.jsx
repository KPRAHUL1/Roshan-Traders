import { Card, CardMedia, CardHeader, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
export default function ManufacturersPage() {
  const data = [
    { id: 'm1', name: 'Alpha Bricks Co.', location: 'Pune', products: 12, image: 'https://images.unsplash.com/photo-1581093458791-9d1f8f5b88f8?q=80&w=800&auto=format&fit=crop' },
    { id: 'm2', name: 'SteelMax Sheets', location: 'Nashik', products: 8, image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop' },
  ]
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Manufacturers</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((m) => (
          <Card key={m.id}>
            <CardMedia src={m.image} alt={m.name} />
            <CardHeader title={m.name} subtitle={m.location} action={<Badge color="blue">{m.products} products</Badge>} />
            <CardContent>
              Leading manufacturer in {m.location}. Competitive pricing and reliable delivery.
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


