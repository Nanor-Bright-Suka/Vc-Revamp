import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome To Dr. & Mrs Ohene Afoakwa's Homepage",
  description: "This is a landing page for Dr. & Mrs Ohene Afoakwa's ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className='relative min-h-screen w-full flex flex-col overflow-hidden'>
        <Toaster position="top-center" reverseOrder={true} />
          {children}
    </div>
      </body>
    </html>
  )
}
