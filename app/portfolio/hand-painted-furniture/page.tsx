import type { Metadata } from "next";
import { PhotoGallery, type GalleryImage } from "@/components/photo-gallery";
import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { PortfolioBreadcrumb } from "@/components/portfolio-breadcrumb";
import { PortfolioCTA } from "@/components/portfolio-cta";

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

const beforeAfterPairs = [
  {
    title: "Door",
    before: "/images/portfolio/hand-painted-furniture/Door Before.jpg",
    after: "/images/portfolio/hand-painted-furniture/Door after.jpg",
  },
  {
    title: "Kitchen 1",
    before: "/images/portfolio/hand-painted-furniture/kitchen01-before.jpg",
    after: "/images/portfolio/hand-painted-furniture/kitchen01-after.jpg",
  },
  {
    title: "Kitchen 2",
    before: "/images/portfolio/hand-painted-furniture/kitchen02-before.jpg",
    after: "/images/portfolio/hand-painted-furniture/kitchen02-after.jpg",
  },
  {
    title: "Kitchen 3",
    before: "/images/portfolio/hand-painted-furniture/kitchen03-before.jpg",
    after: "/images/portfolio/hand-painted-furniture/kitchen03-after.jpg",
  },
  {
    title: "Press",
    before: "/images/portfolio/hand-painted-furniture/press-before.jpg",
    after: "/images/portfolio/hand-painted-furniture/press-after.jpg",
  },
  {
    title: "Table",
    before: "/images/portfolio/hand-painted-furniture/table-before.jpg",
    after: "/images/portfolio/hand-painted-furniture/table-after.jpg",
  },
];

const images: GalleryImage[] = [
  {
    src: "/images/portfolio/hand-painted-furniture/Hand painted kitchen.jpg",
    alt: "Hand painted kitchen",
    title: "Hand Painted Kitchen",
    caption: "A beautifully hand-painted kitchen",
  },
  {
    src: "/images/portfolio/hand-painted-furniture/Hand painted kitchen 2.jpg",
    alt: "Hand painted kitchen detail",
    title: "Hand Painted Kitchen II",
    caption: "Detail of a hand-painted kitchen",
  },
  {
    src: "/images/portfolio/hand-painted-furniture/Hand painted piano.jpg",
    alt: "White upright piano hand-painted with colourful musical notes",
    title: "Hand Painted Piano",
    caption: "A white upright piano decorated with hand-painted colourful musical notes",
  },
  {
    src: "/images/portfolio/hand-painted-furniture/Hand painted stuff. Mural 005.jpg",
    alt: "Hand painted furniture and mural",
    title: "Hand Painted Furniture & Mural",
    caption: "Bespoke hand-painted furniture alongside a wall mural",
  },
];

export default function HandPaintedFurniturePage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans pt-8">
      <main className="flex flex-1 w-full max-w-6xl flex-col py-16 px-4 lg:px-16">
        <PortfolioBreadcrumb page="Hand Painted Furniture" />
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">
            Hand Painted Furniture
          </h1>
          <p className="text-stone-500 max-w-2xl">
            One-of-a-kind bespoke furniture pieces personalised with
            hand-painted murals, characters and decorative artwork.
          </p>
        </header>

        {/* Before & After section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-stone-700 mb-6">
            Before &amp; After
          </h2>
          <div className="flex flex-col gap-10">
            {beforeAfterPairs.map((pair) => (
              <div key={pair.title}>
                <h3 className="text-base font-medium text-stone-600 mb-3">
                  {pair.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      Before
                    </span>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
                      <ImageWithSkeleton
                        src={pair.before}
                        alt={`${pair.title} — before`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      After
                    </span>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
                      <ImageWithSkeleton
                        src={pair.after}
                        alt={`${pair.title} — after`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Standalone gallery */}
        <section>
          <h2 className="text-xl font-semibold text-stone-700 mb-6">
            More Work
          </h2>
          <PhotoGallery images={images} />
        </section>
        <PortfolioCTA />
      </main>
    </div>
  );
}
