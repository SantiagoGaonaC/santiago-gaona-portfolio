import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Head from "next/head";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Gaona",
  description: "Portfolio Santiago Gaona - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
