'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-blue-900">
      <section className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg shadow-lg border border-blue-200">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
          About EduSetu
        </h1>
        <p className="text-xl leading-relaxed mb-4">
          <strong>EduSetu</strong> is a mission-driven platform that connects college students passionate
          about teaching with underserved rural schools in India. We believe that education is the most
          powerful tool for empowerment and transformation.
        </p>
        <p className="text-xl leading-relaxed mb-4">
          Our model leverages <span className="font-semibold text-blue-700">technology</span>,
          <span className="font-semibold text-blue-700"> volunteerism</span>, and
          <span className="font-semibold text-blue-700"> localized content</span> to ensure every child,
          regardless of geography, has access to quality education.
        </p>
        <p className="text-xl leading-relaxed">
          We are supported by collaborations with <span className="underline text-blue-600">NGOs</span>,
          <span className="underline text-blue-600"> CSR initiatives</span>, and
          <span className="underline text-blue-600"> government programs</span> to maximize outreach and
          impact.
        </p>
      </section>
    </main>
  );
}