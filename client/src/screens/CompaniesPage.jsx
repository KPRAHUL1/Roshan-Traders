import { Card, CardMedia, CardHeader } from '../components/ui/Card'
import Button from '../components/ui/Button'
export default function CompaniesPage() {
  const data = [
    { id: 'c1', name: 'BuildRight Constructions', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop' },
    { id: 'c2', name: 'Skyline Infra', city: 'Pune', image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=800&auto=format&fit=crop' },
  ]
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Companies</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((c) => (
          <Card key={c.id}>
            <CardMedia src={c.image} alt={c.name} />
            <CardHeader title={c.name} subtitle={c.city} action={<Button variant="secondary">View</Button>} />
          </Card>
        ))}
      </div>
    </section>
  )
}


