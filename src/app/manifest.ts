import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chargely – Ricarica EV tra privati a Roma",
    short_name: "Chargely",
    description: "La rete di ricarica per auto elettriche tra privati a Roma.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2EFE6",
    theme_color: "#0D1F14",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
