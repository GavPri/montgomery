import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Cta6Props {
  className?: string;
}

const Cta6 = ({ className }: Cta6Props) => {
  return (
    <section className={cn("py-8", className)}>
      <div className="max-w-10/12 lg:max-w-full overflow-hidden border-y border-border bg-accent rounded-md p-10 md:pt-16 lg:pt-20 mx-auto">
        <div className="relative mx-auto container flex flex-col md:flex-row md:space-x-12">
          <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
            <h3 className="mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
              Ready to transform your space?
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Get in touch for a free consultation. Stuart will visit your
              location, discuss your ideas and provide a no-obligation quote.
            </p>
            <Button asChild>
              <a href="/contact">Get a Free Quote</a>
            </Button>
          </div>
          <div className="absolute right-1/2 bottom-0 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
            <div className="relative aspect-8/5 h-full min-h-[16rem] w-full overflow-clip rounded-3xl">
              <Image
                src="/images/cta-feature.jpg"
                alt="Hand-painted mural by Stuart Montgomery"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta6 };
