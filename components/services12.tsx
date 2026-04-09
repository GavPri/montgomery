import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
};

const services: ServiceProps[] = [
  {
    title: "Commercial",
    image: "/images/portfolio/commercial/StuartPaintings/commercial02.jpg",
    url: "/portfolio/commercial",
  },
  {
    title: "Residential",
    image: "/images/portfolio/residential/Living room.jpg",
    url: "/portfolio/residential",
  },
  {
    title: "Boys Room",
    image: "/images/portfolio/boys-room/space room copy.jpg",
    url: "/portfolio/boys-room",
  },
  {
    title: "Girls Room",
    image: "/images/portfolio/girls room/faeries - Copy.jpg",
    url: "/portfolio/girls-room",
  },
  {
    title: "Creche",
    image: "/images/portfolio/creche/underwater.jpg",
    url: "/portfolio/creche",
  },
  {
    title: "Play Area",
    image: "/images/portfolio/play-area/jungle.jpg",
    url: "/portfolio/play-area",
  },
  {
    title: "Hand Painted Furniture",
    image: "/images/portfolio/hand-painted-furniture/Hand painted piano.jpg",
    url: "/portfolio/hand-painted-furniture",
  },
];

interface Services12Props {
  className?: string;
}

const Services12 = ({ className }: Services12Props) => {
  return (
    <section className={cn("py-8 lg:py-32 w-full lg:w-10/12 bg-accent rounded-md shawdow-md border-2 border-border my-6", className)}>
      <div className="grid grid-cols-1 gap-10 px-6 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
              <span className="italic text-primary text-7xl font-bold">P</span>ortfolio
            </h2>
            <p className="w-72 text-base tracking-tight text-muted-foreground">
              From hand-painted murals to beautifully crafted furniture, explore
              Stuart's work across homes, creches, restaurants and commercial
              spaces.
            </p>
          </div>
          <Button variant="outline" className="mt-8 w-fit" asChild>
            <a href="/portfolio">
              View full portfolio <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {/* Featured Services - First 2 */}
          {services.slice(0, 2).map((service, idx) => (
            <a
              key={idx}
              href={service.url}
              className="group block overflow-hidden rounded-xl transition-opacity hover:opacity-80"
            >
              <Card className="relative aspect-[3/4] overflow-hidden p-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 text-white drop-shadow-md transition-transform group-hover:scale-110" />
              </Card>
            </a>
          ))}

          {/* Secondary Services - Remaining 5 */}
          <div className="col-span-full grid grid-cols-2 gap-4 sm:grid-cols-5">
            {services.slice(2).map((service, idx) => (
              <a
                key={idx + 2}
                href={service.url}
                className="group block overflow-hidden rounded-xl transition-opacity hover:opacity-80"
              >
                <Card className="relative aspect-[4/3] overflow-hidden p-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
                  <CardContent className="absolute inset-0 flex flex-col justify-start p-4">
                    <div className="pr-4 text-sm font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
                      {service.title}
                    </div>
                  </CardContent>
                  <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white drop-shadow-md transition-transform group-hover:scale-110" />
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services12 };
