import type { Metadata } from "next";
import { Instrument_Sans, Playfair_Display } from 'next/font/google';
import "./globals.css";

const instrument = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });


export const metadata: Metadata = {
  title: 'RayTech Consultancy',
  description: 'Your partner in digital growth',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${playfair.variable} font-body antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
