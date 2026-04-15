import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";
import { PortfolioBreadcrumb } from "@/components/portfolio-breadcrumb";
import { PortfolioCTA } from "@/components/portfolio-cta";

export const metadata: Metadata = {
  title: "Boys Room Murals — Stuart Montgomery",
  description:
    "Hand-painted boys room murals by Stuart Montgomery. Adventure, space, sport and character themes brought to life across Ireland.",
  alternates: { canonical: "/portfolio/boys-room" },
  openGraph: {
    title: "Boys Room Murals — Stuart Montgomery",
    description:
      "Hand-painted murals for boys bedrooms across Ireland.",
    url: "https://stuartmontgomery.com/portfolio/boys-room",
  },
};

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/boys-room/South Africa  Mural 002 - Copy.jpg",
    alt: "South Africa themed mural by Stuart Montgomery",
    title: "South Africa Mural",
    caption: "Hand-painted South Africa themed mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/space room copy.jpg",
    alt: "Space themed mural by Stuart Montgomery",
    title: "Space Room",
    caption: "Hand-painted space themed mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/red car 002.jpg",
    alt: "Red car mural by Stuart Montgomery",
    title: "Red Car",
    caption: "Hand-painted car mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/Thunderbirds 015.jpg",
    alt: "Thunderbirds mural by Stuart Montgomery",
    title: "Thunderbirds",
    caption: "Hand-painted Thunderbirds mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/portholes.jpg",
    alt: "Portholes mural by Stuart Montgomery",
    title: "Portholes",
    caption: "Hand-painted portholes mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/naas playroom 015.jpg",
    alt: "Playroom mural in Naas by Stuart Montgomery",
    title: "Naas Playroom",
    caption: "Hand-painted mural for a playroom in Naas",
  },
  {
    src: "/images/portfolio/boys-room/Harrys toy factory copy.jpg",
    alt: "Harry's toy factory mural by Stuart Montgomery",
    title: "Harry's Toy Factory",
    caption: "Hand-painted toy factory mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/spidey copy.jpg",
    alt: "Spiderman mural by Stuart Montgomery",
    title: "Spiderman",
    caption: "Hand-painted Spiderman mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/celtic.jpg",
    alt: "Celtic themed mural by Stuart Montgomery",
    title: "Celtic",
    caption: "Hand-painted Celtic themed mural for a boys room",
  },
  {
    src: "/images/portfolio/boys-room/Thomas.jpg",
    alt: "Thomas the Tank Engine mural by Stuart Montgomery",
    title: "Thomas the Tank Engine",
    caption: "Hand-painted Thomas the Tank Engine mural for a boys room",
  },
];

export default function BoysRoomPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans pt-8">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <PortfolioBreadcrumb page="Boys Room" />
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">Boys Room</h1>
          <p className="text-stone-500 max-w-2xl">
            Adventure, space, sport and character themes hand-painted directly
            onto bedroom walls across Ireland.
          </p>
        </header>
        <PhotoGallery images={images} />
        <PortfolioCTA />
      </main>
    </div>
  );
}
