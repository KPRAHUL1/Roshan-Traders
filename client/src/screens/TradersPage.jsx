import { Card, CardMedia, CardHeader } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
export default function TradersPage() {
  const data = [
    { id: 't1', name: 'Om Traders', category: 'Cement', image: 'https://images.unsplash.com/photo-1596079890684-cfdc3e0f4b3b?q=80&w=800&auto=format&fit=crop' },
    { id: 't2', name: 'Shree Suppliers', category: 'Pipes', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop' },
  ]
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Traders</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((t) => (
          <Card key={t.id}>
            <CardMedia src={t.image} alt={t.name} />
            <CardHeader title={t.name} subtitle={t.category} action={<Badge color="green">Top rated</Badge>} />
          </Card>
        ))}
      </div>
    </section>
  )
}


