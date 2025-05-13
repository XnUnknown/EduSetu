'use client';

import { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkPassword = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      setError('Incorrect password');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [volRes, schoolRes] = await Promise.all([
        fetch('/api/admin/volunteers'),
        fetch('/api/admin/schools')
      ]);

      const vols = await volRes.json();
      const schs = await schoolRes.json();

      setVolunteers(vols);
      setSchools(schs);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data.');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto mt-20">
        <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-2"
        />
        <button onClick={checkPassword} className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
        {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Volunteer Submissions</h2>
            {volunteers.length === 0 ? (
              <p>No volunteer data available.</p>
            ) : (
              <div className="overflow-auto">
                <table className="table-auto w-full border text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Subjects</th>
                      <th className="px-4 py-2 border">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.map((v: any, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-2 border">{v.name}</td>
                        <td className="px-4 py-2 border">{v.email}</td>
                        <td className="px-4 py-2 border">{v.subjects}</td>
                        <td className="px-4 py-2 border">{v.availability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">School Requests</h2>
            {schools.length === 0 ? (
              <p>No school data available.</p>
            ) : (
              <div className="overflow-auto">
                <table className="table-auto w-full border text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border">School</th>
                      <th className="px-4 py-2 border">Contact</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Grades</th>
                      <th className="px-4 py-2 border">Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schools.map((s: any, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-2 border">{s.schoolName}</td>
                        <td className="px-4 py-2 border">{s.contactPerson}</td>
                        <td className="px-4 py-2 border">{s.email}</td>
                        <td className="px-4 py-2 border">{s.gradeNeeds}</td>
                        <td className="px-4 py-2 border">{s.subjectsNeeded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default AdminPanel;