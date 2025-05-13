'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('admin-token'); // Simplified check
    if (user === 'secret123') {
      setIsAuthenticated(true);
    } else {
      router.push('/');
    }
  }, []);

  if (isAuthenticated === null) return <p>Checking auth...</p>;

  return <>{children}</>;
}