import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashman - Fullstack Developer | React | Next.js | TypeScript",
  description: "Ashman is a skilled Fullstack Developer specializing in React, Next.js, and TypeScript. With expertise in HTML, CSS, JavaScript, and MongoDB, Ashman creates robust, scalable web applications.",
  keywords : "Fullstack Developer, React, Next.js, TypeScript, JavaScript, HTML, CSS, MongoDB, Web Development, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
