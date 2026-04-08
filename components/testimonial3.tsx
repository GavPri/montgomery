import { cn } from "@/lib/utils";

interface Testimonial3Props {
  className?: string;
}

const testimonials = [
  {
    quote:
      "We were looking for something to brighten up our children's bedrooms. Stuart came around, discussed a range of options and produced sketches within our budget. They turned out absolutely fantastic and are to an extremely high standard. Three years later we are still constantly getting comments. Money very very well spent — I couldn't recommend Stuart highly enough.",
    author: "Mairead",
  },
  {
    quote:
      "We decided to forget about pre-printed wallpaper and children's posters — we wanted something lasting and meaningful. Stuart took our concept, came back with a thumbnail draft incorporating our favourite animals and landscapes, and completed the mural in a few days. The final result is outstanding. Stuart was very professional and an excellent artist.",
    author: "Kevin",
  },
  {
    quote:
      "Stuart has worked with us for over 4 years producing murals in over a dozen of our creches across Dublin and Meath. He has a great gift of being able to liaise with us and bring our creative thoughts and ideas to fruition — reproducing this across each of our facilities while keeping the branding and character of the company. Stuart's work ethic and professionalism, as well as his easy-going manner, make him a pleasure to work with.",
    author: "Maryanne McCormack, Giraffe Childcare",
  },
  {
    quote:
      "Stuart got in touch enquiring whether we were looking for mural work in our playcentre. Within a couple of days of seeing the rooms he had a marvellous idea drawn up, a price agreed and a start date set. The process could not have been easier and we were absolutely delighted with the results — as are all the children.",
    author: "Mary & James, P.J.'s Playcentres & Tots + Swots, Balbriggan",
  },
  {
    quote:
      "Just wanted to drop you a line to say how thrilled we all are with the mural. We had the unveiling yesterday — I don't think I've seen a 4 year old so excited. It is exactly what we wanted and even better than we could possibly have imagined. We will definitely be passing your number on.",
    author: "Fiona",
  },
];

const Testimonial3 = ({ className }: Testimonial3Props) => {
  return (
    <section className={cn("py-8 w-full max-w-10/12", className)}>
      <div className="text-center mb-12">
        <h2 className="text-6xl mb-4">
          <span className="italic text-primary text-7xl">T</span>estimonials
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what families,
          businesses, and childcare providers across Dublin and Meath have to say
          about Stuart&apos;s work.
        </p>
      </div>
      <div className="container flex flex-col gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start px-4 lg:items-center gap-4 border-border border-1 rounded-md py-10 text-center"
          >
            <q className="block max-w-5xl text-xl font-medium lg:text-2xl italic text-left">
              {testimonial.quote}
            </q>
            <p className="font-medium text-primary text-left">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Testimonial3 };
