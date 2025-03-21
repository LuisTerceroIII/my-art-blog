import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Registros",
  description: "",
  keywords: ["filosofía", "devenir", "arte", "vida", "pensamiento", "ideas", "reflexión", "creatividad","Luis", "Espinoza", "Luis Espinoza", "Lex Ater","artículos", "opiniones", "pensamientos","reflexionar","inspirar"],
  metadataBase: new URL('https://0-registros.art'),
  authors: [
    {
      name: "Luis Espinoza",
      url: "https://luisespinozadev.site/"
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
    title: 'Ø - Registros',
    description: '',
    url: 'https://0-registros.art',
    siteName: 'Ø - Registros',
    locale: 'es_ES',
    type: 'website',
    images: '/Cero.Vivo.png'
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
