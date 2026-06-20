import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './css/globals.css';

import { ThemeProvider } from 'next-themes';
import { Lilita_One } from 'next/font/google';

import Navbar from '@/components/navbar/navbar';
import Container from '@/components/ui/container';
import { HorizontalLineSeparator, VerticalLineSeparator } from '../components/ui/separator';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// for Logo
const lilitaOne = Lilita_One({
  variable: '--font-lilita',
  subsets: ['latin'],
  weight: '400', // only weight available
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kisan Kumar jena',
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
        ${lilitaOne.variable}
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
          <main className="relative min-h-screen">
            <div
              className="fixed inset-y-0 mt-2 left-1/2 -translate-x-1/2  pointer-events-none z-30"
              style={{ width: 'min(48rem, 100vw - 2rem)' }}
            >
              <VerticalLineSeparator side="left" />
              <VerticalLineSeparator side="right" />
              <VerticalLineSeparator
                className="left-[-80] w-[0.5px]"
                side="left"
              />
              <VerticalLineSeparator
                className="right-[-80] w-[0.5px]"
                side="right"
              />
            </div>

            {/* STICKY NAV BLOCK */}
            <div className="sticky top-0 bg-background pt-2 bg-white dark:bg-neutral-950 z-20">
              <HorizontalLineSeparator className="mt-0" />
              <Container>
                <Navbar />
              </Container>
              <HorizontalLineSeparator />
              {/* <HorizontalLineSeparator className='top-18' /> */}
            </div>

            {/* PAGE CONTENT */}
            <Container>
              <div>{children}</div>
            </Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
