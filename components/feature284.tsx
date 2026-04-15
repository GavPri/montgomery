import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const cardBgColors = ["bg-accent", "bg-primary", "bg-secondary"];

const featureData = [
  {
    desc: "Transforming commercial spaces with bold, bespoke murals that leave a lasting impression on clients and customers alike.",
    img: "/images/portfolio/commercial/StuartPaintings/commercial02.jpg",
    title: "Commercial",
    badgeTitle: "Portfolio",
    gridClass: "md:col-span-1",
  },
  {
    desc: "Bringing warmth and character to homes with hand-crafted murals tailored to your personal style.",
    img: "/images/portfolio/residential/Living%20room.jpg",
    title: "Residential",
    badgeTitle: "Portfolio",
    gridClass: "lg:col-span-2",
  },
  {
    desc: "Adventurous murals designed to spark imagination and excitement in every boys bedroom.",
    img: "/images/portfolio/boys-room/space%20room%20copy.jpg",
    title: "Boys Room",
    badgeTitle: "Portfolio",
    gridClass: "md:col-span-1 lg:row-span-2",
  },
  {
    desc: "Dreamy, whimsical designs that create a magical world for girls to grow and play in.",
    img: "/images/portfolio/girls%20room/faeries%20-%20Copy.jpg",
    title: "Girls Room",
    badgeTitle: "Portfolio",
    gridClass: "lg:col-span-2",
  },
  {
    desc: "Bright, stimulating murals crafted to inspire curiosity and joy in creche and nursery environments.",
    img: "/images/portfolio/creche/Giraffe%20Creche.jpg",
    title: "Creche",
    badgeTitle: "Portfolio",
    gridClass: "md:col-span-1",
  },
  {
    desc: "Vibrant, playful scenes that transform outdoor and indoor play areas into imaginative adventures.",
    img: "/images/portfolio/play-area/jungle%20book.jpg",
    title: "Play Area",
    badgeTitle: "Portfolio",
    gridClass: "md:col-span-1",
  },
  {
    desc: "One-of-a-kind hand-painted furniture pieces that add a unique, artistic touch to any room.",
    img: "/images/portfolio/hand-painted-furniture/Hand%20painted%20kitchen.jpg",
    title: "Hand Painted Furniture",
    badgeTitle: "Portfolio",
    gridClass: "lg:col-span-3",
  },
];

interface Feature284Props {
  className?: string;
}

const Feature284 = ({ className }: Feature284Props) => {
  return (
    <section className={cn("h-full overflow-hidden py-8", className)}>
      <h2 className="text-7xl mt-6 mb-3"><span className="italic text-accent">M</span>y <span className="italic text-secondary">P</span>ortfolio</h2>
      <p className="mb-6 text-xl text-foreground">Click on the tabs below to view my work across various locations.</p>
      <div className="container flex h-full w-full items-center justify-center">
        <div className="grid w-full max-w-7xl auto-rows-[420px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex flex-col gap-2 rounded-3xl border p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                feature.gridClass,
                cardBgColors[index % cardBgColors.length],
                index % cardBgColors.length === 1 && "text-foreground",
                index % cardBgColors.length === 2 && "text-card",
              )}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              {/* Arrow icon — slides in from bottom-right on hover */}
              <div className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-foreground/10 opacity-0 translate-x-2 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="size-8 text-accent bg-primary rounded-full" />
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-background">{feature.badgeTitle}</p>
              </div>
              <div
                className={cn(
                  "relative w-full flex-1 overflow-hidden rounded-3xl bg-muted",
                )}
              >
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="pointer-events-none object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-card">
                {feature.title}
              </h3>
              <p className="text-background font-bold text-sm leading-snug line-clamp-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature284 };
