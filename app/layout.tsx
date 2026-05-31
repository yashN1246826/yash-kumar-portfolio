import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Yash Kumar | Software Engineer",
  description:
    "Yash Kumar — product-minded software engineer building AI, robotics and cloud systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}