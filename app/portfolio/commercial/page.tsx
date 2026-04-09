import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";

export const metadata: Metadata = {
  title: "Commercial Murals — Stuart Montgomery",
  description:
    "Hand-painted commercial murals by Stuart Montgomery, mural artist based in County Meath. Bespoke artwork for offices, retail spaces, hotels and more across Ireland.",
  alternates: { canonical: "/portfolio/commercial" },
  openGraph: {
    title: "Commercial Murals — Stuart Montgomery",
    description:
      "Bespoke hand-painted murals for commercial spaces across Ireland.",
    url: "https://stuartmontgomery.com/portfolio/commercial",
  },
};

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial02.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial03.jpeg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial04.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial05.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial06.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial07.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial08.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial09.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial10.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial11.jpg",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial12.gif",
    alt: "Commercial mural by Stuart Montgomery",
    title: "Commercial Mural",
    caption: "Hand-painted mural for a commercial space",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/restaurant-bray.jpeg",
    alt: "Restaurant mural in Bray by Stuart Montgomery",
    title: "Restaurant Mural — Bray",
    caption: "Hand-painted mural for a restaurant in Bray",
  },
];

export default function CommercialPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans pt-8">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3"><span className="italic text-primary">C</span>ommercial</h1>
          <p className="text-stone-500 max-w-2xl">
            Bespoke hand-painted murals for offices, retail spaces, hotels and
            hospitality venues across Ireland.
          </p>
        </header>
        <PhotoGallery images={images} />
      </main>
    </div>
  );
}
