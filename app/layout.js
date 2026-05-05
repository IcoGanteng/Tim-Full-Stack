import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'HealthTracker - Your Personal Health Companion',
  description: 'Track your steps, calories, sleep, and hydration with our beautiful health tracking app.',
  openGraph: {
    title: 'HealthTracker - Your Personal Health Companion',
    description: 'Track your steps, calories, sleep, and hydration with our beautiful health tracking app.',
    type: 'website',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}