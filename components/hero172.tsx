import { Check, Star } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero172Props {
  className?: string;
}

const Hero172 = ({ className }: Hero172Props) => {
  return (
    <section
      className={cn("font-dm_sans bg-card rounded-md shadow-md border-border border-2 my-6 py-8 w-full lg:w-10/12", className)}
    >
      <div className="container p-4">
        <div className="grid grid-cols-1 items-stretch justify-center gap-20 lg:grid-cols-2">
          <div className="flex items-center">
            <div className="flex max-w-[40.625rem] flex-col gap-8 lg:pl-12">
              <h1 className="font-serif text-4xl text-foreground font-bold lg:text-6xl">
                <span className="italic text-primary text-7xl">T</span>ransform your space with hand-painted art
              </h1>
              <p className="text-lg text-balance text-muted-foreground">
                From statement murals to beautifully painted furniture, Stuart
                Montgomery brings colour and character to homes, creches,
                restaurants and commercial spaces across Ireland.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-lg px-8 py-5 font-semibold">
                  <a href="/portfolio">View Portfolio</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg px-8 py-5 font-semibold">
                  <a href="/contact">Get a Quote</a>
                </Button>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Check className="stroke-muted2-foreground size-4" />
                  <p className="text-lg font-medium text-foreground/60">
                    Over 20 years experience
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="stroke-muted2-foreground size-4" />
                  <p className="text-lg font-medium text-foreground/60">
                    Based in Co. Meath — working nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative ml-auto aspect-[0.990343348/1] w-full max-w-[42.5rem] lg:pr-8">
              <div className="absolute top-[5.04%] left-[4.33%] z-20 w-[42.25%]">
                <AspectRatio
                  ratio={0.857142857 / 1}
                  className="overflow-hidden"
                >
                  <Image
                    src="/images/portfolio/residential/Living room.jpg"
                    alt="Hand-painted living room mural"
                    fill
                    className="object-cover"
                    priority
                  />
                </AspectRatio>
              </div>

              <div className="absolute right-[8.23%] bottom-[12.87%] z-20 w-[42.25%]">
                <AspectRatio
                  ratio={0.789473684 / 1}
                  className="overflow-hidden"
                >
                  <Image
                    src="/images/portfolio/creche/underwater.jpg"
                    alt="Underwater themed creche mural"
                    fill
                    className="object-cover"
                    priority
                  />
                </AspectRatio>
              </div>

              <div className="absolute bottom-[5%] left-[10.94%] z-30 w-[42.25%]">
                <AspectRatio
                  ratio={0.894495413 / 1}
                  className="overflow-hidden"
                >
                  <Image
                    src="/images/portfolio/boys-room/space room copy.jpg"
                    alt="Hand-painted space themed boys room mural"
                    fill
                    className="object-cover"
                    priority
                  />
                </AspectRatio>
              </div>

              <Star className="absolute top-[15%] right-[16%] size-[4%] stroke-sky-500" />
              <svg
                className="absolute top-[10%] left-0 z-10 w-[70%]"
                viewBox="0 0 588 655"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M319 645.463C229 659.797 41.4 652.163 11 506.963C-27 325.463 100.5 299.463 177 288.963C253.5 278.463 341.5 307 454.5 288.963C486.365 283.877 585 242.009 583.5 119.009C582.3 20.6093 583 2.5 583 0.498047"
                  stroke="#5DCA8A"
                  strokeWidth="8"
                />
              </svg>
              <svg
                className="absolute bottom-0 left-[5%] z-20 w-[7%]"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 3L18 5.5M42.5 18L2 42M49.5 28.5L32.5 52M58.5 34L56 61"
                  stroke="#5DCA8A"
                  strokeWidth="6"
                />
              </svg>
              <svg
                className="absolute top-0 left-0 size-[6%] stroke-amber-500"
                viewBox="0 0 153 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72 9C68.4932 44.3333 50.7836 115 8 115"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path
                  d="M72 192C76 163.333 96.2 106 145 106"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path
                  d="M72 8C76 40.6667 96.2 106 145 106"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path
                  d="M72 192C68.4931 166.333 50.7836 115 8 115"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero172 };
