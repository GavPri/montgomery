import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";
import { PortfolioBreadcrumb } from "@/components/portfolio-breadcrumb";
import { PortfolioCTA } from "@/components/portfolio-cta";

export const metadata: Metadata = {
  title: "Girls Room Murals — Stuart Montgomery",
  description:
    "Hand-painted girls room murals by Stuart Montgomery. Fairy tales, florals, fantasy and character themes brought to life across Ireland.",
  alternates: { canonical: "/portfolio/girls-room" },
  openGraph: {
    title: "Girls Room Murals — Stuart Montgomery",
    description:
      "Hand-painted murals for girls bedrooms across Ireland.",
    url: "https://stuartmontgomery.com/portfolio/girls-room",
  },
};

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/girls room/naas playroom 008.jpg",
    alt: "Girls room mural in Naas by Stuart Montgomery",
    title: "Naas Playroom",
    caption: "Hand-painted mural for a playroom in Naas",
  },
  {
    src: "/images/portfolio/girls room/South Africa  Mural 002.jpg",
    alt: "South Africa themed mural by Stuart Montgomery",
    title: "South Africa Mural",
    caption: "Hand-painted South Africa themed mural",
  },
  {
    src: "/images/portfolio/girls room/Russian Mural 011 - Copy.jpg",
    alt: "Russian themed mural by Stuart Montgomery",
    title: "Russian Mural",
    caption: "Hand-painted Russian themed mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/faeries - Copy.jpg",
    alt: "Faeries mural by Stuart Montgomery",
    title: "Faeries",
    caption: "Hand-painted faeries mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/pooh copy 02 - Copy.jpg",
    alt: "Winnie the Pooh mural by Stuart Montgomery",
    title: "Winnie the Pooh",
    caption: "Hand-painted Winnie the Pooh mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/castle - Copy.jpg",
    alt: "Castle mural by Stuart Montgomery",
    title: "Castle",
    caption: "Hand-painted castle mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/pooh copy.jpg",
    alt: "Winnie the Pooh mural by Stuart Montgomery",
    title: "Winnie the Pooh",
    caption: "Hand-painted Winnie the Pooh mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/sleeping teddy - Copy.jpg",
    alt: "Sleeping teddy mural by Stuart Montgomery",
    title: "Sleeping Teddy",
    caption: "Hand-painted sleeping teddy mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/Russian Mural 009.jpg",
    alt: "Russian themed mural by Stuart Montgomery",
    title: "Russian Mural",
    caption: "Hand-painted Russian themed mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/Donabate 009.jpg",
    alt: "Girls room mural in Donabate by Stuart Montgomery",
    title: "Donabate",
    caption: "Hand-painted mural for a girls room in Donabate",
  },
  {
    src: "/images/portfolio/girls room/snow white smurfs 001 - Copy.jpg",
    alt: "Snow White and Smurfs mural by Stuart Montgomery",
    title: "Snow White & Smurfs",
    caption: "Hand-painted Snow White and Smurfs mural for a girls room",
  },
  {
    src: "/images/portfolio/girls room/Greystones 004 - Copy.jpg",
    alt: "Girls room mural in Greystones by Stuart Montgomery",
    title: "Greystones",
    caption: "Hand-painted mural for a girls room in Greystones",
  },
];

export default function GirlsRoomPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans pt-8">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <PortfolioBreadcrumb page="Girls Room" />
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">Girls Room</h1>
          <p className="text-stone-500 max-w-2xl">
            Fairy tales, florals, fantasy and character themes hand-painted
            directly onto bedroom walls across Ireland.
          </p>
        </header>
        <PhotoGallery images={images} />
        <PortfolioCTA />
      </main>
    </div>
  );
}
