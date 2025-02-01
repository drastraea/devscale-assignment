import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoFont = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Assignment",
  description: "Devscale Assignment 3 : CRUD Playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoFont.variable} ${notoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
