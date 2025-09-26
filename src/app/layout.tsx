import type { Metadata, Viewport } from "next";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BackgroundEffect from "@/components/ui/backgroundEffect";
import { CustomDialogProvider } from "@/components/ui/custom-dialog";
import FloatingActionButton from "@/components/ui/FloatingActionButton";
import { domain, email, webImage, websitePath } from "@/data/Links";
import { ThemeProvider } from "@/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domain}`),
  title: {
    template: "%s | Tuan Pham Van - Full Stack Developer",
    default: "Tuan Pham Van - Full Stack Developer & Portfolio",
  },
  description:
    "Explore the portfolio of Tuan Pham Van, Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View projects, experience, and contact details.",
  keywords: [
    "Tuan Pham Van",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "UI/UX",
    "Projects",
    "Contact",
    "Resume",
    "Modern Web",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "AI Integration",
    "Remote Work",
  ].join(", "),
  authors: [{ name: "Tuan Pham Van", url: websitePath.main }],
  creator: "Tuan Pham Van",
  publisher: "Tuan Pham Van",
  alternates: {
    canonical: websitePath.main,
    languages: {
      en: `${websitePath.main}/en`,
      ar: `${websitePath.main}/ar`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    title: "Tuan Pham Van - Full Stack Developer Portfolio",
    description:
      "Discover the work and experience of Tuan Pham Van, a passionate Full Stack Developer. Projects, skills, and contact info included.",
    url: websitePath.main,
    siteName: "Tuan Pham Van Portfolio",
    images: [
      {
        url: webImage,
        width: 400,
        height: 400,
        alt: "Tuan Pham Van Portfolio Preview",
      },
    ],
    countryName: "Palestine",
    emails: [email],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuan Pham Van - Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Tuan Pham Van, Full Stack Developer. Projects, experience, and contact details.",
    images: webImage,
    creator: "@balshaer",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#16161a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="apple-mobile-web-app-title" content="Baraa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tuan Pham Van",
              url: websitePath.main,
              image: webImage,
              sameAs: [
                "https://github.com/tuanpham197",
                "https://www.linkedin.com/tuanpham197",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Samtax",
              },
              description:
                "Full Stack Developer with expertise in React, Node.js, TypeScript, and more.",
            }),
          }}
        />
      </head>
      <body className="flex relative flex-col min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] bg-[linear-gradient(to_right,var(--border-background)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-background)_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomDialogProvider />
          <Toaster />
          <Navbar />
          <BackgroundEffect />
          <main className="z-40 max-md:z-30 mx-auto w-full flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingActionButton threshold={400} />
        </ThemeProvider>
      </body>
    </html>
  );
}
