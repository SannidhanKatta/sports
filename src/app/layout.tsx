import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lilita_One } from "next/font/google";
import { Rowdies } from "next/font/google";
import { createGlobalStyle } from 'styled-components';

const geistSans = Geist({
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
});

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: '400',
});

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Sports Club JBIET",
  description: "Where you can find all the sports events and activities happening in JBIET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rowdies.variable} ${lilitaOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
