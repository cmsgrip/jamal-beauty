import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "JamalBeauty - Exquisite Jewelry",
  description: "Discover the finest collection of exquisite jewelry.",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${cinzel.variable} ${lato.variable} font-sans antialiased`}>
        <Header lang={lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
