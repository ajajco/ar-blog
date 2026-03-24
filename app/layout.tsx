import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "مدونتي العربية الرئيسية",
    template: "%s | مدونتي العربية",
  },
  description:
    "مدونة عربية متخصصة في الأعمال، التقنية، التسويق الرقمي، وريادة الأعمال. اكتشف مقالات عميقة ومفيدة.",
  metadataBase: new URL("https://ar-blog-one.vercel.app"),
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
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}