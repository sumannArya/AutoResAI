import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoResume AI',
  description: 'AI-powered resume optimization and job matching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
