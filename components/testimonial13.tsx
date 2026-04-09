import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Testimonial13Props {
  className?: string;
}

const Testimonial13 = ({ className }: Testimonial13Props) => {
  return (
    <section className={cn("bg-secondary px-4 border-border border-2 rounded-md shawdow-md py-8 lg:py-32 lg:w-10/12", className)}>
      <h2 className="text-6xl font-bold mb-6"><span className="italic text-primary text-7xl">T</span>estimonials</h2>
      <div className="container">
        <div className="flex flex-col items-start text-left">
          <div className="mb-8 flex items-center rounded-full bg-secondary p-1 shadow-md">
            <Avatar className="size-10">
              <AvatarImage asChild>
                <Image
                  src="/images/testimonials/giraffe-childcare.png"
                  alt="Giraffe Childcare"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </AvatarImage>
              <AvatarFallback>GC</AvatarFallback>
            </Avatar>
            <div className="mx-2 text-xs font-medium">
              Trusted by businesses across Dublin &amp; Meath
            </div>
          </div>
          <p className="max-w-4xl text-xl font-medium lg:text-2xl p-6 pl-0 bg-secondary ">
            &ldquo;Stuart has worked with us for over 4 years producing murals
            in over a dozen of our creches across Dublin and Meath. He has a
            great gift of being able to liaise with us and bring our creative
            thoughts and ideas to fruition — reproducing this across each of our
            facilities while keeping the branding and character of the company.
            Stuart's work ethic and professionalism, as well as his easy-going
            manner, make him a pleasure to work with.&rdquo;
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Maryanne McCormack, Giraffe Childcare
          </p>
          <Button variant="outline" className="mt-10" asChild>
            <a href="/testimonials">Read more testimonials →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Testimonial13 };
