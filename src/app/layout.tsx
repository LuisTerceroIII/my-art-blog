import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Lux Ater: arte y filosofía",
  description: "Lux Ater es un espacio para la reflexión y la creatividad. Explora artículos, pensamientos e ideas sobre la vida, el arte y la filosofía por Luis Espinoza.",
  keywords: ["filosofía", "devenir", "arte", "vida", "pensamiento", "ideas", "reflexión", "creatividad","Luis", "Espinoza", "Luis Espinoza", "Lex Ater","artículos", "opiniones", "pensamientos","reflexionar","inspirar"],
  metadataBase: new URL('https://luxater.blog'),
  authors: [
    {
      name: "Luis Espinoza",
      url: "https://luisespinozadev.com.ar"
    }
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Lux Ater por Luis Espinoza',
    description: ' Artículos, opiniones, pensamientos, ideas sobre la vida, arte y filosofía por Luis Espinoza',
    url: 'https://luxater.blog',
    siteName: 'Lux Ater',
    locale: 'es_ES',
    type: 'website',
    images: '/signature.png'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={ptSerif.className}>{children}</body>
    </html>
  );
}
