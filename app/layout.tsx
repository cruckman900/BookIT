import 'bootstrap/dist/css/bootstrap.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "./head";
import Script from "next/script";
import { GlobalProvider } from "./GlobalProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>{children}</GlobalProvider>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://kit.fontawesome.com/7dca0d3600.js"></Script>
      </body>
    </html>
  )
}
