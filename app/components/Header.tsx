'use client';

import Link from 'next/link';
import "../variable.css"
export default function Header() {
  return (
<header className="bg-white shadow-sm py-4 px-6 flex flex-col sm:flex-row justify-between items-center navbar gap-4 sm:gap-0" style={{ marginBottom: 30 }}>
  <Link href="/" className="text-2xl font-bold text-blue-700 text-center sm:text-left break-words">
    EduSetu
  </Link>
  
  <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
    <Link href="/about" className="text-black whitespace-nowrap">About</Link>
    <Link href="/volunteer" className="text-black whitespace-nowrap">Volunteer</Link>
    <Link href="/school" className="text-black whitespace-nowrap">School</Link>
    {/* <Link href="/admin" className="text-black">Admin</Link> */}
  </nav>
</header>
  );
}
