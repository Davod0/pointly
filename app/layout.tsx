
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pointly",
  description: "Pointly is a tool for tasks estimation and retrospectives during development sprints"
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
{
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
      </body>
    </html>
  );
}
