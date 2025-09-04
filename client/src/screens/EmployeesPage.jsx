import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

export default function EmployeesPage() {
  const data = [
    { id: 'e1', name: 'Sanjay (Driver)', status: 'Available', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' },
    { id: 'e2', name: 'Karan (Loader)', status: 'On Job', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' },
  ]
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Employees</h2>
      <ul className="space-y-3">
        {data.map((e) => (
          <li key={e.id}>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={e.image} alt={e.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">{e.name}</div>
                    <div className="text-sm text-gray-600"><Badge color={e.status === 'Available' ? 'green' : 'amber'}>{e.status}</Badge></div>
                  </div>
                </div>
                <Button variant="secondary">Assign</Button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}


