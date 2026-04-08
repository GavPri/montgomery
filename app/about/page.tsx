import type { Metadata } from "next";
import { About10 } from "@/components/about10";

export const metadata: Metadata = {
  title: "About Stuart Montgomery — Mural Artist, Co. Meath",
  description:
    "Learn about Stuart Montgomery, a hand-painted mural artist based in County Meath with over 25 years of experience working across Ireland, the UK and the USA. Commercial, residential, creche and bespoke artwork.",
  openGraph: {
    title: "About Stuart Montgomery — Mural Artist, Co. Meath",
    description:
      "Stuart Montgomery is a hand-painted mural artist based in County Meath. With a background in prop-making, theatre and fine art, he brings over 25 years of experience to every project.",
    url: "https://stuartmontgomery.com/about",
    siteName: "Stuart Montgomery",
    images: [
      {
        url: "/images/stuart-about.jpg",
        width: 1200,
        height: 630,
        alt: "Stuart Montgomery, mural artist, County Meath",
      },
    ],
    locale: "en_IE",
    type: "profile",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-24 px-4 lg:px-16">
        <About10/>
      </main>
    </div>
  );
}
