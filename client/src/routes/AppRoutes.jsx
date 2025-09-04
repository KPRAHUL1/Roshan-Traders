import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../screens/LoginPage'
import DashboardLayout from '../screens/DashboardLayout'
import ManufacturersPage from '../screens/ManufacturersPage'
import CompaniesPage from '../screens/CompaniesPage'
import TradersPage from '../screens/TradersPage'
import AgentsPage from '../screens/AgentsPage'
import EmployeesPage from '../screens/EmployeesPage'
import { isAuthenticated } from '../lib/auth'

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ManufacturersPage />} />
        <Route path="manufacturers" element={<ManufacturersPage />} />
        <Route path="companies" element={<CompaniesPage />} />
        <Route path="traders" element={<TradersPage />} />
        <Route path="agents" element={<AgentsPage />} />
        <Route path="employees" element={<EmployeesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}


