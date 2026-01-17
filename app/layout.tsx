import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lukas Schroeder | Portfolio',
  description: 'Photography and Videography Portfolio of Lukas Schroeder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Lukas Schroeder. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
