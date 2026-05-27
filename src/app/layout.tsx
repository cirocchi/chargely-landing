import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://chargely.it";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Diventa host di ricarica EV a Roma | Chargely",
    template: "%s | Chargely",
  },
  description:
    "Hai una presa o wallbox a Roma? Trasformala in un guadagno fino a 110 €/mese ricaricando auto elettriche. Analisi bolletta gratis, iscrizione in 2 minuti.",
  keywords: [
    "ricarica auto elettrica Roma",
    "wallbox condivisa",
    "guadagnare con presa elettrica",
    "host ricarica EV",
    "rete ricarica privati",
    "peer to peer charging Italia",
  ],
  authors: [{ name: "Chargely" }],
  creator: "Chargely",
  publisher: "Chargely",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diventa host di ricarica EV a Roma | Chargely",
    description:
      "Wallbox o presa Schuko: trasformala in un guadagno extra. Stiamo costruendo a Roma la prima rete di ricarica tra privati.",
    url: SITE_URL,
    siteName: "Chargely",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chargely – ricarica EV tra privati a Roma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diventa host di ricarica EV a Roma | Chargely",
    description: "Trasforma la tua presa in un guadagno fino a 110 €/mese.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IT-62",
    "geo.placename": "Roma",
    "geo.position": "41.9028;12.4964",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1F14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <html lang="it" className={`${geistSans.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        {googleMapsKey && (
          <Script
            id="google-maps-loader"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src="https://maps.googleapis.com/maps/api/js?"+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({key:"${googleMapsKey}",v:"weekly",language:"it"});
              `,
            }}
          />
        )}
        <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chargely",
            url: SITE_URL,
            logo: `${SITE_URL}/icon.png`,
            email: "ciao@chargely.it",
            areaServed: { "@type": "City", name: "Roma" },
            sameAs: [],
          })}
        </Script>
      </body>
    </html>
  );
}
