import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chargely — La rete di ricarica tra privati a Roma",
  description:
    "Hai una presa elettrica raggiungibile da un'auto? Trasformala in un guadagno extra. Stiamo costruendo a Roma la prima rete di ricarica per auto elettriche tra privati.",
  openGraph: {
    title: "Chargely — La rete di ricarica tra privati a Roma",
    description:
      "Wallbox, presa Schuko in garage, in cortile, nel vialetto: diventa host e guadagna ogni mese.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        {googleMapsKey && (
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&language=it&loading=async`}
            async
          />
        )}
      </body>
    </html>
  );
}
