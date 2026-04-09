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

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/play-area/Blackhall Parade 010.jpg",
    alt: "Play area mural at Blackhall Parade",
    title: "Blackhall Parade",
    caption: "Hand-painted play area mural at Blackhall Parade",
  },
  {
    src: "/images/portfolio/play-area/Cocoon Tallaght 015.jpg",
    alt: "Play area mural at Cocoon Tallaght",
    title: "Cocoon Tallaght",
    caption: "Vibrant play area mural for Cocoon Tallaght",
  },
  {
    src: "/images/portfolio/play-area/Once upon a time 027.jpg",
    alt: "Once Upon a Time fairy tale mural",
    title: "Once Upon a Time",
    caption: "A fairy tale themed mural for a play area",
  },
  {
    src: "/images/portfolio/play-area/PJ Party rooms 002.jpg",
    alt: "PJ Party themed play room mural",
    title: "PJ Party Rooms",
    caption: "Fun PJ party themed mural for a play room",
  },
  {
    src: "/images/portfolio/play-area/PJ Party rooms 005.jpg",
    alt: "PJ Party themed play room mural detail",
    title: "PJ Party Rooms II",
    caption: "Detail of the PJ party themed play room mural",
  },
  {
    src: "/images/portfolio/play-area/Playareas.jpg",
    alt: "Hand-painted play area mural",
    title: "Play Area",
    caption: "A colourful hand-painted mural for a play area",
  },
  {
    src: "/images/portfolio/play-area/World map 011.jpg",
    alt: "World map mural for a play area",
    title: "World Map",
    caption: "Educational world map mural for a play area",
  },
  {
    src: "/images/portfolio/play-area/jungle book.jpg",
    alt: "Jungle Book themed mural",
    title: "Jungle Book",
    caption: "Jungle Book themed mural for a play space",
  },
  {
    src: "/images/portfolio/play-area/jungle.jpg",
    alt: "Jungle themed play area mural",
    title: "Jungle",
    caption: "Lush jungle themed mural for a play area",
  },
  {
    src: "/images/portfolio/play-area/kangakare 031.jpg",
    alt: "Play area mural for Kanga Kare",
    title: "Kanga Kare Play Area",
    caption: "Hand-painted play area mural for Kanga Kare",
  },
  {
    src: "/images/portfolio/play-area/mimitoys 001.jpg",
    alt: "Play area mural for Mimi Toys",
    title: "Mimi Toys",
    caption: "Colourful mural for the Mimi Toys play space",
  },
  {
    src: "/images/portfolio/play-area/terenure murals 023.jpg",
    alt: "Play area mural in Terenure",
    title: "Terenure",
    caption: "Hand-painted play area mural in Terenure",
  },
];

export default function PlayAreaPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans py-16">
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
