import { Asterisk, CornerDownRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Process1Props {
  className?: string;
}

const Process1 = ({ className }: Process1Props) => {
  const process = [
    {
      step: "01",
      title: "Get in Touch",
      description:
        "Call, text or email to arrange a free initial consultation. There's no obligation and no hidden costs — just a conversation about what you have in mind.",
    },
    {
      step: "02",
      title: "Site Visit & Design",
      description:
        "Stuart visits your location, takes measurements and discusses your ideas, budget and colour preferences. He then works up a concept sketch so you can see exactly what the finished piece will look like before any paint is applied.",
    },
    {
      step: "03",
      title: "Quotation & Start Date",
      description:
        "A detailed quote is submitted based on the design. Once you're happy to proceed, a start date is agreed that suits you.",
    },
    {
      step: "04",
      title: "Sit Back & Watch It Come to Life",
      description:
        "All work is carried out to the highest standard with minimal disruption to your home or business. Every piece is hand-painted — no spraying, no shortcuts.",
    },
  ];

  return (
    <section className={cn("py-8 lg:py-32 border-border border-2 rounded-md shadow-md lg:w-10/12 my-6", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20 px-4">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky lg:top-24 lg:pl-6">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl ">
              {" "}
              <h1 className="w-fit"><span className="text-7xl italic text-primary">H</span>ow It Works</h1>
              <Asterisk className="absolute -top-2 -right-2 size-5 text-primary md:size-10 lg:-right-14" />
            </div>
            <p className="text-base text-foreground/50">
              Commissioning a mural or painted finish is a straightforward,
              enjoyable process. Here's what to expect from first contact to
              finished piece.
            </p>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
              asChild
            >
              <a href="/contact">
                <CornerDownRight className="text-secondary" />
                Get in touch →
              </a>
            </Button>
          </div>
          <ul className="relative col-span-4 w-full lg:pl-22">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute top-4 right-0" />

                <div className="flex size-12 items-center justify-center bg-muted px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
