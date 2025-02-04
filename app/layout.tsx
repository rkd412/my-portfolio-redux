import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert K. Davis | Web Developer & Tech Enthusiast",
  description: "Personal and professional page for Pittsburgh based Web Developer Robert K. Davis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
