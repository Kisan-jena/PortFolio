import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './css/globals.css';

import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/layout/navbar';
import Container from '@/components/ui/container';

import { Separator, VerticalLine } from '@/components/ui/separator';

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
      <body className="min-h-screen bg-background  text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative min-h-screen bg-amber-00 mt-2">
            {/* GLOBAL VERTICAL LINES */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="max-w-3xl mx-auto h-full relative">
                <VerticalLine side="left" />
                <VerticalLine side="right" />
              </div>
            </div>

            {/* TOP BORDER */}
            <Separator className="absolute top-0 inset-x-0" />
            <Separator className="absolute top-10 inset-x-0" />

            <Container className="bg-amber-00">

              {/* NAVBAR */}
              <Navbar className="bg-amber-00" />

              {/* PAGE CONTENT */}
              <div className="relative z-10 ">{children}</div>
            </Container>

          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
