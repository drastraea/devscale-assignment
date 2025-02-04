import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Assignment",
  description: "Devscale Assignment 3 : CRUD Playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
