import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";

export const metadata: Metadata = {
  title: "Creche Murals — Stuart Montgomery",
  description:
    "Hand-painted creche and early years murals by Stuart Montgomery. Bright, engaging and educational artwork for childcare settings across Ireland.",
  alternates: { canonical: "/portfolio/creche" },
  openGraph: {
    title: "Creche Murals — Stuart Montgomery",
    description:
      "Bright, engaging hand-painted murals for creches and early years settings across Ireland.",
    url: "https://stuartmontgomery.com/portfolio/creche",
  },
};

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/creche/Giraffe Creche.jpg",
    alt: "Giraffe mural in a creche",
    title: "Giraffe Mural",
    caption: "A playful giraffe mural bringing life to a creche room",
  },
  {
    src: "/images/portfolio/creche/alphabet_and_no_s.jpg",
    alt: "Alphabet wall mural",
    title: "Alphabet Wall",
    caption: "Educational alphabet mural for early years learning",
  },
  {
    src: "/images/portfolio/creche/cocoon_hallway.jpg",
    alt: "Hand-painted hallway mural at Cocoon Creche",
    title: "Cocoon Hallway",
    caption: "Hand-painted hallway mural at Cocoon Creche",
  },
  {
    src: "/images/portfolio/creche/cocoon_sign.jpg",
    alt: "Hand-painted sign for Cocoon Creche",
    title: "Cocoon Sign",
    caption: "Hand-painted entrance sign for Cocoon Creche",
  },
  {
    src: "/images/portfolio/creche/colly.jpg",
    alt: "Custom character mural for a creche",
    title: "Colly",
    caption: "Custom character mural for a creche setting",
  },
  {
    src: "/images/portfolio/creche/kangakare_sign.jpg",
    alt: "Hand-painted sign for Kanga Kare childcare",
    title: "Kanga Kare Sign",
    caption: "Hand-painted sign for Kanga Kare childcare",
  },
  {
    src: "/images/portfolio/creche/letter_E.jpg",
    alt: "Educational letter E mural",
    title: "Letter E",
    caption: "Educational letter mural for early years",
  },
  {
    src: "/images/portfolio/creche/nursery_rhymes_copy.jpg",
    alt: "Nursery rhymes themed mural",
    title: "Nursery Rhymes",
    caption: "Nursery rhymes themed mural for a creche room",
  },
  {
    src: "/images/portfolio/creche/picture_alphabet.jpg",
    alt: "Illustrated alphabet mural",
    title: "Picture Alphabet",
    caption: "Illustrated alphabet mural for a creche",
  },
  {
    src: "/images/portfolio/creche/snake_room.jpg",
    alt: "Snake themed room mural",
    title: "Snake Room",
    caption: "Colourful snake themed mural for a creche room",
  },
  {
    src: "/images/portfolio/creche/underwater.jpg",
    alt: "Underwater themed mural",
    title: "Underwater World",
    caption: "Underwater themed mural for a creche room",
  },
  {
    src: "/images/portfolio/creche/wobbler.jpg",
    alt: "Mural for the wobbler room",
    title: "Wobbler Room",
    caption: "Hand-painted mural for the wobbler room",
  },
];

export default function CrechePage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">Creche</h1>
          <p className="text-stone-500 max-w-2xl">
            Bright, engaging and educational hand-painted murals for creches
            and early years settings across Ireland.
          </p>
        </header>
        <PhotoGallery images={images} />
      </main>
    </div>
  );
}
