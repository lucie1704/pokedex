import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Find your favorite pokemons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-violet-900 text-gray-900">{children}</body>
    </html>
  );
}
