import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profileData } from "@/data/profile";
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
  metadataBase: new URL("https://jayadityadev.tech"),
  title: {
    default: "Jayaditya Dev | Systems, Backend & AI Engineer",
    template: "%s | Jayaditya Dev",
  },
  description:
    "Portfolio of Jayaditya Dev (@jayadityadev) — Systems, Backend, and AI Engineer in Bengaluru. Specializing in FastAPI, PostgreSQL, asynchronous ML inference pipelines, and RAG architectures.",
  applicationName: "Jayaditya Dev Portfolio",
  authors: [{ name: "Jayaditya Dev", url: "https://jayadityadev.tech" }],
  creator: "Jayaditya Dev",
  publisher: "Jayaditya Dev",
  keywords: [
    "Jayaditya Dev",
    "jayadityadev",
    "Jayaditya Dev Portfolio",
    "Jayaditya Dev Bengaluru",
    "jayadityadev.tech",
    "Systems Engineer",
    "Backend Engineer",
    "AI Systems Engineer",
    "FastAPI Engineer",
    "7HiddenLayers",
    "Bengaluru Software Engineer",
  ],
  alternates: {
    canonical: "https://jayadityadev.tech",
  },
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
      "Backend engineer. AI systems. Production-first. Explore real-time backends, deep learning pipelines, and engineering credentials by Jayaditya Dev (@jayadityadev).",
    url: "https://jayadityadev.tech",
    siteName: "Jayaditya Dev Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avatar-colored-dark.jpg",
        width: 800,
        height: 800,
        alt: "Jayaditya Dev | Systems, Backend & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayaditya Dev | Systems, Backend & AI Engineer",
    description:
      "Backend engineer. AI systems. Production-first. Explore real-time backends, deep learning pipelines, and engineering credentials by Jayaditya Dev (@jayadityadev).",
    images: ["/avatar-colored-dark.jpg"],
    creator: "@jayadityadev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sameAsLinks = [
    profileData.links.github,
    profileData.links.linkedin,
    profileData.links.youtube,
    profileData.links.instagram,
    profileData.links.twitter,
  ].filter(Boolean) as string[];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    alternateName: ["jayadityadev", "Jayaditya Dev", "Jayaditya"],
    url: "https://jayadityadev.tech",
    image: "https://jayadityadev.tech/avatar-colored-dark.jpg",
    jobTitle: "Systems, Backend & AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "7HiddenLayers",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: profileData.education.institution,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    email: `mailto:${profileData.email}`,
    sameAs: sameAsLinks,
    knowsAbout: [
      "Systems Engineering",
      "Backend Engineering",
      "FastAPI",
      "PostgreSQL",
      "Distributed Systems",
      "Artificial Intelligence",
      "Retrieval-Augmented Generation (RAG)",
      "Asynchronous ML Pipelines",
      "Cybersecurity",
    ],
    description: profileData.summary,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jayaditya Dev Portfolio",
    alternateName: ["jayadityadev.tech", "jayadityadev"],
    url: "https://jayadityadev.tech",
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-background text-zinc-100 min-h-screen relative antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-950 font-sans">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
