import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";
import { PortfolioBreadcrumb } from "@/components/portfolio-breadcrumb";
import { PortfolioCTA } from "@/components/portfolio-cta";

export const metadata: Metadata = {
  title: "Residential Murals — Stuart Montgomery",
  description:
    "Hand-painted residential murals by Stuart Montgomery. Bespoke artwork for living rooms, hallways, kitchens and more across Ireland.",
  alternates: { canonical: "/portfolio/residential" },
  openGraph: {
    title: "Residential Murals — Stuart Montgomery",
    description:
      "Bespoke hand-painted murals for homes across Ireland.",
    url: "https://stuartmontgomery.com/portfolio/residential",
  },
};

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/residential/Bathroom 1.jpg",
    alt: "Bathroom mural by Stuart Montgomery",
    title: "Bathroom",
    caption: "Hand-painted mural for a residential bathroom",
  },
  {
    src: "/images/portfolio/residential/Living room 1.jpg",
    alt: "Living room mural by Stuart Montgomery",
    title: "Living Room",
    caption: "Hand-painted mural for a residential living room",
  },
  {
    src: "/images/portfolio/residential/Dining room ceiling.jpg",
    alt: "Dining room ceiling mural by Stuart Montgomery",
    title: "Dining Room Ceiling",
    caption: "Hand-painted ceiling mural for a residential dining room",
  },
  {
    src: "/images/portfolio/residential/Hallway.jpg",
    alt: "Hallway mural by Stuart Montgomery",
    title: "Hallway",
    caption: "Hand-painted mural for a residential hallway",
  },
  {
    src: "/images/portfolio/residential/Living room.jpg",
    alt: "Living room mural by Stuart Montgomery",
    title: "Living Room",
    caption: "Hand-painted mural for a residential living room",
  },
  {
    src: "/images/portfolio/residential/Kitchen 1.jpg",
    alt: "Kitchen mural by Stuart Montgomery",
    title: "Kitchen",
    caption: "Hand-painted mural for a residential kitchen",
  },
  {
    src: "/images/portfolio/residential/Washroom.jpg",
    alt: "Washroom mural by Stuart Montgomery",
    title: "Washroom",
    caption: "Hand-painted mural for a residential washroom",
  },
  {
    src: "/images/portfolio/residential/portholes.jpg",
    alt: "Porthole mural by Stuart Montgomery",
    title: "Portholes",
    caption: "Hand-painted porthole mural for a residential space",
  },
  {
    src: "/images/portfolio/residential/Sitting room.jpg",
    alt: "Sitting room mural by Stuart Montgomery",
    title: "Sitting Room",
    caption: "Hand-painted mural for a residential sitting room",
  },
  {
    src: "/images/portfolio/residential/Conservatory.jpg",
    alt: "Conservatory mural by Stuart Montgomery",
    title: "Conservatory",
    caption: "Hand-painted mural for a residential conservatory",
  },
  {
    src: "/images/portfolio/residential/Conservatory 1.jpg",
    alt: "Conservatory mural by Stuart Montgomery",
    title: "Conservatory",
    caption: "Hand-painted mural for a residential conservatory",
  },
  {
    src: "/images/portfolio/residential/Kitchen.jpg",
    alt: "Kitchen mural by Stuart Montgomery",
    title: "Kitchen",
    caption: "Hand-painted mural for a residential kitchen",
  },
];

export default function ResidentialPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans pt-8">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <PortfolioBreadcrumb page="Residential" />
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">Residential</h1>
          <p className="text-stone-500 max-w-2xl">
            Bespoke hand-painted murals for living rooms, hallways, kitchens
            and all spaces throughout the home.
          </p>
        </header>
        <PhotoGallery images={images} />
        <PortfolioCTA />
      </main>
    </div>
  );
}
