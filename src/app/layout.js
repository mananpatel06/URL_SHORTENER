import { Inter } from "next/font/google";
import "./globals.css";
import DataProvider from "@/context/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "URL Shortener",
  description: "URL Shortener By Manan Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DataProvider>
      <body className={inter.className}>{children}</body>
      </DataProvider>
    </html>
  );
}
