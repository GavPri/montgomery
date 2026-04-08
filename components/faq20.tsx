import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Question {
  question: string;
  answer: string;
}

interface Category {
  title: string;
  questions: Question[];
}

interface Faq20Props {
  heading?: string;
  description?: string;
  contactLinkText?: string;
  contactLinkHref?: string;
  categories?: Category[];
  className?: string;
}

const Faq20 = ({
  heading = "Got Questions?",
  description = "If you can't find what you're looking for,",
  contactLinkText = "get in touch",
  contactLinkHref = "/contact",
  categories = [
    {
      title: "Getting started",
      questions: [
        {
          question: "How do I commission a mural?",
          answer:
            "Contact Stuart by phone or email. He'll visit the location, take measurements and discuss ideas and budgets. He'll then work up a rough design and submit a quote. If you're happy to proceed, a start date is agreed.",
        },
        {
          question: "I have a wall that is 8ft high by 7ft wide — how much would it cost to have a mural produced?",
          answer:
            "It's very difficult to quote on jobs by dimensions alone. The amount of work varies greatly from one design to another. Only once a design has been agreed can a quote be submitted.",
        },
        {
          question: "I'd love a mural in my child's room but don't know what to get — can you help?",
          answer:
            "Yes. Stuart brings his own portfolio to the initial meeting and through discussion can come up with a concept that fulfils your hopes and your child's dreams.",
        },
      ],
    },
    {
      title: "Materials & finish",
      questions: [
        {
          question: "Are the paints safe?",
          answer:
            "Yes. Most interior murals use water-based acrylic emulsions, similar to standard wall paint. Products may vary depending on the location — e.g. swimming pools, hospitals, or exterior murals.",
        },
        {
          question: "Are the murals protected?",
          answer:
            "Yes. All paintings are coated with a water-based protective glaze. Clients can choose gloss, satin or matt finish. All protective finishes are wipe-able and washable.",
        },
        {
          question: "What can you paint?",
          answer:
            "Anything from Pre-Raphaelite to Post-Modernist, Hanna-Barbera to Disney. Size and scale are no problem. Most kitchens and wooden furniture can also be painted.",
        },
      ],
    },
    {
      title: "Other questions",
      questions: [
        {
          question: "Can you decorate the room as well as produce the mural?",
          answer:
            "Yes. Stuart can provide an all-inclusive price for decorating and producing the mural, with colour consultancy to ensure everything works in harmony.",
        },
        {
          question: "We may be moving in a few years — can the mural be produced on MDF or canvas?",
          answer:
            "Yes. Any design can be produced off-site in Stuart's studio on canvas or MDF board, photographed during production, and transported to its location when complete.",
        },
      ],
    },
  ],
  className,
}: Faq20Props) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="mx-auto grid gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-6xl text-foregound">
              <span className="italic text-primary">G</span>{heading.slice(1)}
            </h2>
            <p className="max-w-md leading-snug text-muted-foreground lg:mx-auto">
              {description}{" "}
              <a
                href={contactLinkHref}
                className="underline underline-offset-4"
              >
                {contactLinkText}
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h3 className="border-b py-4 text-muted-foreground text-2xl text-primary">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible  className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem className="" key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-lg h-auto">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq20 };
