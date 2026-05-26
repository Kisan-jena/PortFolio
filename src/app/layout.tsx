import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './css/globals.css';

import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/layout/navbar';
import Container from '@/components/ui/container';
import { HorizontalLineSeparator, VerticalLineSeparator } from '../components/ui/separator';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kisan Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden pt-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative min-h-screen bg-amber-300 pt-0">

            {/* VERTICAL LINES — fixed, always visible */}
            <div
              className="fixed inset-y-0 mt-2 left-1/2 -translate-x-1/2  pointer-events-none z-30"
              style={{ width: 'min(48rem, 100vw - 2rem)' }}
            >
              <VerticalLineSeparator side="left" />
              <VerticalLineSeparator side="right" />
            </div>

            {/* STICKY NAV BLOCK */}
            <div className="sticky top-0 bg-background pt-2 bg-neutral-300 z-20">
              <HorizontalLineSeparator className="mt-0" />
              <Container>
                <Navbar className='bg-amber-400'/>
              </Container>
              <HorizontalLineSeparator />
            </div>

            {/* PAGE CONTENT */}
            <Container>
              <div className="relative z-10">{children}</div>
            </Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
