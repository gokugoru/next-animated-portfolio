import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {AnimatePresence} from "framer-motion";
import TransitionProvider from "@/components/transition-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex's Portfolio",
  description: "Animated portfolio app built with Next.js and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
