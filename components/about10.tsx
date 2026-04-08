import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const profile = {
  title: "Stuart Montgomery",
  subtitle: "Commercial Artist, Co. Meath",
  bio: "Stuart Montgomery is a commercial artist based in Dunboyne, Co. Meath, with over 20 years experience producing hand-painted murals, decorative finishes and bespoke artwork for homes, businesses, creches, restaurants and public spaces across Ireland and beyond.",
  vision:
    "Every project begins with a conversation. Stuart visits your space, listens to your ideas and works up a concept sketch before any paint is applied — so you know exactly what you're getting. No spraying, no shortcuts. Every piece is hand-painted to the highest standard with minimal disruption to your home or business.",
  outro:
    "Based in Co. Meath and working nationwide — Stuart has painted everything from children's bedrooms in Leinster to Irish pubs in America.",
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
                  <img
                    src="/images/stuart-about.jpg"
                    alt="Stuart Montgomery"
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{profile.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <nav>
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

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <h2 className="text-2xl font-medium">How I Work</h2>
                  <p className="leading-relaxed">{profile.vision}</p>
                </div>

                <div className="my-12">
                  <img
                    src="/images/stuart-about.jpg"
                    alt="Stuart Montgomery infront of princess wall art."
                    className="rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <h2 className="mb-8 text-2xl font-medium">Explore My Work</h2>
                  <div className="space-y-6">
                    {profile.team.map(({ id, item, type, href }) => (
                      <a
                        key={id}
                        href={href}
                        className="group flex items-center justify-between border-b py-4 hover:border-primary transition-colors"
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
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <p className="leading-relaxed">{profile.outro}</p>
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
