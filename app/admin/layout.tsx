// app/admin/layout.tsx
import type { Metadata } from 'next';
import AuthGuard from '@/app/components/AuthGuard'; // optional: scoped styles for admin

export const metadata: Metadata = {
  title: 'Admin Dashboard | EduSetu',
  description: 'Admin control panel for EduSetu',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <AuthGuard>
          <section className="p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>
            {children}
          </section>
        </AuthGuard>
      </body>
    </html>
  );
}
