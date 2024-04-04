import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Starter Template: Next.js Boilerplate with Basic Structure",
  description:
    "MD Starter Template: Your versatile Next.js boilerplate, offering a meticulously structured foundation for web projects of any kind. Begin your development journey with ease, whether you're crafting documentation sites, blogs, or dynamic web applications. Empower your creativity and streamline your workflow with this adaptable starter template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
