import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Footer} from "../components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Junior Dev",
  description: "Junior Dev Official Website",
  metadataBase: new URL("https://junior-dev-pages.vercel.app"),
  openGraph: {
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Junior Dev",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          min-h-dvh relative text-white
          bg-[linear-gradient(to_top_right,rgba(1,76,105,0.95),rgba(23,163,188,0.90)),url('/images/background_pattern.svg')]
          flex flex-col
          `}
      >
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
