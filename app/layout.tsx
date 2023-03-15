import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export const metadata = {
  title: '오늘의 날씨',
  description: '오늘의 날씨를 확인하세요!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
