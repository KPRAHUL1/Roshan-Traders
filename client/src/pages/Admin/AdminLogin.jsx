import SuperAdminLogin from '../Login/components/SuperAdminLogin'

export default function AdminLogin() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="mx-auto max-w-xl px-4 py-12">
        <div className="overflow-hidden rounded-2xl border bg-white shadow-xl p-8">
          <SuperAdminLogin />
        </div>
      </div>
    </div>
  )
}


