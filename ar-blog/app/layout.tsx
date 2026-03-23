import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "مدونتي العربية | الرئيسية",
    template: "%s | مدونتي العربية",
  },
  description:
    "مدونة عربية متخصصة في الأعمال، التقنية، التسويق الرقمي، وريادة الأعمال. اكتشف مقالات عميقة ومفيدة.",
  metadataBase: new URL("https://your-domain.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "مدونتي العربية",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
