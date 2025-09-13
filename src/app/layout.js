import { Caladea } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





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
        className={` ${caladea.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
