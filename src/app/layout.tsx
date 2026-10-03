import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayaditya Dev | Systems, Backend & AI Engineer",
  description:
    "Portfolio of Jayaditya Dev. Systems, Backend, and AI Engineer specializing in FastAPI, PostgreSQL, asynchronous ML inference pipelines, and RAG architectures.",
  authors: [{ name: "Jayaditya Dev", url: "https://github.com/jayadityadev" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jayaditya Dev | Systems, Backend & AI Engineer",
    description:
      "Backend engineer. AI systems. Production-first. Explore real-time backends, deep learning pipelines, and engineering credentials.",
    url: "https://jayadityadev.tech",
    siteName: "Jayaditya Dev Portfolio",
    type: "website",
  },
  metadataBase: new URL("https://jayadityadev.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-zinc-100 min-h-screen relative antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-950 font-sans">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
