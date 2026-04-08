import type { Metadata } from "next";
import { Feature284 } from "@/components/feature284";

export const metadata: Metadata = {
  title: "Portfolio — Murals & Artwork",
  description:
    "Browse Stuart Montgomery's portfolio of hand-painted murals across commercial spaces, homes, boys and girls rooms, creches, play areas and furniture.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Stuart Montgomery Murals & Artwork",
    description:
      "Hand-painted murals for commercial spaces, homes, creches, children's rooms and bespoke furniture across Ireland.",
    url: "https://stuartmontgomery.com/portfolio",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <Feature284/>
      </main>
    </div>
  );
}
