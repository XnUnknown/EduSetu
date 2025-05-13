'use client';

import { useState } from 'react';

export default function SchoolPage() {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    gradeNeeds: '',
    subjectsNeeded: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('/api/school', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('✅ School request submitted successfully!');
        setFormData({
          schoolName: '',
          contactPerson: '',
          email: '',
          gradeNeeds: '',
          subjectsNeeded: '',
          message: '',
        });
      } else {
        setStatus(`❌ Error: ${data.error || 'Something went wrong.'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to submit. Try again.');
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Request a Volunteer Teacher</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">School/NGO Name</label>
          <input
            type="text"
            name="schoolName"
            required
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Contact Person Name</label>
          <input
            type="text"
            name="contactPerson"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Grades Needed</label>
          <input
            type="text"
            name="gradeNeeds"
            placeholder="E.g. Class 5-8"
            required
            value={formData.gradeNeeds}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Subjects Needed</label>
          <input
            type="text"
            name="subjectsNeeded"
            placeholder="E.g. Math, Science"
            required
            value={formData.subjectsNeeded}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Additional Message</label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit Request
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-gray-700">
          {status}
        </p>
      )}
    </section>
  );
}
