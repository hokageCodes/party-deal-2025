import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Party Deal | Catering for all...",
  description: "Top catering service company in Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/82346df2075cf90ed44a8e36099a87a8?family=Satoshi+Variable" rel="stylesheet" type="text/css"/>
        <link href="https://db.onlinewebfonts.com/c/1aa6e195f3dfb7c4f9542d13c6c8e52f?family=Coolvetica+Rg" rel="stylesheet" type="text/css"/>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
