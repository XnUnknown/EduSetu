'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-700">EduSetu</Link>
      <nav className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/school">School</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}
