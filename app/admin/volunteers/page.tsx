// app/admin/volunteers/page.tsx
import { prisma } from '@/app/lib/prisma';

export default async function VolunteersPage() {
  const volunteers = await prisma.volunteer.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Volunteer Requests</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Expertise</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((v) => (
            <tr key={v.id}>
              <td className="border p-2">{v.name}</td>
              <td className="border p-2">{v.email}</td>
              <td className="border p-2">{v.availability}</td>
              <td className="border p-2">{v.subjectExpertise}</td>
              <td className="border p-2">{new Date(v.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}