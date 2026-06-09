import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui-header";
import SiteFooter from "@/components/ui-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prajwal Joshi | Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer with 3+ years of experience building web applications end-to-end — from UI to backend — with React, Next.js, Node.js, and TypeScript.",
  metadataBase: new URL("https://prajwaljoshi.dev"),
  openGraph: {
    title: "Prajwal Joshi | Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer with 3+ years of experience building web applications end-to-end — from UI to backend — with React, Next.js, Node.js, and TypeScript.",
    url: "https://prajwaljoshi.dev",
    siteName: "Prajwal Joshi",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prajwal Joshi — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal Joshi | Frontend & Full-Stack Developer",
    description: "Full-Stack Software Developer building web apps end-to-end with React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen w-full pt-[60px]">{children}</main>
          <SiteFooter />
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
