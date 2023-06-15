import './globals.css';
import { Inter } from 'next/font/google';
import { AppWrapper } from '@/context/state';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokedex App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <NavBar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
