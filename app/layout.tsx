import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui-header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prajwal Joshi | Frontend & Full-Stack Developer",
  description:
    "Frontend Engineer with 3+ years of experience building high-performance web applications with React, Next.js, and TypeScript.",
  metadataBase: new URL("https://prajwaljoshi.dev"),
  openGraph: {
    title: "Prajwal Joshi | Frontend & Full-Stack Developer",
    description:
      "Frontend Engineer with 3+ years of experience building high-performance web applications with React, Next.js, and TypeScript.",
    url: "https://prajwaljoshi.dev",
    siteName: "Prajwal Joshi",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prajwal Joshi — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal Joshi | Frontend & Full-Stack Developer",
    description:
      "Frontend Engineer building web apps with React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${inter.variable} antialiased text-base leading-relaxed overflow-x-hidden font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen w-full pt-14">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
