import { Geist, Geist_Mono,Oswald,Aleo,Caladea } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700"]
});

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800","900"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caladea = Caladea({
  variable: "--font-caladea",
  subsets: ["latin"],
  weight: ["400","700"]
});

export const metadata = {
  title: "Kiran Khan",
  description: "Official Portfolio of Kiran Khan - Artist, Curator, Educator, and Researcher. Explore her diverse body of work, exhibitions, and projects that bridge art and activism.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`${geistSans.variable} ${caladea.variable} ${aleo.variable} ${oswald.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
