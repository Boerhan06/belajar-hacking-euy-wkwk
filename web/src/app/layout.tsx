import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CourseProvider } from '@/context/CourseContext';
import { Navbar } from '@/components/Navbar';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'NikoCode — Kursus Keamanan Siber Lokal',
  description:
    'Platform pembelajaran keamanan siber lokal NikoCode bergaya kursus profesional dengan peta belajar cepat, kuis interaktif, tanya jawab, dan contekan perintah.',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#FAF3E8] text-[#1E1B18] antialiased selection:bg-[#FFB067] selection:text-[#1E1B18]">
        <CourseProvider>
          <div className="flex min-h-screen flex-col lg:flex-row">
            <Navbar />
            <main className="flex-1 min-w-0 px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
              <div className="mx-auto max-w-[1200px]">{children}</div>
            </main>
          </div>
        </CourseProvider>
      </body>
    </html>
  );
}
