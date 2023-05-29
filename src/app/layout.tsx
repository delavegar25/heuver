import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Heuvera',
  description: 'Your gateway to remarkable properties, hotels, and apartments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
