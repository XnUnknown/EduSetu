'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'; // optional if you have custom styles

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          EduSetu – Bridging the Education Divide
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          A youth-driven platform connecting college students with rural schools
          to ensure access to quality education for every child in India.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/volunteer">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Become a Volunteer
            </button>
          </Link>
          <Link href="/school">
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">
              Register a School
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/education_connect.jpg"
            alt="Connecting Educators"
            width={600}
            height={400}
            className="rounded shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Why EduSetu?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Connects student volunteers with rural schools</li>
            <li>Supports online, offline, and video-based teaching</li>
            <li>Localized, multilingual learning content</li>
            <li>Progress tracking and impact insights</li>
            <li>Certificates and badges for volunteers</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Empowering Change Through Education
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            EduSetu isn't just an app—it's a mission. With the help of student
            volunteers, CSR partners, NGOs, and governments, we’re making
            quality education a reality for every child, no matter where they
            live.
          </p>
          <Link href="/about">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EduSetu. All rights reserved.
      </footer>
    </main>
  );
}
