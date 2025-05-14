'use client';

import Link from 'next/link';
import "../variable.css"
export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center navbar" style={{marginBottom:30}}>
      <Link href="/" className="text-2xl font-bold text-blue-700" >EduSetu</Link>
      <nav className="space-x-4">
        <Link href="/about" className="text-black">About</Link>
        <Link href="/volunteer" className="text-black">Volunteer</Link>
        <Link href="/school" className="text-black">School</Link>
        {/* <Link href="/admin" className="text-black">Admin</Link> */}
      </nav>
    </header>
  );
}
