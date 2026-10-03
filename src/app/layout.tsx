import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayaditya Dev | Systems, Backend & AI Engineer",
  description:
    "Portfolio of Jayaditya Dev. Systems, Backend, and AI Engineer specializing in FastAPI, PostgreSQL, asynchronous ML inference pipelines, and RAG architectures.",
  authors: [{ name: "Jayaditya Dev", url: "https://github.com/jayadityadev" }],
  openGraph: {
    title: "Jayaditya Dev | Systems, Backend & AI Engineer",
    description:
      "Backend engineer. AI systems. Production-first. Explore real-time backends, deep learning pipelines, and engineering credentials.",
    url: "https://jayadityadev.github.io",
    siteName: "Jayaditya Dev Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-zinc-100 min-h-screen relative antialiased selection:bg-accent/30 selection:text-white">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
