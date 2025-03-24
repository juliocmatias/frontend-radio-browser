import type { Metadata } from 'next';

import '@/styles/globals.css';

import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Radio Browser',
  description: 'listen to your favorite radios'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-primary text-white">
        <Header />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
