import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: '오늘의 날씨',
  description: '오늘의 날씨를 확인하세요!',
  openGraph: {
    title: '오늘의 날씨',
    description: '오늘의 날씨를 확인하세요!',
  },
};

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-nanum-gothic',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-slate-200 ${nanumGothic.variable} font-nanum-gothic`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
