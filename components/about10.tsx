import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const profile = {
  title: "Stuart Montgomery",
  subtitle: "Commercial Artist, Co. Meath",
  bio: "Stuart Montgomery is a commercial artist based in County Meath with a career spanning three decades, two continents and everything from West End theatre sets to children's bedroom walls. Whether you're a homeowner with an idea or a business looking for something that makes people stop and stare, Stuart brings the same care, craft and conversation to every project.",
  background: [
    "Born in Essex in 1972, Stuart studied Three Dimensional Design at Thurrock Technical College before going on to Manchester Metropolitan University, where he graduated in 1995 with a degree majoring in wood, metal, ceramics and glass.",
    "He moved to London after graduating and spent several years working as a prop maker for art houses, producing props and scenic backdrops for TV commercials, pop videos and West End theatre productions. It was during this period that he worked on the final series of Spitting Image, taught himself sign-writing and began producing large-scale murals for restaurants, hotels and nightclubs.",
    "Stuart moved to Ireland in 1998 and quickly built a reputation for large-scale hand-painted murals across the country — country houses, pubs, restaurants, creches and a growing domestic clientele. He has since travelled to America to produce decorative paint finishes for a chain of Irish pubs, and has completed projects in Portugal, London and Manchester.",
    "His move to Ireland also opened doors in the screen and stage industry. Stuart has built props and scene-painted for RTÉ and numerous independent production companies, with work appearing on shows as varied as Podge and Rodge, The Dunphy Show and Jason Byrne's Out of the Box.",
  ],
  vision:
    "Every project begins with a conversation. Stuart visits your space, listens to your ideas and works up a concept sketch before any paint is applied — so you know exactly what you're getting. No spraying, no shortcuts. Every piece is hand-painted to the highest standard with minimal disruption to your home or business.",
  outro:
    "Stuart is based in County Meath and continues to work throughout Ireland and abroad, producing murals and artwork for loyal clients and new customers alike. You can reach him by email at info@stuartmontgomery.com or by phone on +353 87 2900736. For information on commissioning a mural or painting, see the FAQs page.",
  team: [
    { id: "01", item: "Commercial", type: "Offices, restaurants & retail", href: "#" },
    { id: "02", item: "Residential", type: "Homes & living spaces", href: "#" },
    { id: "03", item: "Boys Room", type: "Adventure & imagination", href: "#" },
    { id: "04", item: "Girls Room", type: "Whimsical & dreamy", href: "#" },
    { id: "05", item: "Creche", type: "Nurseries & early learning", href: "#" },
    { id: "06", item: "Play Area", type: "Indoor & outdoor play spaces", href: "#" },
    { id: "07", item: "Hand Painted Furniture", type: "Bespoke painted pieces", href: "#" },
  ],
};

interface About10Props {
  className?: string;
}

const About10 = ({ className }: About10Props) => {
  return (
    <section className={cn("py-8", className)}>
      <div className="container">
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3 md:pr-4">
            <div className="sticky top-20 md:p-6">
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src="/images/stuart-about.jpg"
                    alt="Stuart Montgomery, mural artist based in County Meath"
                    className="h-16 w-16 rounded-lg object-cover"
                    width={64}
                    height={64}
                    priority
                  />
                  <div>
                    <p className="font-semibold">{profile.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <nav aria-label="About page navigation">
                <div className="py-4">
                  <a
                    href="/contact"
                    className="group flex p-0 text-start text-xl font-medium hover:bg-transparent hover:text-primary sm:text-2xl"
                  >
                    <span className="border-b-2 border-border pb-0.5 transition-colors">
                      Get in Touch
                    </span>
                    <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <div className="py-4">
                  <a
                    href="/portfolio"
                    className="group flex p-0 text-start text-xl font-medium hover:bg-transparent hover:text-primary sm:text-2xl"
                  >
                    <span className="border-b-2 border-border pb-0.5 transition-colors">
                      View Portfolio
                    </span>
                    <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:p-6">
            <div className="max-w-4xl">
              <h1 className="mb-12 text-7xl font-semibold"><span className="italic text-primary">A</span>bout Stuart</h1>

              <div className="space-y-12">
                <p className="w-full text-2xl leading-[36px] font-medium md:max-w-2xl">
                  {profile.bio}
                </p>

                <div className="space-y-6">
                  <h2 className="text-2xl font-medium">Background</h2>
                  {profile.background.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <h2 className="text-2xl font-medium">How I Work</h2>
                  <p className="leading-relaxed">{profile.vision}</p>
                </div>

                <div className="my-12">
                  <Image
                    src="/images/stuart-about.jpg"
                    alt="Stuart Montgomery standing in front of a hand-painted princess mural"
                    className="rounded-2xl object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>

                <div>
                  <h2 className="mb-8 text-2xl font-medium">Explore My Work</h2>
                  <ul className="space-y-6">
                    {profile.team.map(({ id, item, type, href }) => (
                      <li key={id}>
                        <a
                          href={href}
                          className="group flex items-center justify-between border-b py-4 hover:border-primary transition-colors"
                          aria-label={`View ${item} portfolio — ${type}`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-sm text-muted-foreground">
                              {id}
                            </span>
                            <span className="text-base group-hover:text-primary transition-colors">{item}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {type}
                            </span>
                            <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-16 space-y-2">
                  <p className="leading-relaxed">
                    Stuart is based in County Meath and continues to work
                    throughout Ireland and abroad, producing murals and artwork
                    for loyal clients and new customers alike.
                  </p>
                  <p className="leading-relaxed">
                    Contact Stuart by email at{" "}
                    <a
                      href="mailto:info@stuartmontgomery.com"
                      className="text-primary hover:underline"
                    >
                      info@stuartmontgomery.com
                    </a>{" "}
                    or by phone on{" "}
                    <a
                      href="tel:+353872900736"
                      className="text-primary hover:underline"
                    >
                      +353 87 2900736
                    </a>
                    .
                  </p>
                  <p className="leading-relaxed">
                    For information on commissioning a mural or painting, see
                    the{" "}
                    <a href="/faqs" className="text-primary hover:underline">
                      FAQs page
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About10 };
