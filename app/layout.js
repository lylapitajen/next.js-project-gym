import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import "./../styles/_main.scss";

export const metadata = {
  title: "Elite Fitness",
  description: "Elite Fitness Gym London",
};
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
