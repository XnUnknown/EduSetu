// app/admin-login/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Admin Login',
  description: 'Admin login page for EduSetu',
};

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
