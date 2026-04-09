import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";

export const metadata: Metadata = {
  title: "Hand Painted Furniture — Stuart Montgomery",
  description:
    "Bespoke hand-painted furniture by Stuart Montgomery. One-of-a-kind pieces personalised with murals, characters and decorative artwork across Ireland.",
  alternates: { canonical: "/portfolio/hand-painted-furniture" },
  openGraph: {
    title: "Hand Painted Furniture — Stuart Montgomery",
    description:
      "Bespoke hand-painted furniture — one-of-a-kind pieces by Stuart Montgomery.",
    url: "https://stuartmontgomery.com/portfolio/hand-painted-furniture",
  },
};

const images: GalleryImage[] = [];

export default function HandPaintedFurniturePage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">Hand Painted Furniture</h1>
          <p className="text-stone-500 max-w-2xl">
            One-of-a-kind bespoke furniture pieces personalised with hand-painted
            murals, characters and decorative artwork.
          </p>
        </header>
        <PhotoGallery images={images} />
      </main>
    </div>
  );
}
