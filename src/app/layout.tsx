"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { Layout } from "~/components/patterns/layout";
import Providers from "~/components/providers";
import { Suspense } from "react";
import Script from "next/script";

import { Toaster } from "~/components/ui/sonner";
import { TailwindIndicator } from "~/components/patterns/tailwind-indicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="beforeInteractive"
        />
        <Suspense>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </Suspense>
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}
