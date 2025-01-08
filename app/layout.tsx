import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Montserrat } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], // Add more subsets if needed
  weight: ['400', '700'], // Specify desired weights
  display: 'swap', // Optimize font loading
});

const montserrat = Montserrat({
  subsets: ['latin'], // Add more subsets if needed
  weight: ['400', '600', '700'], // Specify desired weights
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  title: "Taiwo Oladosu",
  description: "A Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfairDisplay.className} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
