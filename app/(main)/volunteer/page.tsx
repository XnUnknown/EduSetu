'use client';

import { useState } from 'react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjectExpertise: '',
    availability: ''
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
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('✅ Volunteer registered successfully!');
        setFormData({ name: '', email: '', subjectExpertise: '', availability: '' });
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
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Become a Volunteer Educator</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
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
          <label className="block font-medium mb-1">Subject You Want to Teach</label>
          <input
            type="text"
            name="subjectExpertise"
            required
            value={formData.subjectExpertise}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Availability</label>
          <textarea
            name="availability"
            rows={3}
            required
            value={formData.availability}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            placeholder="E.g. Weekends only, 2–4 PM daily, holidays only etc."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
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
