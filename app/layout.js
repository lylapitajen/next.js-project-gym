import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import "./../styles/_main.scss";
import Sidenav from "@/components/Sidenav";

export const metadata = {
  title: "Elite Fitness",
  description: "Elite Fitness Gym London",
};
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div id="overlay"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
