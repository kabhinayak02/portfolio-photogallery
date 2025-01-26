import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Photo Portfolio',
  description: 'Showcase of photographic work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="text-center py-4 text-gray-500">
            © {new Date().getFullYear()} Photo Portfolio
          </footer>
        </div>
      </body>
    </html>
  );
}