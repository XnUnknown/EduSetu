import AuthGuard from '@/app/components/AuthGuard';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <section className="min-h-screen p-8 bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>
        {children}
      </section>
    </AuthGuard>
  );
}