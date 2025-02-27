import DashboardLayout from '../components/layouts/DashboardLayout';

export default function DashboardUsuario() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Mi Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Contenido del dashboard de usuario */}
      </div>
    </DashboardLayout>
  );
} 