// app/admin/schools/page.tsx
import { prisma } from '@/app/lib/prisma';

export default async function SchoolsPage() {
  const schools = await prisma.schoolRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">School Requests</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">School Name</th>
            <th className="border p-2">Contact Person</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Grade Needs</th>
            <th className="border p-2">Subjects</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.schoolName}</td>
              <td className="border p-2">{s.contactPerson}</td>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.gradeNeeds}</td>
              <td className="border p-2">{s.subjectsNeeded}</td>
              <td className="border p-2">{new Date(s.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
