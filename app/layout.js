"use client";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./../styles/_main.scss";

export const metadata = {
  title: "Elite Fitness",
  description: "Elite Fitness Gym London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
