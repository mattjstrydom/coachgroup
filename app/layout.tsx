import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://coachgroup.co.za'),
  title: {
    default: 'Coach Group | Community Coaching Programme South Africa',
    template: '%s | Coach Group',
  },
  description:
    'Coach Group offers a Community Coaching Programme in South Africa focused on leadership, coaching, mentoring, and practical community development.',
  keywords: [
    'Coach Group',
    'community coaching programme',
    'South Africa coaching programme',
    'coaching and mentoring',
    'community development',
    'leadership development',
    'accredited coaching course',
  ],
  openGraph: {
    title: 'Coach Group | Creating a Conducive Community',
    description:
      'A Community Coaching Programme that empowers people to take responsibility for the enhancement and development of their own communities.',
    url: 'https://coachgroup.co.za',
    siteName: 'Coach Group',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coach Group | Creating a Conducive Community',
    description:
      'Community Coaching Programme for leadership, mentoring, and practical community development in South Africa.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-stone-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
