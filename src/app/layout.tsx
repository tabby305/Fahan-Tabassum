import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fahan Tabassum | Developer",
  description:
    "Portfolio of Fahan Tabassum — Computer Science undergraduate '27 concentrating in Artificial Intelligence & Machine Learning. Building reliable, scalable applications with a focus on clean backend systems.",
  authors: [{ name: "Fahan Tabassum" }],
  keywords: [
    "Fahan Tabassum",
    "Portfolio",
    "Computer Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "React",
    "Developer",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
