import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";
import { PortfolioBreadcrumb } from "@/components/portfolio-breadcrumb";
import { PortfolioCTA } from "@/components/portfolio-cta";

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
    alt: "Large hand-painted Francis O'Neill portrait mural spanning a stairwell wall",
    title: "Francis O'Neill Stairwell Mural",
    caption: "Large-scale hand-painted tribute to Francis O'Neill (1848–1936) on a commercial stairwell",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial03.jpeg",
    alt: "Hand-painted mural of traditional Irish musicians in a commercial lounge",
    title: "Irish Musicians Mural",
    caption: "Mural depicting traditional Irish musicians in a commercial seating area",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial04.jpg",
    alt: "Hand-painted classical figures mural along a hotel or lobby corridor",
    title: "Classical Figures Mural",
    caption: "Large neoclassical mural with draped figures painted along a commercial corridor",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial05.jpg",
    alt: "Hand-painted figure soaring through a blue sky",
    title: "Flying Figure",
    caption: "Close-up of a hand-painted figure flying through a blue sky",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial06.jpg",
    alt: "Trompe l'oeil mural of a large blue eye tearing through a blue wall",
    title: "Giant Eye Trompe L'oeil",
    caption: "Trompe l'oeil mural of a giant eye breaking through a blue surface",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial07.jpg",
    alt: "Hand-painted sky mural with a flying figure on a boardroom wall",
    title: "Boardroom Sky Mural",
    caption: "Sky and figure mural painted on the feature wall of a boardroom",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial08.jpg",
    alt: "Hand-painted GAA sports collage mural in a stadium executive box",
    title: "GAA Stadium Mural",
    caption: "Sports collage mural featuring hurling and GAA imagery in a stadium suite",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial09.jpg",
    alt: "Hand-painted Japanese geisha mural in a restaurant corridor",
    title: "Japanese Geisha Mural",
    caption: "Traditional Japanese-style mural painted in a restaurant hallway",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial10.jpg",
    alt: "Subtle tonal grapevine silhouette mural on a commercial wall",
    title: "Grapevine Mural",
    caption: "Tonal grapevine and leaf silhouette painted across a feature wall",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial11.jpg",
    alt: "Hand-painted character portrait of a dishevelled priest holding a pint and a candle",
    title: "Character Portrait",
    caption: "Humorous hand-painted character portrait for a commercial setting",
  },
  {
    src: "/images/portfolio/commercial/StuartPaintings/commercial12.gif",
    alt: "Trompe l'oeil mural of a classical stone bust emerging through torn paper",
    title: "Classical Bust Trompe L'oeil",
    caption: "Trompe l'oeil mural depicting a classical bust breaking through a surface",
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
        <PortfolioBreadcrumb page="Commercial" />
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3"><span className="italic text-primary">C</span>ommercial</h1>
          <p className="text-stone-500 max-w-2xl">
            Bespoke hand-painted murals for offices, retail spaces, hotels and
            hospitality venues across Ireland.
          </p>
        </header>
        <PhotoGallery images={images} />
        <PortfolioCTA />
      </main>
    </div>
  );
}
