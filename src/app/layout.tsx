import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://andresarcela.com";

const title = "Andres Arcela — Senior Full Stack & Mobile Engineer";
const description =
  "Senior Full Stack & Mobile Engineer (MBA) with 10+ years building React Native, Ionic, and B2B SaaS. Open to full-time roles and freelance work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Andres Arcela",
  },
  description,
  applicationName: "Andres Arcela Portfolio",
  authors: [{ name: "Andres Arcela", url: siteUrl }],
  creator: "Andres Arcela",
  publisher: "Andres Arcela",
  keywords: [
    "Andres Arcela",
    "Full Stack Engineer",
    "Mobile Engineer",
    "React Native",
    "Ionic",
    "Angular",
    "NestJS",
    "B2B SaaS",
    "Freelance Developer",
    "Software Engineer Venezuela",
    "Lead Software Engineer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: siteUrl,
    siteName: "Andres Arcela",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AndresArcela",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andres Arcela",
  url: siteUrl,
  email: "mailto:arcela34@gmail.com",
  jobTitle: "Senior Full Stack & Mobile Engineer",
  description,
  nationality: "Venezuelan",
  address: {
    "@type": "PostalAddress",
    addressCountry: "VE",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "IESA" },
    { "@type": "CollegeOrUniversity", name: "FUNIBER" },
    { "@type": "CollegeOrUniversity", name: "UCAB" },
  ],
  knowsAbout: [
    "React Native",
    "Ionic",
    "Angular",
    "React",
    "NestJS",
    "Node.js",
    "B2B SaaS",
    "Mobile Development",
    "Technical Leadership",
  ],
  sameAs: [
    "https://www.linkedin.com/in/andres-arcela/",
    "https://github.com/aarcela/",
    "https://twitter.com/AndresArcela",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Telefónica VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
