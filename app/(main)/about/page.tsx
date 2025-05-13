'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About EduSetu</h1>
        <p className="text-lg text-gray-700 mb-4">
          EduSetu is a mission-driven platform that connects college students passionate about teaching
          with underserved rural schools in India. We believe that education is the most powerful tool
          for empowerment and transformation.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our model leverages technology, volunteerism, and localized content to ensure every child,
          regardless of geography, has access to quality education.
        </p>
        <p className="text-lg text-gray-700">
          We are supported by collaborations with NGOs, CSR initiatives, and government programs to
          maximize outreach and impact.
        </p>
      </section>
    </main>
  );
}
