import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import LanguageProvider from '@/context/LanguageContext';
import StoreProvider from './StoreProvider';
import { Suspense } from 'react';
import Loading from './loading';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* init Loading */}
      <Suspense fallback={<Loading />}>
        {/* childrennya body karena mencakup semua page */}
        <StoreProvider>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <LanguageProvider>
              <Navbar />
              {children}
            </LanguageProvider>
          </body>
        </StoreProvider>
      </Suspense>
    </html>
  );
}
