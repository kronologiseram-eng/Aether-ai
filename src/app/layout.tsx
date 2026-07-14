import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aether AI - The Future of Intelligent Automation',
  description:
    'Harness the power of advanced AI to automate, optimize, and transform your business operations with unprecedented intelligence and speed.',
  keywords: [
    'AI',
    'Artificial Intelligence',
    'Automation',
    'Machine Learning',
    'SaaS',
    'Cloud',
    'Deep Learning',
  ],
  authors: [{ name: 'Aether AI' }],
  creator: 'Aether AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aether-ai.com',
    siteName: 'Aether AI',
    title: 'Aether AI - The Future of Intelligent Automation',
    description:
      'Harness the power of advanced AI to automate, optimize, and transform your business operations with unprecedented intelligence and speed.',
    images: [
      {
        url: 'https://aether-ai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aether AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aether AI - The Future of Intelligent Automation',
    description:
      'Harness the power of advanced AI to automate, optimize, and transform your business operations with unprecedented intelligence and speed.',
    images: ['https://aether-ai.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#030303" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white antialiased">
        <div className="relative min-h-screen bg-gradient-to-b from-black via-black to-gray-900">
          {/* Animated background elements */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
