import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Folium Ater",
  description: "Folium ater, by Luis Espinoza. Personal explorations about life and society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>{children}</body>
    </html>
  );
}
