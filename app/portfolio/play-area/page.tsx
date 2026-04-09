import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";

export const metadata: Metadata = {
  title: "Play Area Murals — Stuart Montgomery",
  description:
    "Hand-painted play area murals by Stuart Montgomery. Vibrant, imaginative artwork for indoor and outdoor play spaces across Ireland.",
  alternates: { canonical: "/portfolio/play-area" },
  openGraph: {
    title: "Play Area Murals — Stuart Montgomery",
    description:
      "Vibrant hand-painted murals for indoor and outdoor play areas across Ireland.",
    url: "https://stuartmontgomery.com/portfolio/play-area",
  },
};

const images: GalleryImage[] = [];

export default function PlayAreaPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">Play Area</h1>
          <p className="text-stone-500 max-w-2xl">
            Vibrant and imaginative hand-painted murals for indoor and outdoor
            play spaces across Ireland.
          </p>
        </header>
        <PhotoGallery images={images} />
      </main>
    </div>
  );
}
