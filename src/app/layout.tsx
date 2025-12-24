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
  openGraph: {
    images: [
      {
        url: "/logo.png",
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
          bg-[url(/images/background.svg)] min-h-dvh relative
        `}
      >
        {children}
        <Footer className="fixed left-3 bottom-3"/>
      </body>
    </html>
  );
}
