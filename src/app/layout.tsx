import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CaraQueCoda | Cursos de Programação Web para Iniciantes',
  description: 'A escola de programação @caraquecoda é dedicada a fornecer educação de alta qualidade em programação web para iniciantes. Nossos cursos são desenvolvidos por Victor Nogueira, um experiente desenvolvedor e instrutor, e são projetados para ajudar você a alcançar seus objetivos na área de tecnologia. ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
